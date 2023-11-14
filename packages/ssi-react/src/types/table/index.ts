import {AccessorFn, DeepKeys} from '@tanstack/react-table'

export enum TableCellType {
  TEXT = 'text',
  LABEL = 'label',
  STATUS = 'status',
}

export type ColumnHeader<T> = {
  accessor: AccessorFn<T> | DeepKeys<T>
  type: TableCellType
  label?: string
  /**
   * if populated, will truncate the text received in the value to this length.
   * Showing the full text in the event of hover.
   */
  truncationLength?: number
  enableHover?: boolean
  // TODO extent this with more options to override
}
