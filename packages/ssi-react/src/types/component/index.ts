import {ComponentType} from 'react'
import {AccessorFn, DeepKeys} from '@tanstack/react-table'

export type TabRoute = {
  key: string
  title: string
}

export type TabViewRoute = TabRoute & {
  content: ComponentType<unknown>
}

export type TabNavigationState = {
  index: number
  routes: Array<TabViewRoute>
}

export enum ButtonIconsEnum {
  ADD = 'add',
  ARROW_DOWN = 'arrowDown',
  FILTER = 'filter',
}

export type ColumnHeader<T> = {
  accessor: AccessorFn<T> | DeepKeys<T>
  type: TableCellTypeEnum
  label?: string
  // TODO extent this with more options to override
}

export type Button = {
  caption: string
  onClick: () => Promise<void>
  icon?: ButtonIconsEnum
  disabled?: boolean
}

export enum LabelTypeEnum {
  ISSUER = 'Issuer',
  VERIFIER = 'Verifier',
}

export enum TableCellTypeEnum {
  TEXT = 'text',
  LABEL = 'label',
}
