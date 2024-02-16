import React, {FC, useState, useRef, useEffect} from 'react'
import {
  SSIDropDownListContainerStyled as Container,
  DropDownContainerStyled as DropDownContainer,
  DropDownListButtonStyled as ListButton,
} from '../../../styles/components'
import {GeneralButton} from '../../../types'
import DropDownListItem from '../DropDownListItem'
import {SSIIconButton} from '../../../index'
import {ButtonIcon} from '@sphereon/ui-components.core'
import {Row} from '@tanstack/react-table'

export type Props = {
  icon: ButtonIcon
  buttons: Array<GeneralButton>
  opts?: DropDownListOpts
}

export type DropDownListOpts = {
  rowData?: Row<any>
}

const DropDownList: FC<Props> = (props: Props): JSX.Element => {
  const {icon, buttons, opts} = props
  const [showActionsMenu, setShowActionsMenu] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const onMore = (event: React.MouseEvent<HTMLDivElement>) => {
    setShowActionsMenu(!showActionsMenu)
    event.stopPropagation()
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowActionsMenu(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showActionsMenu])

  const getItems = () => {
    return buttons.map((item: GeneralButton, index: number) => {
      const showBorder = buttons.length > 1 && index !== buttons.length - 1
      return (
        <DropDownListItem
          key={index}
          showBorder={showBorder}
          label={item.caption}
          onClick={item.onClick}
          icon={item.icon}
          fontColor={item.fontColor}
          opts={opts}
        />
      )
    })
  }

  return (
    <Container ref={dropdownRef}>
      <ListButton>
        <SSIIconButton icon={icon} color={'black'} onClick={onMore} />
      </ListButton>
      {showActionsMenu && <DropDownContainer>{getItems()}</DropDownContainer>}
    </Container>
  )
}

export default DropDownList
