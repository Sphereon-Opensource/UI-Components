import {CredentialStatus, ImageSize, IssuerStatus} from '@sphereon/ui-components.core'
import {IBasicCredentialLocaleBranding, IBasicIssuerLocaleBranding} from '@sphereon/ssi-sdk.data-store'

export type CredentialSummary = {
  hash: string
  id?: string // The id of the credential (optional according to VCDM)
  title: string
  issuer: IssuerSummary
  credentialStatus: CredentialStatus
  issueDate: number
  expirationDate: number
  properties: CredentialDetailsRow[]
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
}

export type LabelStatus = CredentialStatus | IssuerStatus

export interface ISelectAppLocaleBrandingArgs {
  localeBranding?: Array<IBasicCredentialLocaleBranding | IBasicIssuerLocaleBranding>
}
