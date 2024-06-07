import {v4 as uuidv4} from 'uuid'
import {UniqueVerifiableCredential, VerifiableCredential} from '@veramo/core'
import {computeEntryHash} from '@veramo/utils'
import {IBasicCredentialLocaleBranding, IBasicIssuerLocaleBranding, Identity, Party} from '@sphereon/ssi-sdk.data-store'
import {ICredential} from '@sphereon/ssi-types'
import {CredentialStatus, EPOCH_MILLISECONDS, Localization} from '@sphereon/ui-components.core'
import {downloadImage, getImageDimensions} from '@sphereon/ssi-sdk.core'
import {CredentialDetailsRow, CredentialSummary, ISelectAppLocaleBrandingArgs} from '../types'
import {IImagePreloader, ReactNativeImagePreloader, WebImagePreloader} from '../services'
import {getCredentialStatus, getIssuerLogo, isImageAddress} from '../utils'

function findCorrelationIdName(correlationId: string, contacts: Party[]): string {
  const contact = contacts.find((contact: Party) =>
    contact.identities.some((identity: Identity): boolean => identity.identifier.correlationId === correlationId),
  )

  if (contact) {
    return contact.contact.displayName
  }

  // TODO: bring this back. This checks if the activeUser has the matching correlationId.
  /*if (activeUser && activeUser.identifiers.some((identifier: IUserIdentifier): boolean => identifier.did === correlationId)) {
    return `${activeUser.firstName} ${activeUser.lastName}`;
  }*/

  // Return the correlationId itself if no match is found
  return correlationId
}

const toCredentialDetailsRow = async (object: Record<string, any>, subject?: Party, issuer?: Party): Promise<CredentialDetailsRow[]> => {
  let rows: CredentialDetailsRow[] = []
  // eslint-disable-next-line prefer-const
  for (let [key, value] of Object.entries(object)) {
    // TODO fix hacking together the image
    if (key.toLowerCase().includes('image')) {
      const image: string = typeof value === 'string' ? value : value.id
      rows.push({
        id: uuidv4(),
        label: 'image',
        value: image,
        imageSize: (await isImageAddress(image)) ? await getImageDimensions((await downloadImage(image)).base64Content) : undefined,
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

    if (typeof value !== 'string') {
      // FIXME disabled this to not show keys of objects
      // rows.push({
      //   id: uuidv4(),
      //   label: key,
      //   value: undefined,
      // });
      rows = rows.concat(await toCredentialDetailsRow(value, subject, issuer))
    } else {
      if (key === '0' || value === undefined) {
        continue
      }

      let label: string = key
      if (key === 'id' && value.startsWith('did:')) {
        label = 'subject'
      }

      if (value.startsWith('did:')) {
        const contacts: Party[] = [...(issuer ? [issuer] : []), ...(subject ? [subject] : [])]

        value = findCorrelationIdName(value, contacts)
      }

      rows.push({
        id: uuidv4(),
        label, // TODO Human readable mapping
        value,
        imageSize: (await isImageAddress(value)) ? await getImageDimensions((await downloadImage(value)).base64Content) : undefined,
      })
    }
  }

  return rows
}

/**
 * To be used whenever we need to show a credential summary on VCs we have not persisted
 * @param verifiableCredential
 * @param branding The branding for the credential
 * @param issuer Optional contact for issuer name
 * @param subject Optional contact for subject name
 */
export const toNonPersistedCredentialSummary = (
  verifiableCredential: ICredential | VerifiableCredential,
  branding?: Array<IBasicCredentialLocaleBranding>,
  issuer?: Party,
  subject?: Party,
): Promise<CredentialSummary> => {
  return toCredentialSummary(
    {
      verifiableCredential: verifiableCredential as VerifiableCredential,
      hash: verifiableCredential.id ?? computeEntryHash(verifiableCredential as VerifiableCredential),
    },
    branding,
    issuer,
    subject,
  )
}

/**
 * Map persisted (Unique) VCs to the summaries we display
 * @param hash The hash of the unique verifiable credential
 * @param verifiableCredential The VC itself
 * @param branding The branding for the credential
 * @param issuer Optional contact for issuer name
 * @param subject Optional contact for subject name
 */
export const toCredentialSummary = async (
  {hash, verifiableCredential}: UniqueVerifiableCredential,
  branding?: Array<IBasicCredentialLocaleBranding>,
  issuer?: Party,
  subject?: Party,
): Promise<CredentialSummary> => {
  const expirationDate: number = verifiableCredential.expirationDate
    ? new Date(verifiableCredential.expirationDate).valueOf() / EPOCH_MILLISECONDS
    : 0
  const issueDate: number = new Date(verifiableCredential.issuanceDate).valueOf() / EPOCH_MILLISECONDS
  const credentialStatus: CredentialStatus = getCredentialStatus(verifiableCredential)
  const title = verifiableCredential.name
    ? verifiableCredential.name
    : !verifiableCredential.type
    ? 'unknown'
    : typeof verifiableCredential.type === 'string'
    ? verifiableCredential.type
    : verifiableCredential.type.filter((value: string): boolean => value !== 'VerifiableCredential')[0]
  const properties: Array<CredentialDetailsRow> = await toCredentialDetailsRow(verifiableCredential.credentialSubject, subject, issuer)
  const localeBranding: IBasicCredentialLocaleBranding | undefined = await selectAppLocaleBranding({localeBranding: branding})
  const logo: string | undefined = getIssuerLogo(verifiableCredential, localeBranding)
  const url = typeof verifiableCredential.issuer !== 'string' ? verifiableCredential.issuer.url : undefined
  const name: string =
    typeof verifiableCredential.issuer === 'string'
      ? verifiableCredential.issuer
      : verifiableCredential.issuer?.name ?? verifiableCredential.issuer?.id

  let issuerAlias: string | undefined = undefined
  if (typeof verifiableCredential?.issuer === 'object' && verifiableCredential.issuer?.name) {
    // if the name is part of the VC itself, always use that
    // todo: Probably still wise to allow a user to override it
    issuerAlias = verifiableCredential.issuer.name
  }
  if (!issuerAlias && issuer) {
    issuerAlias = issuer.contact.displayName
  }
  if (!issuerAlias) {
    throw Error(`Could not deduce issuer alias`)
  }
  return {
    hash,
    id: verifiableCredential.id,
    title: localeBranding?.alias || title,
    credentialStatus,
    issueDate,
    expirationDate,
    properties,
    branding: localeBranding,
    issuer: {
      name,
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

  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    //TODO: CWALL-243 bring back the react-native related code

    imagePreloader = new ReactNativeImagePreloader()
  } else {
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
      //ignore
    })
  }

  return localeBranding
}
