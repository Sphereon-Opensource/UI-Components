import {ICredential} from '@sphereon/ssi-types'
import {VerifiableCredential} from '@veramo/core'
import {CredentialSummary} from '../types'
import {CredentialStatus, makeEpochMilli} from '@sphereon/ui-components.core'

export const getCredentialStatus = (credential: ICredential | VerifiableCredential | CredentialSummary): CredentialStatus => {
  if (isRevoked()) {
    return CredentialStatus.REVOKED
  } else if (isExpired(credential.expirationDate)) {
    return CredentialStatus.EXPIRED
  }

  return CredentialStatus.VALID
}

/**
 * @return
 *  true means the credential is revoked.
 *  false means the credential is not revoked.
 */
export const isRevoked = (): boolean => {
  return false
  // TODO implement
  // {
  //  id: 'https://revocation-sphereon.sphereon.io/services/credentials/wallet-dev#2022021400',
  //  type: 'RevocationList2022021401Status',
  //  revocationListIndex: '2022021402',
  //  revocationListCredential: 'https://revocation-sphereon.sphereon.io/services/credentials/wallet-dev#2022021400',
  // }
}

/**
 * @param value The number of milliseconds between 1 January 1970 00:00:00 UTC and the given date or a formatted date required by Date(...)
 * @return
 *  true means the credential is expired.
 *  false means the credential is not expired.
 */
export const isExpired = (value?: string | number): boolean => {
  if (!value) {
    return false
  }
  let expirationDate: number = typeof value === 'string' ? new Date(value).valueOf() : value
  expirationDate = makeEpochMilli(expirationDate)
  return expirationDate < Date.now()
}
