import React, {FC} from 'react'

import {
  ButtonFlexRowStyled as Button,
  DropDownListItemContainerStyled as Container,
  DropDownListItemIconContainerStyled as IconContainer,
  DropDownListItemCaptionContainerStyled as ListItemCaption,
} from '../../../styles/components'
import DeleteIcon from '../../assets/icons/DeleteIcon'
import {borderColors, ButtonIcon, fontColors, OpacityStyleEnum} from '@sphereon/ui-components.core'

type Props = {
  caption: string
  onClick: (args?: any) => Promise<void>
  disabled?: boolean
  icon?: ButtonIcon
  showBorder?: boolean
  fontColor?: string
}

const DropDownListItem: FC<Props> = (props: Props): JSX.Element => {
  const {disabled, caption, icon, showBorder = false, fontColor = fontColors.dark} = props

  const onClick = async () => {
    await props.onClick()
  }

  const getIcon = (icon: ButtonIcon): JSX.Element => {
    const {fontColor = fontColors.dark} = props

    switch (icon) {
      case ButtonIcon.DELETE:
        return <DeleteIcon color={fontColor} />
      default:
        return <div />
    }
  }

  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      style={{
        ...(disabled && {opacity: OpacityStyleEnum.DISABLED}),
      }}>
      <Container style={{...(showBorder && {borderBottomWidth: 2, borderBottomColor: borderColors.light})}}>
        <ListItemCaption style={{color: fontColor}}>{caption}</ListItemCaption>
        {icon && <IconContainer>{getIcon(icon)}</IconContainer>}
      </Container>
    </Button>
  )
}

export default DropDownListItem
