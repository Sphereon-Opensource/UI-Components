import React, {FC, ReactElement} from 'react'
import {borderColors, ButtonIcon, fontColors} from '@sphereon/ui-components.core'
import {getIcon} from '../../../utils'
import {
  DropDownListItemCaptionContainerStyled as ListItemCaption,
  DropDownListItemContainerStyled as Container,
  DropDownListItemIconContainerStyled as IconContainer,
} from '../../../styles/components'

type Props = {
  label: string
  onClick: (args?: any) => Promise<void>
  disabled?: boolean
  icon?: ButtonIcon
  fontColor?: string
  showBorder?: boolean
  borderColor?: string
}

const DropDownListItem: FC<Props> = (props: Props): ReactElement => {
  const {disabled, label, icon, showBorder = false, fontColor = fontColors.dark, borderColor = borderColors.light, onClick} = props
  const onContainerClick = async (event: React.MouseEvent<HTMLDivElement, MouseEvent>): Promise<void> => {
    event.stopPropagation()
    if (onClick) {
      await onClick()
    }
  }

  return (
    <Container onClick={onContainerClick} style={{...(showBorder && {borderBottomWidth: 2, borderBottomColor: borderColor})}}>
      <ListItemCaption>{label}</ListItemCaption>
      {icon && <IconContainer>{getIcon(icon)}</IconContainer>}
    </Container>
  )
}

export default DropDownListItem
