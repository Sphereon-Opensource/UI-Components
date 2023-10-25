import {ButtonIcon} from '@sphereon/ui-components.core'

export type Button = {
  caption: string
  onClick: () => Promise<void>
  icon?: ButtonIcon
  disabled?: boolean
}
