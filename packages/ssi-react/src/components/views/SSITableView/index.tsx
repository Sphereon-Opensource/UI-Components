import React, {HTMLProps, ReactElement} from 'react'
import {
  Cell,
  CellContext,
  ColumnDef,
  ColumnResizeMode,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  Header,
  HeaderGroup,
  Row,
  Table,
  useReactTable,
  OnChangeFn,
  RowSelectionState,
  Updater,
} from '@tanstack/react-table'
import {ButtonIcon, LabelStatus, LabelType, Localization, selectionElementColors} from '@sphereon/ui-components.core'
import SSITableViewHeader from './SSITableViewHeader'
import SSITypeLabel from '../../labels/SSITypeLabel'
import SSIHoverText from '../../fields/SSIHoverText'
import SSIStatusLabel from '../../labels/SSIStatusLabel'
import CredentialMiniCardView from '../CredentialMiniCardView'
import DropDownList from '../../lists/DropDownList'
import {
  SSITableViewCellContainerStyled as CellContainer,
  SSITableViewContainerStyled as Container,
  SSITableViewHeaderCellContainerStyled as HeaderCellContainer,
  SSITableViewLabelCellStyled as LabelCell,
  SSITableViewResultCountCaptionStyled as ResultCountCaption,
  SSITableViewHeaderRowContainerStyled as HeaderRowContainer,
  SSITableViewRowContainerStyled as RowContainer,
  SSITableViewTableContainerStyled as TableContainer,
  TableViewRowSelectionCheckboxContainerStyled as RowSelectionCheckboxContainer,
} from '../../../styles'
import {
  ActionsCellOptions,
  Button,
  ColumnHeader,
  ComboboxCellOptions,
  TableCellType,
  TableRowSelection,
  TextCellOptions,
  ValueSelection,
  TableCellOptions
} from '../../../types'
import PaginationControls, {PaginationControlsProps} from './PaginationControls'
import ComboBox from "../../fields/ComboBox";
import CredentialDetailsView from "../CredentialViewItem";

type Props<T> = {
  data: Array<T>
  columns: Array<ColumnHeader<T>>
  onRowClick?: (data: Row<T>) => Promise<void>
  onDelete?: (rows: Array<T>) => Promise<void>
  enableRowSelection?: boolean
  enableRowHover?: boolean
  enableFiltering?: boolean
  enableMostRecent?: boolean
  enableResultCount?: boolean
  columnResizeMode?: ColumnResizeMode
  actions?: Array<Button>
  pagination?: PaginationControlsProps
}

// TODO implement correct checkboxes from design
function IndeterminateCheckbox({indeterminate, className = '', ...rest}: {indeterminate?: boolean} & HTMLProps<HTMLInputElement>) {
  const ref = React.useRef<HTMLInputElement>(null!)

  React.useEffect((): void => {
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = !rest.checked && indeterminate
    }
  }, [ref, indeterminate])

  return <input type="checkbox" ref={ref} className={className + ' cursor-pointer'} {...rest} />
}

const getCellFormatting = (type: TableCellType, value: any, row: Row<any>, options?: TableCellOptions): ReactElement => { // FIXME start giving value a type
  switch (type) {
    case TableCellType.TEXT:
      const { truncationLength, enableHover = false } = (options as TextCellOptions) ?? {}
      return <SSIHoverText text={value} truncationLength={truncationLength} enableHover={enableHover} />
    case TableCellType.LABEL: {
      const labels = Array.isArray(value) ? value.map((label: LabelType) => <SSITypeLabel type={label} />) : <SSITypeLabel type={value} />
      return <LabelCell>{labels}</LabelCell>
    }
    case TableCellType.STATUS: {
      return <SSIStatusLabel status={value as LabelStatus} />
    }
    case TableCellType.CREDENTIAL_CARD: {
      return <CredentialMiniCardView {...value} />
    }
    case TableCellType.CREDENTIAL_DETAILS: {
      return <CredentialDetailsView {...value} style={{maxWidth: 261}} />
    }
    case TableCellType.ACTIONS: {
      const { actions = [] } = (options as ActionsCellOptions) ?? {}
      const buttons = actions.map((action: Button) => ({
        ...action,
        onClick: () => action.onClick(row),
      }))
      return <DropDownList icon={ButtonIcon.MEATBALLS} buttons={buttons} showBorder={true} />
    }
    case TableCellType.COMBOBOX: {
      const { defaultValue, onChange, selectOptions = [] } = (options as ComboboxCellOptions) ?? {}
      return <ComboBox<ValueSelection>
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
          options={selectOptions}
      />
    }
    default:
      return <div />
  }
}

const toRowSelectionObject = (rows: Array<TableRowSelection>): {[key: string]: boolean} => {
  const rowSelectionObject: {[key: string]: boolean} = {}
  rows.forEach((row: TableRowSelection): void => {
    rowSelectionObject[row.rowId] = true
  })

  return rowSelectionObject
}

const SSITableView = <T extends {}>(props: Props<T>): ReactElement => {
  const {
    columns,
    data,
    enableRowSelection = false,
    enableRowHover = true,
    enableFiltering = false,
    enableMostRecent = false,
    enableResultCount = false,
    columnResizeMode = 'onChange',
    actions = [],
    onRowClick,
    onDelete,
    pagination,

  } = props
  const [rowSelection, setRowSelection] = React.useState<Array<TableRowSelection>>([])
  const [focusedRowId, setFocusedRowId] = React.useState<string | undefined>()
  const columnHelper = createColumnHelper<T>()

  // TODO improve this
  let availableColumns: Array<ColumnDef<T, any>> = columns.map((header: ColumnHeader<T>) =>
    columnHelper.accessor(header.accessor, {
      id: header.accessor as string,
      header: header.label,
      cell: (info: CellContext<T, any>) => getCellFormatting(header.type, info.getValue(), info.row, header.columnOptions?.cellOptions),
      minSize: header.columnOptions?.columnMinWidth,
      maxSize: header.columnOptions?.columnMaxWidth,
      size: header.columnOptions?.columnWidth,
    }),
  )
  if (enableRowSelection) {
    availableColumns = [
      {
        id: 'select',
        maxSize: 50,
        size: 50,
        header: ({table}) => (
          <IndeterminateCheckbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
              columnMaxWidth: 50
            }}
          />
        ),
        cell: ({row}) => (
          <RowSelectionCheckboxContainer>
            {(row.id === focusedRowId || rowSelection.length > 0) && (
              <IndeterminateCheckbox
                {...{
                  checked: row.getIsSelected(),
                  disabled: !row.getCanSelect(),
                  indeterminate: row.getIsSomeSelected(),
                  onChange: row.getToggleSelectedHandler(),
                  columnMaxWidth: 50
                }}
              />
            )}
          </RowSelectionCheckboxContainer>
        ),
      },
      ...availableColumns,
    ]
  }

  const onFocusRow = (rowId?: string): void => {
    setFocusedRowId(rowId)
  }

  const onRowSelectionChange: OnChangeFn<RowSelectionState> = (updatedRowSelection: Updater<RowSelectionState>): void => {
    // FIXME added ignore to stop it from complaining that updatedRowSelection is not callable. should be fixed at some point
    // @ts-ignore
    const currentRowSelection = updatedRowSelection(toRowSelectionObject(rowSelection))

    const selection: Array<TableRowSelection> = Object.keys(currentRowSelection).map((key: string): TableRowSelection => {
      return {
        rowId: key,
        rowData: data[Number(key)],
      }
    })

    setRowSelection(selection)
  }

  const table: Table<T> = useReactTable({
    // https://tanstack.com/table/v8/docs/api/core/table#defaultcolumn
    // Setting it to 0 as the default is 150. We need to check if a value has been provided, which could be 150
    defaultColumn: {
      size: 0,
    },
    state: {
      rowSelection: toRowSelectionObject(rowSelection),
    },
    enableRowSelection,
    onRowSelectionChange: onRowSelectionChange,
    data,
    columns: availableColumns,
    columnResizeMode,
    getCoreRowModel: getCoreRowModel(),
    // TODO implement the row selection color
    // meta: {
    //   getRowStyles: (row: Row<T>): CSSProperties => ({
    //     ...(row.original.age === 45 && {backgroundColor: '#D2D1F9'})
    //
    //     // background: row.original.age === 45 ? "blue" : "transparent",
    //   }),
    // }
  })

  const onRowClicked = async (row: Row<T>): Promise<void> => {
    await onRowClick?.(row)
  }

  const onDeleteClicked = async (): Promise<void> => {
    await onDelete?.(rowSelection.map((row: TableRowSelection) => row.rowData))
  }

  return (
    <Container>
      <div className="overflow-x-auto">
        {enableResultCount && (
          <ResultCountCaption>
            {/* TODO this needs to look at pagination */}
            {/* TODO the values need a different styling */}
            {Localization.translate('result_count_label', {
              count: data.length,
              maxCount: data.length,
            })}
          </ResultCountCaption>
        )}
        {(enableFiltering || enableMostRecent || actions.length > 0) && (
          <SSITableViewHeader
            actions={actions}
            enableFiltering={enableFiltering}
            enableMostRecent={enableMostRecent}
            {...(onDelete && {onDelete: onDeleteClicked})}
          />
        )}
        <TableContainer>
          <thead>
            {table.getHeaderGroups().map((headerGroup: HeaderGroup<T>) => (
              <HeaderRowContainer key={headerGroup.id}>
                {headerGroup.headers.map((header: Header<T, any>) => (
                  <HeaderCellContainer
                    key={header.id}
                    colSpan={header.colSpan}
                    style={{
                      ...(header.column.columnDef.minSize && {minWidth: header.column.columnDef.minSize}),
                      ...(header.column.columnDef.maxSize && {maxWidth: header.column.columnDef.maxSize}),
                      ...(header.column.columnDef.size !== 0 && {width: header.column.columnDef.size}),
                    }}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    <div
                      className={`resizer ${header.column.getIsResizing() ? 'isResizing' : ''}`}
                      onMouseDown={header.getResizeHandler()}
                      onTouchStart={header.getResizeHandler()}
                      style={{
                        transform:
                          columnResizeMode === 'onEnd' && header.column.getIsResizing()
                            ? `translateX(${table.getState().columnSizingInfo.deltaOffset}px)`
                            : '',
                      }}
                    />
                  </HeaderCellContainer>
                ))}
              </HeaderRowContainer>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row: Row<T>) => (
              <RowContainer
                key={row.id}
                enableHover={enableRowHover}
                onClick={() => onRowClicked(row)}
                onMouseEnter={() => onFocusRow(row.id)}
                onMouseLeave={() => onFocusRow()}
                style={{...(row.getIsSelected() && {backgroundColor: selectionElementColors.selectedRow})}}>
                {row.getVisibleCells().map((cell: Cell<T, any>) => (
                  <CellContainer
                    key={cell.id}
                    style={{
                      ...(cell.column.columnDef.minSize && {minWidth: cell.column.columnDef.minSize}),
                      ...(cell.column.columnDef.maxSize && {maxWidth: cell.column.columnDef.maxSize}),
                      ...(cell.column.columnDef.size !== 0 && {width: cell.column.columnDef.size}),
                    }}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </CellContainer>
                ))}
              </RowContainer>
            ))}
          </tbody>
        </TableContainer>
      </div>
      {pagination && <PaginationControls {...pagination} />}
    </Container>
  )
}

export default SSITableView
