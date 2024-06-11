import React, {FC, MouseEventHandler, ReactElement, MouseEvent} from 'react'
import {ButtonIcon, fontColors, OpacityStyleEnum} from '@sphereon/ui-components.core'
import SSIAddIcon from '../../assets/icons/SSIAddIcon'
import SSIFilterIcon from '../../assets/icons/SSIFilterIcon'
import SSIArrowDownIcon from '../../assets/icons/SSIArrowDownIcon'
import MeatBallsIcon from '../../assets/icons/MeatBallsIcon'
import DeleteIcon from '../../assets/icons/DeleteIcon'
import {IconButtonContainerStyled as Container, SSITextH3Styled as Caption} from '../../../styles'
import {PencilIcon} from '../../../index'

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

const getIcon = (icon: ButtonIcon, color: string): ReactElement => {
  switch (icon) {
    case ButtonIcon.ADD:
      return <SSIAddIcon color={color} />
    case ButtonIcon.ARROW_DOWN:
      return <SSIArrowDownIcon color={color} />
    case ButtonIcon.MEATBALLS:
      return <MeatBallsIcon color={color} />
    case ButtonIcon.EDIT:
      return <PencilIcon color={color} />
    case ButtonIcon.DELETE:
      return <DeleteIcon color={color} />
    case ButtonIcon.FILTER:
      return <SSIFilterIcon color={color} />
    default:
      return <div />
  }
}

export default IconButton
