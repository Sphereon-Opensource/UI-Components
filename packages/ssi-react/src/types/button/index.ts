import {ButtonIcon} from '@sphereon/ui-components.core'

export type Button = {
  caption: string
  onClick: (opts?: any) => Promise<void>
  icon?: ButtonIcon
  fontColor?: string
  disabled?: boolean
}
