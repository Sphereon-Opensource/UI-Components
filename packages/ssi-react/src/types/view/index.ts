import {JsonFormsCore, JsonSchema, UISchemaElement} from '@jsonforms/core';
import {ErrorObject} from 'ajv';

export type CredentialFormInput = Pick<JsonFormsCore, 'data' | 'errors'>

export type CredentialFormData = {
    data?: any
    errors?: ErrorObject[]
    evidence: Array<File>
}

export type CredentialFormSelectionType = {
    label: string
    schema?: JsonSchema
    uiSchema?: UISchemaElement
    credentialType: Array<string>
}
