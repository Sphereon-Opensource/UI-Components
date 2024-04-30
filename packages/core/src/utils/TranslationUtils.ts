import {CredentialStatus, IssuerStatus, LabelStatus, WorkflowStatus} from '../types'
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
    case CredentialStatus.DRAFT:
      return Localization.translate('credential_status_draft')
    case WorkflowStatus.APPROVED:
      return Localization.translate('workflow_status_approved')
    case WorkflowStatus.ARCHIVED:
      return Localization.translate('workflow_status_archived')
    case WorkflowStatus.DECLINED:
      return Localization.translate('workflow_status_declined')
    case WorkflowStatus.DONE:
      return Localization.translate('workflow_status_done')
    case WorkflowStatus.NEW:
      return Localization.translate('workflow_status_new')
    case WorkflowStatus.PENDING:
      return Localization.translate('workflow_status_pending')
    default:
      return Localization.translate('status_missing')
  }
}
