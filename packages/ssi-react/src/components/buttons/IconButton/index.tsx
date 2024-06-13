import React, {FC, MouseEvent, MouseEventHandler, ReactElement} from 'react'
import {ButtonIcon, fontColors, OpacityStyleEnum} from '@sphereon/ui-components.core'
import {IconButtonContainerStyled as Container, SSITextH3Styled as Caption} from '../../../styles'
import {getIcon} from '../../../helpers/iconHelper'

type Props = {
  icon: ButtonIcon
  caption?: string
  onClick: MouseEventHandler
  disabled?: boolean | (() => boolean)
  iconColor?: string
}

const IconButton: FC<Props> = (props: Props): ReactElement => {
  const {caption, icon, iconColor = fontColors.dark} = props
  const disabled: boolean = typeof props.disabled === 'function' ? props.disabled() : props.disabled ?? false

  const onClick = async (event: MouseEvent): Promise<void> => {
    if (!disabled) {
      props.onClick(event)
    }
  }

  return (
    <Container
        style={{
          ...(disabled && {opacity: OpacityStyleEnum.DISABLED}),
        }}
        onClick={onClick}
    >
      {getIcon(icon, iconColor)}
      {caption && <Caption>{caption}</Caption>}
    </Container>
  )
}


export default IconButton
