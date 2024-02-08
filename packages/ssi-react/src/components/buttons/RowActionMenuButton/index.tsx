import React, {CSSProperties, FC, ReactElement, useState, useEffect, useRef} from 'react'
import {ButtonIcon} from '@sphereon/ui-components.core'
import {TableColumnActionButton, SSIIconButton, DropDownList} from '../../../index'
import {Row} from '@tanstack/react-table'
import {RowActionMenuButtonContainerStyled as ButtonContainer} from '../../../styles'

type Props = {
  actions: Array<TableColumnActionButton>
  rowData: Row<any>
  icon?: ButtonIcon
  color?: string
  style?: CSSProperties
}

const RowActionMenuButton = (props: Props): ReactElement => {
  const {actions, icon = ButtonIcon.MEATBALLS, color, style = {}} = props
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownVisible(false)
      }
    }

    document.addEventListener('mousedown', onClickOutside)
    return () => {
      document.removeEventListener('mousedown', onClickOutside)
    }
  }, [dropdownRef])

  const toggleDropdown = (event?: React.MouseEvent) => {
    event?.stopPropagation()
    setIsDropdownVisible(!isDropdownVisible)
  }

  const onActionClick = (action: TableColumnActionButton, rowData: Row<any>) => async (event: React.MouseEvent) => {
    event.stopPropagation()
    await action.onClick(rowData)
    setIsDropdownVisible(false)
  }

  return (
    <ButtonContainer style={{...style}}>
      <SSIIconButton icon={icon} color={color} onClick={toggleDropdown} />
      <DropDownList buttons={actions} />
    </ButtonContainer>
  )
}

export default RowActionMenuButton
