import {CredentialRole} from '@sphereon/ssi-sdk.data-store';
import {toNonPersistedCredentialSummary} from '../details';

const credential = {
    '@context': [ 'https://www.w3.org/2018/credentials/v1' ],
        type: [ 'VerifiableCredential', 'PID' ],
        issuer: {
        id: 'did:web:nl.gov.dev.eduwallet.nl',
            name: 'Kingdom of the Netherlands',
            description: 'Kingdom of the Netherlands'
    },
    name: 'Principal ID',
        description: 'Principal Identity Document of the Kingdom of the Netherlands',
        issuanceDate: '2013-10-05T12:00:00.000Z',
        credentialSubject: {
        given_name: 'Martin',
            family_name: 'Jørgensen',
            birth_date: '07-07-1979',
            family_name_birth: 'Jørgensen',
            given_name_birth: 'Martin',
            birth_place: 'Nieuwdorp The Netherlands',
            sex: 1,
            nationality: 'NL',
            expiry_date: '01-09-2027',
            issuance_date: '05-10-2013',
            issuing_authority: 'SURF PBA',
            issuing_country: 'NL',
            age_in_years: null,
            age_birth_year: 1979,
            birth_country: 'NL',
            birth_city: 'Nieuwdorp',
            resident_address: 'Bijleveldkade 77 4455TX The Netherlands',
            resident_country: 'The Netherlands',
            resident_city: 'Nieuwdorp',
            resident_postal_code: '4455TX',
            resident_street: 'Bijleveldkade',
            resident_house_number: '77',
            personal_administrative_number: '106800403',
            age_over_18: 1,
            age_over_13: 1,
            portrait: '',
            document_number: 'PBA1068004',
            issuing_jurisdiction: 'NL',
            id: 'did:jwk:eyJhbGciOiJFUzI1NiIsInVzZSI6InNpZyIsImt0eSI6IkVDIiwiY3J2IjoiUC0yNTYiLCJ4IjoiSDRvdHEzTnFTWUdkamJiNjZiWHNxZXFzeG1rTlhZZE8wOGJ6MGRQbHpjSSIsInkiOiJoeHRwVU5CUEp1WUg5ZVdldDh4X01pV0V3MUpPV0RVZU5OR0JVQ1VjbmFRIn0'
    },
    sub: 'did:jwk:eyJhbGciOiJFUzI1NiIsInVzZSI6InNpZyIsImt0eSI6IkVDIiwiY3J2IjoiUC0yNTYiLCJ4IjoiSDRvdHEzTnFTWUdkamJiNjZiWHNxZXFzeG1rTlhZZE8wOGJ6MGRQbHpjSSIsInkiOiJoeHRwVU5CUEp1WUg5ZVdldDh4X01pV0V3MUpPV0RVZU5OR0JVQ1VjbmFRIn0',
        nbf: 1380974400,
        iss: 'did:web:nl.gov.dev.eduwallet.nl',
        proof: {
        type: 'JwtProof2020',
            jwt: 'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwiUElEIl0sImNyZWRlbnRpYWxTdWJqZWN0Ijp7ImdpdmVuX25hbWUiOiJNYXJ0aW4iLCJmYW1pbHlfbmFtZSI6IkrDuHJnZW5zZW4iLCJiaXJ0aF9kYXRlIjoiMDctMDctMTk3OSIsImZhbWlseV9uYW1lX2JpcnRoIjoiSsO4cmdlbnNlbiIsImdpdmVuX25hbWVfYmlydGgiOiJNYXJ0aW4iLCJiaXJ0aF9wbGFjZSI6Ik5pZXV3ZG9ycCBUaGUgTmV0aGVybGFuZHMiLCJzZXgiOjEsIm5hdGlvbmFsaXR5IjoiTkwiLCJleHBpcnlfZGF0ZSI6IjAxLTA5LTIwMjciLCJpc3N1YW5jZV9kYXRlIjoiMDUtMTAtMjAxMyIsImlzc3VpbmdfYXV0aG9yaXR5IjoiU1VSRiBQQkEiLCJpc3N1aW5nX2NvdW50cnkiOiJOTCIsImFnZV9pbl95ZWFycyI6bnVsbCwiYWdlX2JpcnRoX3llYXIiOjE5NzksImJpcnRoX2NvdW50cnkiOiJOTCIsImJpcnRoX2NpdHkiOiJOaWV1d2RvcnAiLCJyZXNpZGVudF9hZGRyZXNzIjoiQmlqbGV2ZWxka2FkZSA3NyA0NDU1VFggVGhlIE5ldGhlcmxhbmRzIiwicmVzaWRlbnRfY291bnRyeSI6IlRoZSBOZXRoZXJsYW5kcyIsInJlc2lkZW50X2NpdHkiOiJOaWV1d2RvcnAiLCJyZXNpZGVudF9wb3N0YWxfY29kZSI6IjQ0NTVUWCIsInJlc2lkZW50X3N0cmVldCI6IkJpamxldmVsZGthZGUiLCJyZXNpZGVudF9ob3VzZV9udW1iZXIiOiI3NyIsInBlcnNvbmFsX2FkbWluaXN0cmF0aXZlX251bWJlciI6IjEwNjgwMDQwMyIsImFnZV9vdmVyXzE4IjoxLCJhZ2Vfb3Zlcl8xMyI6MSwicG9ydHJhaXQiOiIiLCJkb2N1bWVudF9udW1iZXIiOiJQQkExMDY4MDA0IiwiaXNzdWluZ19qdXJpc2RpY3Rpb24iOiJOTCIsImlkIjoiZGlkOmp3azpleUpoYkdjaU9pSkZVekkxTmlJc0luVnpaU0k2SW5OcFp5SXNJbXQwZVNJNklrVkRJaXdpWTNKMklqb2lVQzB5TlRZaUxDSjRJam9pU0RSdmRIRXpUbkZUV1Vka2FtSmlOalppV0hOeFpYRnplRzFyVGxoWlpFOHdPR0o2TUdSUWJIcGpTU0lzSW5raU9pSm9lSFJ3VlU1Q1VFcDFXVWc1WlZkbGREaDRYMDFwVjBWM01VcFBWMFJWWlU1T1IwSlZRMVZqYm1GUkluMCJ9fSwiQGNvbnRleHQiOlsiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvdjEiXSwidHlwZSI6WyJWZXJpZmlhYmxlQ3JlZGVudGlhbCIsIlBJRCJdLCJpc3N1ZXIiOnsibmFtZSI6Iktpbmdkb20gb2YgdGhlIE5ldGhlcmxhbmRzIiwiZGVzY3JpcHRpb24iOiJLaW5nZG9tIG9mIHRoZSBOZXRoZXJsYW5kcyIsImlkIjoiZGlkOndlYjpubC5nb3YuZGV2LmVkdXdhbGxldC5ubCJ9LCJuYW1lIjoiUHJpbmNpcGFsIElEIiwiZGVzY3JpcHRpb24iOiJQcmluY2lwYWwgSWRlbnRpdHkgRG9jdW1lbnQgb2YgdGhlIEtpbmdkb20gb2YgdGhlIE5ldGhlcmxhbmRzIiwiaXNzdWFuY2VEYXRlIjoiMjAxMy0xMC0wNVQxMjowMDowMC4wMDBaIiwiY3JlZGVudGlhbFN1YmplY3QiOnsiZ2l2ZW5fbmFtZSI6Ik1hcnRpbiIsImZhbWlseV9uYW1lIjoiSsO4cmdlbnNlbiIsImJpcnRoX2RhdGUiOiIwNy0wNy0xOTc5IiwiZmFtaWx5X25hbWVfYmlydGgiOiJKw7hyZ2Vuc2VuIiwiZ2l2ZW5fbmFtZV9iaXJ0aCI6Ik1hcnRpbiIsImJpcnRoX3BsYWNlIjoiTmlldXdkb3JwIFRoZSBOZXRoZXJsYW5kcyIsInNleCI6MSwibmF0aW9uYWxpdHkiOiJOTCIsImV4cGlyeV9kYXRlIjoiMDEtMDktMjAyNyIsImlzc3VhbmNlX2RhdGUiOiIwNS0xMC0yMDEzIiwiaXNzdWluZ19hdXRob3JpdHkiOiJTVVJGIFBCQSIsImlzc3VpbmdfY291bnRyeSI6Ik5MIiwiYWdlX2luX3llYXJzIjpudWxsLCJhZ2VfYmlydGhfeWVhciI6MTk3OSwiYmlydGhfY291bnRyeSI6Ik5MIiwiYmlydGhfY2l0eSI6Ik5pZXV3ZG9ycCIsInJlc2lkZW50X2FkZHJlc3MiOiJCaWpsZXZlbGRrYWRlIDc3IDQ0NTVUWCBUaGUgTmV0aGVybGFuZHMiLCJyZXNpZGVudF9jb3VudHJ5IjoiVGhlIE5ldGhlcmxhbmRzIiwicmVzaWRlbnRfY2l0eSI6Ik5pZXV3ZG9ycCIsInJlc2lkZW50X3Bvc3RhbF9jb2RlIjoiNDQ1NVRYIiwicmVzaWRlbnRfc3RyZWV0IjoiQmlqbGV2ZWxka2FkZSIsInJlc2lkZW50X2hvdXNlX251bWJlciI6Ijc3IiwicGVyc29uYWxfYWRtaW5pc3RyYXRpdmVfbnVtYmVyIjoiMTA2ODAwNDAzIiwiYWdlX292ZXJfMTgiOjEsImFnZV9vdmVyXzEzIjoxLCJwb3J0cmFpdCI6IiIsImRvY3VtZW50X251bWJlciI6IlBCQTEwNjgwMDQiLCJpc3N1aW5nX2p1cmlzZGljdGlvbiI6Ik5MIiwiaWQiOiJkaWQ6andrOmV5SmhiR2NpT2lKRlV6STFOaUlzSW5WelpTSTZJbk5wWnlJc0ltdDBlU0k2SWtWRElpd2lZM0oySWpvaVVDMHlOVFlpTENKNElqb2lTRFJ2ZEhFelRuRlRXVWRrYW1KaU5qWmlXSE54WlhGemVHMXJUbGhaWkU4d09HSjZNR1JRYkhwalNTSXNJbmtpT2lKb2VIUndWVTVDVUVwMVdVZzVaVmRsZERoNFgwMXBWMFYzTVVwUFYwUlZaVTVPUjBKVlExVmpibUZSSW4wIn0sInN1YiI6ImRpZDpqd2s6ZXlKaGJHY2lPaUpGVXpJMU5pSXNJblZ6WlNJNkluTnBaeUlzSW10MGVTSTZJa1ZESWl3aVkzSjJJam9pVUMweU5UWWlMQ0o0SWpvaVNEUnZkSEV6VG5GVFdVZGthbUppTmpaaVdITnhaWEZ6ZUcxclRsaFpaRTh3T0dKNk1HUlFiSHBqU1NJc0lua2lPaUpvZUhSd1ZVNUNVRXAxV1VnNVpWZGxkRGg0WDAxcFYwVjNNVXBQVjBSVlpVNU9SMEpWUTFWamJtRlJJbjAiLCJuYmYiOjEzODA5NzQ0MDAsImlzcyI6ImRpZDp3ZWI6bmwuZ292LmRldi5lZHV3YWxsZXQubmwifQ.M4pW5DqZ0gMfpoOVf1vzVwIljL_uuwLhlaw2aJSbVx4SwLMfzCXvjdsVnwCN6gX26vFdN8KWmXHKQjCIKTh2DQ'
    }
}


describe('Credential summary', () => {
    it('should not show null values', async (): Promise<void> => {
        const result = await toNonPersistedCredentialSummary({verifiableCredential: credential, credentialRole: CredentialRole.HOLDER})

        expect(result).toBeDefined()
        expect(result.properties).toBeDefined()
        expect(result.properties.find((property) => property.label === 'age_in_years')).toBeUndefined()
    })
})
