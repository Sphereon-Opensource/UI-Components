import {JsonFormsRendererRegistryEntry} from '@jsonforms/core'
import {materialRenderers} from '@jsonforms/material-renderers'
import PassportPhotoControl, {passportPhotoControlTester} from '../components/fields/JSONForms/PassportPhotoControl/index.js'

export const jsonFormsMaterialRenderers: Array<JsonFormsRendererRegistryEntry> = [
  ...materialRenderers,
  {tester: passportPhotoControlTester, renderer: PassportPhotoControl},
]
