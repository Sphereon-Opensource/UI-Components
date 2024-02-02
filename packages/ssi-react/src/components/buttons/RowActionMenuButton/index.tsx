import React, {CSSProperties, FC, ReactElement, useState, useEffect, useRef} from 'react'
import {ButtonIcon} from '@sphereon/ui-components.core'
import {ActionButton, SSIIconButton} from '../../../index'
import {Row} from '@tanstack/react-table'
import {
  RowActionMenuButtonContainerStyled as ButtonContainer,
  RowActionDropdownContainerStyled as DropdownContainer,
  ActionItemContainerStyled as ActionItemContainer,
  ActionItemCaptionStyled as ItemCaption,
} from '../../../styles'

type Props<T> = {
  actions: ActionButton<T>[]
  icon: ButtonIcon
  color?: string
  style?: CSSProperties
  rowData: Row<T>
}

const RowActionMenuButton = <T,>({actions, icon, color, style = {}, rowData}: Props<T>): ReactElement => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownVisible(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropdownRef])

  const toggleDropdown = (event?: React.MouseEvent) => {
    event?.stopPropagation()
    setIsDropdownVisible(!isDropdownVisible)
  }

  const handleActionClick = (action: ActionButton<T>, rowData: Row<T>) => async (event: React.MouseEvent) => {
    event.stopPropagation()
    await action.onClick(rowData)
    setIsDropdownVisible(false)
  }

  const renderDropdown = (): ReactElement => {
    return (
      <DropdownContainer ref={dropdownRef} style={{display: isDropdownVisible ? 'block' : 'none'}}>
        {actions.map((action, index) => (
          <ActionItemContainer key={index} onClick={handleActionClick(action, rowData)}>
            <ItemCaption>{action.caption}</ItemCaption>
            {action.icon && <SSIIconButton onClick={handleActionClick(action, rowData)} icon={action.icon} />}
          </ActionItemContainer>
        ))}
      </DropdownContainer>
    )
  }

  return (
    <ButtonContainer style={{...style}}>
      <SSIIconButton icon={icon || ButtonIcon.BITTERBALLEN} color={color} onClick={toggleDropdown} />
      {renderDropdown()}
    </ButtonContainer>
  )
}

export default RowActionMenuButton
