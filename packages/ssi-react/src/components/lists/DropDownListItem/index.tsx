import React, {FC} from 'react'
import {
  DropDownListItemContainerStyled as Container,
  DropDownListItemIconContainerStyled as IconContainer,
  DropDownListItemCaptionContainerStyled as ListItemCaption,
} from '../../../styles/components'
import DeleteIcon from '../../assets/icons/DeleteIcon'
import {ButtonIcon, fontColors} from '@sphereon/ui-components.core'
import {Row} from '@tanstack/react-table'

type Props = {
  label: string
  onClick: (args?: any) => Promise<void>
  disabled?: boolean
  icon?: ButtonIcon
  fontColor?: string
  showBorder?: boolean
  borderColor?: string
  opts?: DropDownListItemOpts
}

export type DropDownListItemOpts = {
  rowData?: Row<any>
}

const DropDownListItem: FC<Props> = (props: Props): JSX.Element => {
  const {disabled, label, icon, showBorder = false, fontColor = fontColors.dark, borderColor = fontColors.dark, opts, onClick} = props
  const getIcon = (icon: ButtonIcon): JSX.Element => {
    switch (icon) {
      case ButtonIcon.DELETE:
        return <DeleteIcon color={fontColors.dark} />
      default:
        return <div />
    }
  }

  const onContainerClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (onClick) {
      onClick(opts?.rowData)
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
