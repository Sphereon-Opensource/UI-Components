import {AccessorFn, DeepKeys, Row} from '@tanstack/react-table'
import {ButtonIcon} from '@sphereon/ui-components.core'

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
  caption: string
  icon?: ButtonIcon
  actions: Array<TableColumnActionButton>
}

export type TableColumnActionButton = {
  caption: string
  onClick: (rowData: Row<any>) => Promise<void>
  icon?: ButtonIcon
  fontColor?: string
  disabled?: boolean
}
