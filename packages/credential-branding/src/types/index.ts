import {CredentialStatus, ImageSize, IssuerStatus} from '@sphereon/ui-components.core'
import {CredentialRole, IBasicCredentialLocaleBranding, IBasicIssuerLocaleBranding} from '@sphereon/ssi-sdk.data-store'

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
