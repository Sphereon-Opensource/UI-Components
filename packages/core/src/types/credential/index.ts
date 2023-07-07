export enum CredentialStatus {
  VALID = 'valid',
  EXPIRED = 'expired',
  REVOKED = 'revoked',
}

export enum IssuerStatus {
  VERIFIED = 'verified',
  UNVERIFIED = 'unverified',
}

export type LabelStatus = CredentialStatus | IssuerStatus
