import React, {FC, useState, useRef, useEffect} from 'react'
import {
  DropDownListContainerStyled as Container,
  DropDownContainerStyled as DropDownContainer,
  DropDownListButtonStyled as ListButton,
} from '../../../styles/components'
import {Button} from '../../../types'
import DropDownListItem from '../DropDownListItem'
import {SSIIconButton} from '../../../index'
import {borderColors, ButtonIcon} from '@sphereon/ui-components.core'

export type Props = {
  icon: ButtonIcon
  buttons: Array<Button>
  showBorder?: boolean
}

const DropDownList: FC<Props> = (props: Props): JSX.Element => {
  const {icon, buttons, showBorder = false} = props
  const [showActionsMenu, setShowActionsMenu] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const onMore = (event: React.MouseEvent<HTMLDivElement>) => {
    setShowActionsMenu(!showActionsMenu)
    event.stopPropagation()
  }

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowActionsMenu(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => {
      document.removeEventListener('mousedown', onClickOutside)
    }
  }, [showActionsMenu])

  const getItems = () => {
    return buttons.map((item: Button, index: number) => {
      const showBorder = buttons.length > 1 && index !== buttons.length - 1
      return (
        <DropDownListItem
          key={index}
          showBorder={showBorder}
          label={item.caption}
          onClick={item.onClick}
          icon={item.icon}
          fontColor={item.fontColor}
        />
      )
    })
  }

  return (
    <Container ref={dropdownRef}>
      <ListButton>
        <SSIIconButton icon={icon} onClick={onMore} />
      </ListButton>
      {showActionsMenu && <DropDownContainer style={{...(showBorder && {borderWidth: 2, borderColor: borderColors.lightGrey, borderStyle: 'solid' })}}>{getItems()}</DropDownContainer>}
    </Container>
  )
}

export default DropDownList
