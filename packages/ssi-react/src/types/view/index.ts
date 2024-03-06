import {JsonFormsCore, JsonSchema, UISchemaElement} from '@jsonforms/core';

export type CredentialFormInput = Pick<JsonFormsCore, 'data' | 'errors'>

export type CredentialFormData = Pick<JsonFormsCore, 'data'>

export type CredentialFormSelectionType = {
    label: string
    schema?: JsonSchema
    uiSchema?: UISchemaElement
}
