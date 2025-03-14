import {CredentialRole} from '@sphereon/ssi-sdk.data-store'
import {toNonPersistedCredentialSummary} from '../details'

const uniformSdJwt = {
  type: ['https://example.bmi.bund.de/credential/pid/1.0'],
  '@context': [],
  credentialSubject: {
    '12': true,
    '14': true,
    '16': true,
    '18': true,
    '21': true,
    '65': false,
    given_name: 'Erika',
    family_name: 'Mustermann',
    birthdate: '1963-08-12',
    source_document_type: 'id_card',
    address: {
      street_address: 'Heidestraße 17',
      locality: 'Köln',
      postal_code: '51147',
      country: 'DE',
    },
    nationalities: ['DE'],
    gender: 'female',
    birth_family_name: 'Gabler',
    place_of_birth: {
      locality: 'Berlin',
      country: 'DE',
    },
    also_known_as: 'Schwester Agnes',
  },
  issuanceDate: '2024-08-26T00:06:09Z',
  issuer: 'https://funke.animo.id',
  cnf: {
    jwk: {
      kty: 'EC',
      crv: 'P-256',
      x: 'tm0Xzutlrfe4ijsG68MmdFtjKTWFaXWHmCLl9bYRku0',
      y: 'aQqUow8HdH732Zy4AsZ6cByaewo8-5WePYRBilG4vZo',
    },
  },
  proof: {
    type: 'SdJwtProof2024',
    created: '2024-08-26T00:06:09Z',
    proofPurpose: 'authentication',
    verificationMethod: 'https://funke.animo.id',
    jwt: 'eyJ0eXAiOiJ2YytzZC1qd3QiLCJhbGciOiJFUzI1NiIsIng1YyI6WyJNSUg2TUlHaG9BTUNBUUlDRURsYnhwY04xVjFQUmJtYzJUdFBqTlF3Q2dZSUtvWkl6ajBFQXdJd0FEQWVGdzAzTURBeE1ERXdNREF3TURCYUZ3MHlOVEV4TWpJd09ESXlNVEphTUFBd09UQVRCZ2NxaGtqT1BRSUJCZ2dxaGtqT1BRTUJCd01pQUFMY0QxWHpLZXBGeFdNQU9xVitsbjFmeWJCdDdEUk81Q1YwZjlBNm1ScDJ4YU1kTUJzd0dRWURWUjBSQkJJd0VJSU9ablZ1YTJVdVlXNXBiVzh1YVdRd0NnWUlLb1pJemowRUF3SURTQUF3UlFJaEFJRmQyamxyWkF6TFRMc1hkVUU3TytDUnV4dXprMDRsR28xZVZZSWJnVDhpQWlBUWhSL0ZvbmhvTExURmpVLzN0bjVyUHlCMkRhT2wzVzE4VzV1Z0xXSGpoUT09Il19.eyJ2Y3QiOiJodHRwczovL2V4YW1wbGUuYm1pLmJ1bmQuZGUvY3JlZGVudGlhbC9waWQvMS4wIiwiYWdlX2VxdWFsX29yX292ZXIiOnsiX3NkIjpbIjFCOUdEQS12WG92X3BRZkM3VmZJU2c1WlNkOGlkQlNoOHozd2ticmJlbHciLCI3NGdrZWtHX09pSVJ2eklZWEtqRFFRUWhnY2dxT3hTdUVxSEZTTEtEeVVJIiwiQnNZVS0yT0tRZzlWaFJLLXdvUFpPak9TQUtYU0xoa3NJeHF6aWVvb3FxVSIsIk4yelhZX3JDQTZVZUhJUWpqLS1MVGw0c0x5YzhRNU5qUXlTbXdKcHk4MmMiLCJPX1ZObWJmV1FXbXBwLXZMbld6S1JHVExxcTBnR2xPenZmemFFYVNPSXJzIiwibmU3WkNkRzJYcXNiVmFBekM1WjBSRUtVdFowVVBNUTRlNHBhQjNLUFd3cyJdfSwiY25mIjp7Imp3ayI6eyJrdHkiOiJFQyIsImNydiI6IlAtMjU2IiwieCI6InRtMFh6dXRscmZlNGlqc0c2OE1tZEZ0aktUV0ZhWFdIbUNMbDliWVJrdTAiLCJ5IjoiYVFxVW93OEhkSDczMlp5NEFzWjZjQnlhZXdvOC01V2VQWVJCaWxHNHZabyJ9fSwiaXNzIjoiaHR0cHM6Ly9mdW5rZS5hbmltby5pZCIsImlhdCI6MTcyNDYzMDc2OSwiX3NkIjpbIkN1VUp3T2R3a2p1QW45eXE0OTJ3VU1SVTg4ZEtfM241WGRzWW5UQ1RCeTAiLCJEQnZzclJTUV91NndiRTN5YUZ1Wm5BWmNmV0Jqa1JycFlsaS1mWVVDakpvIiwiUHdSSUNaUW1SbFQwWWRjRlJiUWk5R04xSXNSQTlOSUtBYTV1Nk4zUW1IVSIsIlpHRGo3SFlHWENteE56SmxZYmtJaElhZUk2X2Fza1YxYkRUeDdqOGZTeFkiLCJkbzBNU1R5UUVWbWNWeDQ4U3V5RTQ0VVA0TXZ4SHNrNl9lX0FMNnRheWlrIiwiZHFsWnVlTXZKc25oLVZ1RUlwSnFDYUJ4d20waFZfRW1MY3UzeHpTSmdqRSIsImZjcjMtLTUwWms1MVkxanRQU0llNUxqWmRTc3o0YVRkZS13ZDc4Y0J5SGMiLCJtMXNHXzE2X0NvZ2N4UmdURDRZalg0OUFaZXctTC1UQ3hIZm02eG9jM3A4Iiwib1NtbTVmU09aX0w1eFduSjhrOGRYa3FPTE1RbWR2R1FmTURDcWtHSDQ0dyIsInFWanRsbEhsaVZ3UkZzbFlxbmlGQ3NBNE9wY3dDRG5ZZmRLMFkxUkdTTEkiXSwiX3NkX2FsZyI6InNoYS0yNTYifQ.PNB_9YPuXHzxlUDwWE9cJIf5cVm34_CQ24KCSxFzRB6PJsF6EYwjZGSSUqDCtCUjDI6UO_oZyIHkLiQoytw7yA~WyI0ODk2Njc0NjkxNDA5NzcyNzYzMDM2IiwiMTIiLHRydWVd~WyI0MDQzNTI1Nzk0ODQzMzUzOTIzOTEyNDYiLCIxNCIsdHJ1ZV0~WyIxMDgzODI1ODE0Nzg4MjM4MTk2MTE0MjcwIiwiMTYiLHRydWVd~WyIxMDgxMDY5NTEwNTk2NjI0NDkxNDc4MDgwIiwiMTgiLHRydWVd~WyI4NDczMTcwMzk0NDQzMzMyMTUxNzYwNjEiLCIyMSIsdHJ1ZV0~WyI3MzQ4MTEyNjM3Mzc2OTA4NTU0NTgxNjUiLCI2NSIsZmFsc2Vd~WyI4ODMyNjMyMzU5NTk5MTcyNTY5ODQ0MTYiLCJnaXZlbl9uYW1lIiwiRXJpa2EiXQ~WyIxMTkyMTY4MDY5OTQyMjgyMDYxMzUyNTg5IiwiZmFtaWx5X25hbWUiLCJNdXN0ZXJtYW5uIl0~WyIxMTI5ODUyOTgwMTg0NTA3NTc0MjE1OTgxIiwiYmlydGhkYXRlIiwiMTk2My0wOC0xMiJd~WyI0NzUzMzcxNDI1NjgwMzM4OTg3MDE2OCIsInNvdXJjZV9kb2N1bWVudF90eXBlIiwiaWRfY2FyZCJd~WyI1NTc4MDY2NjkwODc1MjU0NzYzMjcxOTYiLCJhZGRyZXNzIix7InN0cmVldF9hZGRyZXNzIjoiSGVpZGVzdHJhw59lIDE3IiwibG9jYWxpdHkiOiJLw7ZsbiIsInBvc3RhbF9jb2RlIjoiNTExNDciLCJjb3VudHJ5IjoiREUifV0~WyI0MTA3NjA1OTE5NDUwNzkyNjM1ODAzNDEiLCJuYXRpb25hbGl0aWVzIixbIkRFIl1d~WyIzMjgzOTI5NDQ2NTQwMTIzNDYzNjAyMjIiLCJnZW5kZXIiLCJmZW1hbGUiXQ~WyI1MzA1NTUyNDMwODY0NTM3ODcxODE2MCIsImJpcnRoX2ZhbWlseV9uYW1lIiwiR2FibGVyIl0~WyIxNDc0MTA0MzcwODE1NDg0MDA4MDAyMzMiLCJwbGFjZV9vZl9iaXJ0aCIseyJsb2NhbGl0eSI6IkJlcmxpbiIsImNvdW50cnkiOiJERSJ9XQ~WyIxMDkwMDQzNTgwNDM3OTQxOTQ3MTc1MzE0IiwiYWxzb19rbm93bl9hcyIsIlNjaHdlc3RlciBBZ25lcyJd~',
  },
}

describe('Credential summary', () => {
  it('should process SD-JWT', async (): Promise<void> => {
    const result = await toNonPersistedCredentialSummary({verifiableCredential: uniformSdJwt, credentialRole: CredentialRole.HOLDER})

    console.log(JSON.stringify(result, null, 2))
    expect(result.properties.length).toEqual(19)
  })
})
