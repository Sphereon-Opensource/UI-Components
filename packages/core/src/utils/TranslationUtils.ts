import {CredentialStatus, IssuerStatus, LabelStatus} from '../types'
import Localization from '../localization/Localization'

export const getStatusTranslation = (status: LabelStatus): string => {
  switch (status) {
    case IssuerStatus.VERIFIED:
      return Localization.translate('issuer_status_verified')
    case IssuerStatus.UNVERIFIED:
      return Localization.translate('issuer_status_unverified')
    case CredentialStatus.VALID:
      return Localization.translate('credential_status_valid')
    case CredentialStatus.EXPIRED:
      return Localization.translate('credential_status_expired')
    case CredentialStatus.REVOKED:
      return Localization.translate('credential_status_revoked')
    default:
      return Localization.translate('status_missing')
  }
}
