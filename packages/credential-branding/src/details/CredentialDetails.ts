import {v4 as uuidv4} from 'uuid'
import {VerifiableCredential} from '@veramo/core'
import {asArray, computeEntryHash} from '@veramo/utils'
import {CredentialRole, IBasicCredentialLocaleBranding, IBasicIssuerLocaleBranding, Identity, Party} from '@sphereon/ssi-sdk.data-store'
import {EPOCH_MILLISECONDS, Localization} from '@sphereon/ui-components.core'
import {downloadImage, getImageDimensions} from '@sphereon/ssi-sdk.core'
import {CredentialDetailsRow, CredentialSummary, ISelectAppLocaleBrandingArgs} from '../types'
import {IImagePreloader} from '../services'
import {getCredentialStatus, getIssuerLogo, isImageAddress} from '../utils'
import {ICredential} from '@sphereon/ssi-types'

function findCorrelationIdName(correlationId: string, parties: Party[], activeUser?: Party): string {
  let allParties = parties
  if (activeUser) {
    parties.push(activeUser)
  }
  return (
    allParties?.find((contact: Party) =>
      contact.identities.some((identity: Identity): boolean => identity.identifier.correlationId === correlationId),
    )?.contact.displayName ?? correlationId
  )
}

const getImageSize = async (image: string) => {
  const downloadedImage = await downloadImage(image)
  let imageSize: {width: number; height: number} | undefined = undefined
  if (downloadedImage && (await isImageAddress(image))) {
    imageSize = await getImageDimensions(downloadedImage.base64Content)
  }
  return imageSize
}

const toCredentialDetailsRow = async ({
  object,
  subject,
  issuer,
}: {
  object: Record<string, any>
  subject?: Party
  issuer?: Party
}): Promise<CredentialDetailsRow[]> => {
  let rows: CredentialDetailsRow[] = []
  if (!object) {
    return rows
  }

  for (let [key, value] of Object.entries(object)) {
    if (!key) {
      continue
    }
    // TODO fix hacking together the image
    if (key.toLowerCase().includes('image')) {
      const image: string = typeof value === 'string' ? value : value.id
      rows.push({
        id: uuidv4(),
        label: 'image',
        value: image,
        imageSize: await getImageSize(image),
      })
      continue
    } else if (key === 'type') {
      rows.push({
        id: uuidv4(),
        label: key,
        value: value,
      })
      continue
    }

    if (typeof value === 'object' && value !== null && value !== undefined) {
      // FIXME disabled this to not show keys of objects
      // rows.push({
      //   id: uuidv4(),
      //   label: key,
      //   value: undefined,
      // });
      rows = rows.concat(await toCredentialDetailsRow({object: value, subject, issuer}))
    } else {
      if (key === '0' || value === undefined || value === null) {
        continue
      }

      let label: string = key
      if (key === 'id' && typeof value === 'string' && value.startsWith('did:')) {
        label = 'subject'
      }

      if (typeof value === 'string' && value.startsWith('did:')) {
        const contacts: Party[] = [...(issuer ? [issuer] : []), ...(subject ? [subject] : [])]

        value = findCorrelationIdName(value, contacts)
      }

      const imageSize = (await isImageAddress(value)) ? await getImageSize(value) : undefined

      rows.push({
        id: uuidv4(),
        label, // TODO Human readable mapping
        value,
        imageSize,
      })
    }
  }

  return rows
}

/**
 * To be used whenever we need to show a credential summary on VCs we have not persisted
 * @param verifiableCredential
 * @param credentialRole
 * @param branding The branding for the credential
 * @param issuer Optional contact for issuer name
 * @param subject Optional contact for subject name
 */
export const toNonPersistedCredentialSummary = ({
  verifiableCredential,
  credentialRole,
  branding,
  issuer,
  subject,
}: {
  verifiableCredential: ICredential | VerifiableCredential
  credentialRole: CredentialRole
  branding?: Array<IBasicCredentialLocaleBranding>
  issuer?: Party
  subject?: Party
}): Promise<CredentialSummary> => {
  return toCredentialSummary({
    verifiableCredential: verifiableCredential as VerifiableCredential,
    hash: computeEntryHash(verifiableCredential as VerifiableCredential),
    credentialRole,
    branding,
    issuer,
    subject,
  })
}

export const getDate = (...dates: (number | string | undefined)[]): number | undefined => {
  const date = dates?.find(date => date !== null && date !== undefined)
  if (!date) {
    return
  } else if (typeof date === 'number') {
    return date
  }
  return Math.round(new Date(date + '').valueOf() / EPOCH_MILLISECONDS)
}

export const getCredentialDisplayName = ({
  verifiableCredential,
  localeBranding,
}: {
  verifiableCredential: VerifiableCredential
  localeBranding?: IBasicCredentialLocaleBranding
}): string => {
  let title: string | undefined = localeBranding?.alias ?? verifiableCredential.name ?? (!verifiableCredential.type ? 'unknown' : undefined)

  if (verifiableCredential.type) {
    const types = asArray(verifiableCredential.type).filter(val => val !== 'VerifiableCredential')
    if (types.length === 1) {
      title = types[0]
    } else if (types.length > 1) {
      title = types.join(', ')
    }
  }
  if (!title) {
    title = 'Credential'
  }
  return title
}

export const getCredentialIssuerNameAndAlias = ({
  verifiableCredential,
  issuer,
}: {
  verifiableCredential: VerifiableCredential
  issuer?: Party
}): {issuerAlias: string; issuerName: string} => {
  const issuerName: string = typeof verifiableCredential.issuer === 'string' ? verifiableCredential.issuer : verifiableCredential.issuer?.id

  let issuerAlias: string | undefined = undefined
  if (typeof verifiableCredential?.issuer === 'object') {
    // if the name is part of the VC itself, always use that
    // todo: Probably still wise to allow a user to override it
    issuerAlias = verifiableCredential.issuer.name
  }
  if (!issuerAlias && issuer) {
    issuerAlias = issuer.contact.displayName
  }
  if (!issuerAlias) {
    issuerAlias = issuerName
  }
  return {issuerName, issuerAlias}
}

const getTermsOfUse = ({
  verifiableCredential,
}: {
  verifiableCredential: VerifiableCredential
}): undefined | Array<Record<string, any> & {type?: string}> => {
  if (!verifiableCredential.termsOfUse) {
    return
  }
  const termsOfUse = asArray(verifiableCredential.termsOfUse)
  return termsOfUse.map((tou: any) => {
    const {type, id, ...rest} = tou
    return {
      [type]: id,
      ...rest,
    }
  })
}
/**
 * Map persisted (Unique) VCs to the summaries we display
 * @param hash The hash of the unique verifiable credential
 * @param verifiableCredential The VC itself
 * @param credentialRole
 * @param branding The branding for the credential
 * @param issuer Optional contact for issuer name
 * @param subject Optional contact for subject name
 */
export const toCredentialSummary = async ({
  verifiableCredential,
  hash,
  credentialRole,
  branding,
  issuer,
  subject,
}: {
  verifiableCredential: VerifiableCredential
  hash: string
  credentialRole: CredentialRole
  branding?: Array<IBasicCredentialLocaleBranding>
  issuer?: Party
  subject?: Party
}): Promise<CredentialSummary> => {
  const expirationDate = getDate(verifiableCredential.expirationDate, verifiableCredential.validTo, verifiableCredential.exp) ?? 0
  const issueDate = getDate(verifiableCredential.issuanceDate, verifiableCredential.validFrom, verifiableCredential.nbf, verifiableCredential.iat)!
  const localeBranding = await selectAppLocaleBranding({localeBranding: branding})
  const credentialStatus = getCredentialStatus(verifiableCredential)
  const title = getCredentialDisplayName({verifiableCredential, localeBranding})
  const properties = await toCredentialDetailsRow({
    object: {...verifiableCredential.vc?.credentialSubject, ...verifiableCredential.credentialSubject},
    subject,
    issuer,
  })
  const logo = getIssuerLogo(verifiableCredential, localeBranding)
  const url = verifiableCredential.issuer && typeof verifiableCredential.issuer !== 'string' ? verifiableCredential.issuer.url : undefined
  const {issuerName, issuerAlias} = getCredentialIssuerNameAndAlias({verifiableCredential, issuer})
  const termsOfUse = getTermsOfUse({verifiableCredential})
  return {
    hash,
    id: verifiableCredential.id,
    title,
    credentialStatus,
    credentialRole,
    issueDate,
    expirationDate,
    properties,
    branding: localeBranding,
    termsOfUse,
    issuer: {
      name: issuerName,
      alias: issuerAlias ? (issuerAlias.length > 50 ? `${issuerAlias.substring(0, 50)}...` : issuerAlias) : '',
      image: logo,
      url,
    },
  }
}

export const selectAppLocaleBranding = async (
  args: ISelectAppLocaleBrandingArgs,
): Promise<IBasicCredentialLocaleBranding | IBasicIssuerLocaleBranding | undefined> => {
  // We need to retrieve the locale of the app and select a matching branding or fallback on a branding without a locale
  // We search for a first match that starts with the app locale
  const appLocale: string = Localization.getLocale()
  const localeBranding: IBasicCredentialLocaleBranding | IBasicIssuerLocaleBranding | undefined = args.localeBranding?.find(
    (branding: IBasicCredentialLocaleBranding | IBasicIssuerLocaleBranding) =>
      branding.locale?.startsWith(appLocale) || branding.locale === undefined,
  )

  const logo: string | undefined = localeBranding?.logo?.dataUri || localeBranding?.logo?.uri
  let imagePreloader: IImagePreloader
  if (typeof window === 'undefined') {
    const {ReactNativeImagePreloader} = await import('../services/ReactNativeImagePreloader')
    imagePreloader = new ReactNativeImagePreloader()
  } else {
    const {WebImagePreloader} = await import('../services/WebImagePreloader')
    imagePreloader = new WebImagePreloader()
  }
  if (logo) {
    imagePreloader.preload([{uri: logo}]).catch((): void => {
      //ignore
    })
  }

  const backgroundImage: string | undefined = localeBranding?.background?.image?.dataUri || localeBranding?.background?.image?.uri
  if (backgroundImage) {
    imagePreloader.preload([{uri: backgroundImage}]).catch((): void => {
      // ignore
    })
  }

  return localeBranding
}
