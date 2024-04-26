export enum CredentialStatus {
  VALID = 'valid',
  EXPIRED = 'expired',
  REVOKED = 'revoked',
  DRAFT = 'draft'
}

export enum IssuerStatus {
  VERIFIED = 'verified',
  UNVERIFIED = 'unverified',
}

export enum WorkflowStatus {
  NEW = 'new',
  APPROVED = 'approved',
  DECLINED = 'declined',
  PENDING = 'pending',
  DONE = 'done',
  ARCHIVED = 'archived',
}

export type LabelStatus = CredentialStatus | IssuerStatus | WorkflowStatus
