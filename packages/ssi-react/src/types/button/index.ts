import {ButtonIcon} from '@sphereon/ui-components.core'
import {TableColumnActionButton} from '../table'

export type Button = {
  caption: string
  onClick: () => Promise<void>
  icon?: ButtonIcon
  fontColor?: string
  disabled?: boolean
}

export type GeneralButton = Button | TableColumnActionButton
