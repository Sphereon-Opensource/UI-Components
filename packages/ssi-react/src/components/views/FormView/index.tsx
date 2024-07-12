import {CSSProperties, FC, ReactElement} from 'react'
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

const FormView: FC<Props> = (props: Props<any>): ReactElement => {
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

  const onFormStateChanged = (state: JSONFormState): void => {
    void onFormStateChange?.(state)
  }

  return (
    <div style={style}>
      <JsonForms
        schema={schema}
        uischema={uiSchema}
        data={data}
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
