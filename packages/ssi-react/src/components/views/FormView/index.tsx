import {CSSProperties, ReactElement, useEffect, useState} from 'react'
import {JsonForms} from '@jsonforms/react'
import {
  JsonFormsCellRendererRegistryEntry,
  JsonFormsRendererRegistryEntry,
  JsonSchema,
  Middleware,
  UISchemaElement,
  ValidationMode,
} from '@jsonforms/core'
import {materialCells} from '@jsonforms/material-renderers'
import {jsonFormsMaterialRenderers} from '../../../renders/jsonFormsRenders'
import {JSONFormState} from '../../../types'
import Ajv from 'ajv'
import {DateFormat, formatDateToISO} from '../../../helpers/date/DateHelper'

type Props<DataType = Record<any, any>> = {
  schema: JsonSchema
  uiSchema: UISchemaElement
  validationMode?: ValidationMode
  data?: DataType
  renderers?: Array<JsonFormsRendererRegistryEntry>
  cells?: Array<JsonFormsCellRendererRegistryEntry>
  onFormStateChange?: (state: JSONFormState) => Promise<void>
  style?: CSSProperties
  middleware?: Middleware
  ajv?: Ajv
  readonly?: boolean
  config?: any
}

const initializeDefaultValues = (schema: JsonSchema, currentData: Record<string, any> = {}): Record<string, any> => {
  const result = {...currentData}

  if (!schema.properties) {
    return result
  }

  Object.entries(schema.properties).forEach(([key, property]) => {
    if (typeof property === 'object') {
      // Handle const values
      if (property.const && (!(key in result) || !result[key])) {
        result[key] = property.const
      }

      // Handle default values
      if (property.default && (!(key in result) || !result[key])) {
        if (property.format?.startsWith('date') || property.format?.startsWith('time')) {
          result[key] = formatDateToISO(property.default, property.format as DateFormat)
        } else {
          result[key] = property.default
        }
      }

      // Recursively handle nested objects
      if (property.properties) {
        if (!result[key]) {
          result[key] = {}
        }
        result[key] = initializeDefaultValues(property as JsonSchema, result[key])
      }
    }
  })

  return result
}

const FormView = (props: Props): ReactElement => {
  const {
    data,
    schema,
    uiSchema,
    validationMode = 'ValidateAndShow',
    renderers = jsonFormsMaterialRenderers,
    cells = materialCells,
    style,
    middleware,
    ajv,
    onFormStateChange,
    readonly = false,
    config,
  } = props

  const [formData, setFormData] = useState<Record<string, any>>(data ?? {})

  useEffect(() => {
    // Initialize or update form data with schema defaults
    const initializedData = initializeDefaultValues(schema, formData)
    setFormData(initializedData)
  }, [schema])

  const onFormStateChanged = (state: JSONFormState): void => {
    const updatedData = initializeDefaultValues(schema, state.data)

    // Only update if data actually changed to avoid loops
    if (JSON.stringify(updatedData) !== JSON.stringify(state.data)) {
      setFormData(updatedData)
      void onFormStateChange?.({
        ...state,
        data: updatedData,
      })
    } else {
      void onFormStateChange?.(state)
    }
  }

  return (
    <div style={style}>
      <JsonForms
        schema={schema}
        uischema={uiSchema}
        data={formData}
        renderers={renderers}
        cells={cells}
        onChange={onFormStateChanged}
        validationMode={validationMode}
        middleware={middleware}
        ajv={ajv}
        readonly={readonly}
        config={config}
      />
    </div>
  )
}

export default FormView
