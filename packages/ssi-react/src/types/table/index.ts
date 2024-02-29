import {AccessorFn, DeepKeys} from '@tanstack/react-table'
import {Button} from '../button'

export enum TableCellType {
  TEXT = 'text',
  LABEL = 'label',
  STATUS = 'status',
  CREDENTIAL_CARD = 'credentialCard',
  ACTION_GROUP = 'actionGroup',
}

export type ColumnHeader<T> = {
  accessor: AccessorFn<T> | DeepKeys<T>
  type: TableCellType
  label?: string
  opts?: TableCellOptions
}

export type TableCellOptions = {
  /**
   * if populated, will truncate the text received in the value to this length.
   * Showing the full text in the event of hover.
   */
  truncationLength?: number
  enableHover?: boolean
  columnMinWidth?: number
  columnMaxWidth?: number
  columnWidth?: number
  actionGroup?: TableColumnActionGroup
  // TODO extent this with more options to override
}

export type TableColumnActionGroup = {
  label?: string
  actions: Array<Button>
}

export type TableRowSelection = {
  rowId: string
  rowData: any
}
