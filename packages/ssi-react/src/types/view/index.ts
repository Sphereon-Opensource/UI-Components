import {JsonFormsCore, JsonSchema, UISchemaElement} from '@jsonforms/core'

export type JSONFormState<DataType = any> = Pick<JsonFormsCore, 'errors'> & {data: DataType}

export type CredentialFormData = JSONFormState<Record<any, any>> & {
  evidence: Array<File>
}

export type CredentialFormSelectionType = {
  label: string
  schema?: JsonSchema
  uiSchema?: UISchemaElement
  credentialType: Array<string>
}
