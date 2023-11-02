export enum CredentialStatus {
  VALID = 'valid',
  EXPIRED = 'expired',
  REVOKED = 'revoked',
}

export enum IssuerStatus {
  VERIFIED = 'verified',
  UNVERIFIED = 'unverified',
}

export enum WorkflowStatus {
  NEW = 'New',
  APPROVED = 'Approved',
  DECLINED = 'Declined',
  PENDING = 'Pending',
  DONE = 'Done',
  ARCHIVED = 'Archived',
}

export type LabelStatus = CredentialStatus | IssuerStatus | WorkflowStatus
