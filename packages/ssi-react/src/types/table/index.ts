import {AccessorFn, DeepKeys} from '@tanstack/react-table'
import {Button} from '../button'
import {ValueSelection} from '../field'

export enum TableCellType {
  TEXT = 'text',
  LABEL = 'label',
  STATUS = 'status',
  CREDENTIAL_CARD = 'credentialCard',
  CREDENTIAL_DETAILS = 'credentialDetails',
  ACTIONS = 'actions',
  COMBOBOX = 'combobox',
}

export type ColumnHeader<T> = {
  accessor: AccessorFn<T> | DeepKeys<T>
  type: TableCellType
  label?: string
  columnOptions?: TableColumnOptions
}

export type TableColumnOptions = {
  columnMinWidth?: number
  columnMaxWidth?: number
  columnWidth?: number
  cellOptions?: TableCellOptions
}

export type TableCellOptions = TextCellOptions | ComboboxCellOptions | ActionsCellOptions

export type TableRowSelection = {
  rowId: string
  rowData: any
}

export type TextCellOptions = {
  /**
   * if populated, will truncate the text received in the value to this length.
   * Showing the full text in the event of hover.
   */
  truncationLength?: number
  enableHover?: boolean
}

export type ComboboxCellOptions = {
  selectOptions?: Array<ValueSelection>
  defaultValue?: ValueSelection
  onChange?: (value: ValueSelection) => Promise<void>
}

export type ActionsCellOptions = {
  actions: Array<Button>
}
