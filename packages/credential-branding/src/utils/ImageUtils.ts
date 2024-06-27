import {VerifiableCredential} from '@veramo/core'
import {CredentialSummary} from '../types'
import {IBasicCredentialLocaleBranding} from '@sphereon/ssi-sdk.data-store'
import {IS_IMAGE_URI_REGEX, IS_IMAGE_URL_REGEX} from '@sphereon/ui-components.core'

export const isImageAddress = async (value: string): Promise<boolean> => {
  return IS_IMAGE_URI_REGEX.test(value) || IS_IMAGE_URL_REGEX.test(value)
}

export function getIssuerLogo(verifiableCredential: VerifiableCredential | CredentialSummary, localeBranding?: IBasicCredentialLocaleBranding) {
  let logo: string | undefined

  if (localeBranding?.logo) {
    logo = localeBranding.logo.dataUri ?? localeBranding.logo.uri
  }
  if (!logo && typeof verifiableCredential.issuer === 'object') {
    if ('logo' in verifiableCredential.issuer && verifiableCredential.issuer.logo) {
      logo = getImageFromObjectOrString(verifiableCredential.issuer.logo)
    } else if (verifiableCredential.issuer.image) {
      logo = getImageFromObjectOrString(verifiableCredential.issuer.image)
    }
  }
  return logo
}

export const getImageFromObjectOrString = (image?: string | object): string | undefined => {
  if (!image) {
    return undefined
  } else if (typeof image === 'string' && image.length > 0) {
    return image
  } else if (typeof image === 'object') {
    if ('id' in image && typeof image.id === 'string' && image.id.includes('://')) {
      return image.id
    } else if ('url' in image && typeof image.url === 'string' && image.url.includes('://')) {
      return image.url
    } else if ('uri' in image && typeof image.uri === 'string' && image.uri.includes('://')) {
      return image.uri
    }
  }
  return undefined
}
