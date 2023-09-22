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
} from '@tanstack/react-table'
import {Button, ColumnHeader, LabelTypeEnum, TableCellTypeEnum} from '../../../types'
import SSITableViewHeader from './SSITableViewHeader'
import SSITypeLabel from '../../labels/SSITypeLabel'
import SSIText from '../../labels/SSIText'
import {
  SSITableViewCellContainerStyled,
  SSITableViewContainerStyled,
  SSITableViewHeaderCellContainerStyled,
  SSITableViewLabelCellStyled,
  SSITableViewRowContainerStyled,
  SSITableViewTableContainerStyled,
} from '../../../styles/components'

export type Props<T> = {
  data: Array<T>
  columns: Array<ColumnHeader<T>>
  onRowClick?: (data: Row<T>) => Promise<void>
  enableRowSelection?: boolean
  enableFiltering?: boolean
  columnResizeMode?: ColumnResizeMode
  actions?: Array<Button>
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

const getCellFormatting = (type: TableCellTypeEnum, value: any, truncationLength?: number): ReactElement => {
  switch (type) {
    case TableCellTypeEnum.TEXT:
      return <SSIText value={value} {...(truncationLength && { truncationLength })}/>
    case TableCellTypeEnum.LABEL: {
      const labels = Array.isArray(value) ? value.map((label: LabelTypeEnum) => <SSITypeLabel type={label} />) : <SSITypeLabel type={value} />
      return <SSITableViewLabelCellStyled>{labels}</SSITableViewLabelCellStyled>
    }
    default:
      return <div />
  }
}

const SSITableView = <T extends {}>(props: Props<T>): ReactElement => {
  const {
    columns,
    data,
    enableRowSelection = false,
    enableFiltering = false,
    columnResizeMode = 'onChange',
    actions = [],
    onRowClick
  } = props
  const [rowSelection, setRowSelection] = React.useState({})
  const columnHelper = createColumnHelper<T>()

  // TODO improve this
  let availableColumns: Array<ColumnDef<T, any>> = columns.map((header: ColumnHeader<T>) =>
    columnHelper.accessor(header.accessor, {
      id: header.accessor as string,
      header: header.label,
      cell: (info: CellContext<T, any>) => getCellFormatting(header.type,info.getValue(), header.truncationLength),
    }),
  )
  if (enableRowSelection) {
    availableColumns = [
      {
        id: 'select',
        // @ts-ignore
        header: ({table}) => (
          <IndeterminateCheckbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        ),
        // @ts-ignore
        cell: ({row}) => (
          <div className="px-1">
            <IndeterminateCheckbox
              {...{
                checked: row.getIsSelected(),
                disabled: !row.getCanSelect(),
                indeterminate: row.getIsSomeSelected(),
                onChange: row.getToggleSelectedHandler(),
              }}
            />
          </div>
        ),
      },
      ...availableColumns,
    ]
  }

  const table: Table<T> = useReactTable({
    state: {
      rowSelection,
    },
    enableRowSelection,
    onRowSelectionChange: setRowSelection,
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
    if (onRowClick) {
      await onRowClick(row)
    }
  }


  return (
    <SSITableViewContainerStyled>
      <div className="overflow-x-auto">
        <SSITableViewHeader actions={actions} enableFiltering={enableFiltering} />
        <SSITableViewTableContainerStyled>
          <thead>
            {table.getHeaderGroups().map((headerGroup: HeaderGroup<T>) => (
              <SSITableViewRowContainerStyled key={headerGroup.id}>
                {headerGroup.headers.map((header: Header<T, any>) => (
                  <SSITableViewHeaderCellContainerStyled
                    key={header.id}
                    // @ts-ignore
                    colSpan={header.colSpan}
                    style={{width: header.getSize()}}>
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
                  </SSITableViewHeaderCellContainerStyled>
                ))}
              </SSITableViewRowContainerStyled>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row: Row<T>) => (
              <SSITableViewRowContainerStyled key={row.id} onClick={() => onRowClicked(row)}>
                {row.getVisibleCells().map((cell: Cell<T, any>) => (
                  <SSITableViewCellContainerStyled key={cell.id} style={{width: cell.column.getSize()}}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </SSITableViewCellContainerStyled>
                ))}
              </SSITableViewRowContainerStyled>
            ))}
          </tbody>
        </SSITableViewTableContainerStyled>
      </div>
    </SSITableViewContainerStyled>
  )
}

export default SSITableView
