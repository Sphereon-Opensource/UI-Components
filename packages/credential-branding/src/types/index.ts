import {CredentialStatus, ImageSize, IssuerStatus} from '@sphereon/ui-components.core'
import {CredentialRole, IBasicCredentialClaim, IBasicCredentialLocaleBranding, IBasicIssuerLocaleBranding, Party} from '@sphereon/ssi-sdk.data-store'
import {getCredentialDisplayName, getCredentialIssuerNameAndAlias, toCredentialSummary, toNonPersistedCredentialSummary} from '../details'
import {ICredential} from '@sphereon/ssi-types'
import {VerifiableCredential} from '@veramo/core'

export type CredentialSummary = {
  hash: string
  id?: string // The id of the credential (optional according to VCDM)
  title: string
  issuer: IssuerSummary
  credentialStatus: CredentialStatus
  credentialRole: CredentialRole
  issueDate: number
  expirationDate: number
  properties: CredentialDetailsRow[]
  termsOfUse?: Array<Record<string, any> & {type?: string}>
  branding?: IBasicCredentialLocaleBranding
}

export type IssuerSummary = {
  name: string
  alias: string
  image?: string
  url?: string
}

export type CredentialDetailsRow = {
  id: string
  label: string
  value: any
  isEditable?: boolean
  status?: LabelStatus
  imageSize?: ImageSize
  onPress?: () => Promise<void> // FIXME rethink how we going to handle values we want to be able to edit. maybe based on onPress we can show the icon and we do not need isEditable
}

export type LabelStatus = CredentialStatus | IssuerStatus

export interface ISelectAppLocaleBrandingArgs {
  localeBranding?: Array<IBasicCredentialLocaleBranding | IBasicIssuerLocaleBranding>
}

export type ToCredentialDetailsRowArgs = {
  object: Record<string, any>
  parentKey?: string
  subject?: Party
  issuer?: Party
  branding?: Array<IBasicCredentialClaim>
}

export type ToNonPersistedCredentialSummaryArgs = {
  verifiableCredential: ICredential | VerifiableCredential
  credentialRole: CredentialRole
  branding?: Array<IBasicCredentialLocaleBranding>
  issuer?: Party
  subject?: Party
}

export type GetCredentialDisplayNameArgs = {
  verifiableCredential: VerifiableCredential
  localeBranding?: IBasicCredentialLocaleBranding
}

export type GetCredentialIssuerNameAndAliasArgs = {
  verifiableCredential: VerifiableCredential
  issuer?: Party
}

export type GetTermsOfUseArgs = {
  verifiableCredential: VerifiableCredential
}

export type ToCredentialSummaryArgs = {
  verifiableCredential: VerifiableCredential
  hash: string
  credentialRole: CredentialRole
  branding?: Array<IBasicCredentialLocaleBranding>
  issuer?: Party
  subject?: Party
}
