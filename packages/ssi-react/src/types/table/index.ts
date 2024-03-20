import {CredentialStatus, Localization} from '@sphereon/ui-components.core';
import {AccessorFn, DeepKeys} from '@tanstack/react-table'
import {Button} from '../button'
import {ValueSelection} from '../field';

export enum TableCellType {
  TEXT = 'text',
  LABEL = 'label',
  STATUS = 'status',
  CREDENTIAL_CARD = 'credentialCard',
  CREDENTIAL_DETAILS = 'credentialDetails',
  ACTIONS = 'actions',
  COMBOBOX = 'combobox',
}

// type CellOptionsForType<Type extends TableCellType> =
//     Type extends TableCellType.TEXT ? TextCellOptions :
//     Type extends TableCellType.COMBOBOX ? ComboboxCellOptions :
//     Type extends TableCellType.ACTIONS ? ActionsCellOptions :
//     never;

export type ColumnHeader<T> = {
  accessor: AccessorFn<T> | DeepKeys<T>;
  type: TableCellType;
  label?: string;
  columnOptions?: TableColumnOptions;
  // TODO put this in columnOptions
  // cellOptions?: TableCellOptions//CellOptionsForType<TableCellType>;
}

// export type ColumnHeader<T> = {
//   accessor: AccessorFn<T> | DeepKeys<T>
//   type: TableCellType
//   label?: string
//   columnOptions?: TableColumnOptions
//   cellOptions?: TableCellOptions // TODO these are not really cell options
// }

export type TableColumnOptions = {
  /**
   * if populated, will truncate the text received in the value to this length.
   * Showing the full text in the event of hover.
   */
  // truncationLength?: number
  // enableHover?: boolean
  columnMinWidth?: number
  columnMaxWidth?: number
  columnWidth?: number
  //columnTypeOptions?: TableColumnTypeOptions
  // actionGroup?: TableColumnActionGroup // TODO just use actions
  // // TODO extent this with more options to override
  cellOptions?: TableCellOptions//CellOptionsForType<TableCellType>;


  //cellOpts?: TableCellOptions
}

export type TableCellOptions = TextCellOptions | ComboboxCellOptions | ActionsCellOptions // TODO names

// export type TableColumnActionGroup = {
//   label?: string // TODO remove
//   actions: Array<Button>
// }

export type TableRowSelection = {
  rowId: string
  rowData: any
}

export type TextCellOptions = {
  truncationLength?: number
  enableHover?: boolean
}

export type ComboboxCellOptions = {
  selectOptions?: Array<ValueSelection>
  defaultValue?: ValueSelection
  //value?: ValueSelection
  onChange?: (value: ValueSelection) => Promise<void>
}

export type ActionsCellOptions = {
  actions: Array<Button>
}

// export type CredentialDetailsCellOptions = {
//   credentialTitle: string
//   credentialStatus: CredentialStatus
//   issuerName: string
//   issuanceDate: Date
//   expirationDate?: Date
// }
