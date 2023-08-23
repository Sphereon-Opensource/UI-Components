import React, {FC, ReactElement} from 'react'
import SSIAddIcon from '../../assets/icons/SSIAddIcon'
import SSIFilterIcon from '../../assets/icons/SSIFilterIcon'
import SSIArrowDownIcon from '../../assets/icons/SSIArrowDownIcon'
import {ButtonIconsEnum} from '../../../types'
import {SSIIconButtonContainerStyled as Container} from '../../../styles/components'

export type Props = {
  icon: ButtonIconsEnum
  disabled?: boolean // TODO implement styling
  onClick: () => Promise<void>
}

const SSIIconButton: FC<Props> = (props: Props): ReactElement => {
  const {icon, onClick, disabled = false} = props

  return <Container onClick={onClick}>{getIcon(icon)}</Container>
}

const getIcon = (icon: ButtonIconsEnum): JSX.Element => {
  switch (icon) {
    case ButtonIconsEnum.ADD:
      return <SSIAddIcon />
    case ButtonIconsEnum.FILTER:
      return <SSIFilterIcon />
    case ButtonIconsEnum.ARROW_DOWN:
      return <SSIArrowDownIcon />
    default:
      return <div />
  }
}

export default SSIIconButton
