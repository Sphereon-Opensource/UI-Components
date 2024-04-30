import { JsonFormsRendererRegistryEntry } from '@jsonforms/core';
import {materialRenderers} from '@jsonforms/material-renderers';
import PassportPhotoControl, {passportPhotoControlTester} from '../components/fields/JSONForms/PassportPhotoControl';

export const jsonFormsMaterialRenderers: Array<JsonFormsRendererRegistryEntry> = [
    ...materialRenderers,
    { tester: passportPhotoControlTester, renderer: PassportPhotoControl },
]
