import React, {FC} from 'react'
import {
  DropDownListItemContainerStyled as Container,
  DropDownListItemIconContainerStyled as IconContainer,
  DropDownListItemCaptionContainerStyled as ListItemCaption,
} from '../../../styles/components/index.js'
import DeleteIcon from '../../assets/icons/DeleteIcon/index.js'
import {borderColors, ButtonIcon, fontColors} from '@sphereon/ui-components.core'

type Props = {
  label: string
  onClick: (args?: any) => Promise<void>
  disabled?: boolean
  icon?: ButtonIcon
  fontColor?: string
  showBorder?: boolean
  borderColor?: string
}

const DropDownListItem: FC<Props> = (props: Props): JSX.Element => {
  const {disabled, label, icon, showBorder = false, fontColor = fontColors.dark, borderColor = borderColors.light, onClick} = props
  const getIcon = (icon: ButtonIcon): JSX.Element => {
    switch (icon) {
      case ButtonIcon.DELETE:
        return <DeleteIcon color={fontColors.dark} />
      default:
        return <div />
    }
  }

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
