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
import {LabelStatus, LabelType, Localization} from '@sphereon/ui-components.core'
import SSITableViewHeader from './SSITableViewHeader'
import SSITypeLabel from '../../labels/SSITypeLabel'
import SSIHoverText from '../../fields/SSIHoverText'
import {
  SSITableViewCellContainerStyled as CellContainer,
  SSITableViewContainerStyled as Container,
  SSITableViewHeaderCellContainerStyled as HeaderCellContainer,
  SSITableViewLabelCellStyled as LabelCell,
  SSITableViewResultCountCaptionStyled as ResultCountCaption,
  SSITableViewRowContainerStyled as RowContainer,
  SSITableViewTableContainerStyled as TableContainer,
} from '../../../styles'
import {Button, ColumnHeader, ColumnHeaderOptions, TableCellType} from '../../../types'
import {SSIStatusLabel} from '../../../index'

type Props<T> = {
  data: Array<T>
  columns: Array<ColumnHeader<T>>
  onRowClick?: (data: Row<T>) => Promise<void>
  enableRowSelection?: boolean
  enableFiltering?: boolean
  enableMostRecent?: boolean
  enableResultCount?: boolean
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

const getCellFormatting = (type: TableCellType, value: any, opts?: ColumnHeaderOptions): ReactElement => {
  switch (type) {
    case TableCellType.TEXT:
      const {truncationLength, enableHover = false} = opts ?? {}
      return <SSIHoverText
        text={value}
        truncationLength={truncationLength}
        enableHover={enableHover} />
    case TableCellType.LABEL: {
      const labels = Array.isArray(value) ? value.map((label: LabelType) => <SSITypeLabel type={label} />) : <SSITypeLabel type={value} />
      return <LabelCell>{labels}</LabelCell>
    }
    case TableCellType.STATUS: {
      return <SSIStatusLabel status={value as LabelStatus} />
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
    enableMostRecent = false,
    enableResultCount = false,
    columnResizeMode = 'onChange',
    actions = [],
    onRowClick,
  } = props
  const [rowSelection, setRowSelection] = React.useState({})
  const columnHelper = createColumnHelper<T>()

  // TODO improve this
  let availableColumns: Array<ColumnDef<T, any>> = columns.map((header: ColumnHeader<T>) =>
    columnHelper.accessor(header.accessor, {
      id: header.accessor as string,
      header: header.label,
      cell: (info: CellContext<T, any>) => getCellFormatting(header.type, info.getValue(), header.opts),
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
          <SSITableViewHeader actions={actions} enableFiltering={enableFiltering} enableMostRecent={enableMostRecent} />
        )}
        <TableContainer>
          <thead>
            {table.getHeaderGroups().map((headerGroup: HeaderGroup<T>) => (
              <RowContainer key={headerGroup.id}>
                {headerGroup.headers.map((header: Header<T, any>) => (
                  <HeaderCellContainer
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
                  </HeaderCellContainer>
                ))}
              </RowContainer>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row: Row<T>) => (
              <RowContainer key={row.id} onClick={() => onRowClicked(row)}>
                {row.getVisibleCells().map((cell: Cell<T, any>) => (
                  <CellContainer key={cell.id} style={{width: cell.column.getSize()}}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </CellContainer>
                ))}
              </RowContainer>
            ))}
          </tbody>
        </TableContainer>
      </div>
    </Container>
  )
}

export default SSITableView
