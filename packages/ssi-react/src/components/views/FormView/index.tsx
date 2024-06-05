import {CSSProperties, FC, ReactElement} from 'react';
import {JsonForms} from '@jsonforms/react';
import {
    JsonFormsCellRendererRegistryEntry,
    JsonFormsRendererRegistryEntry,
    JsonSchema,
    UISchemaElement,
    ValidationMode
} from '@jsonforms/core';
import {materialCells} from '@jsonforms/material-renderers';
import {jsonFormsMaterialRenderers} from '../../../renders/jsonFormsRenders';
import {JSONFormState} from '../../../types';

type Props = {
    schema: JsonSchema
    uiSchema: UISchemaElement
    validationMode?: ValidationMode
    data?: Record<any, any>
    renderers?: Array<JsonFormsRendererRegistryEntry>
    cells?: Array<JsonFormsCellRendererRegistryEntry>
    onFormStateChange?: (state: JSONFormState) => Promise<void>
    style?: CSSProperties
}

const FormView: FC<Props> = (props: Props): ReactElement => {
    const {
        data,
        schema,
        uiSchema,
        validationMode = 'ValidateAndShow',
        renderers = jsonFormsMaterialRenderers,
        cells = materialCells,
        style,
        onFormStateChange
    } = props

    const onFormStateChanged = (state: JSONFormState): void => {
        void onFormStateChange?.(state)
    };

    return <div style={style}>
        <JsonForms
            schema={schema}
            uischema={uiSchema}
            data={data}
            renderers={renderers}
            cells={cells}
            onChange={onFormStateChanged}
            validationMode={validationMode}
        />
    </div>
}

export default FormView;
