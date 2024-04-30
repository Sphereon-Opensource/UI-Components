import styled from 'styled-components'
import {SSIFlexDirectionRowViewStyled} from '../../containers'
import {backgroundColors} from '@sphereon/ui-components.core'

export const SSITableViewHeaderContainerStyled = styled.div`
  background-color: ${backgroundColors.primaryLight};
  display: flex;
`

export const SSITableViewHeaderContentContainerStyled = styled.div`
  height: 48px;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 24px;
`

export const SSITableViewHeaderActionsContainerStyled = styled(SSIFlexDirectionRowViewStyled)`
  height: 32px;
  gap: 50px;
`

export const SSITableViewHeaderFilterContainerStyled = styled(SSIFlexDirectionRowViewStyled)`
  height: 32px;
  align-items: center;
  gap: 8px;
`

export const SSITableViewHeaderShowOptionContainerStyled = styled.div`
  display: flex;
  text-align: left;
  align-items: center;
`

export const TableViewHeaderStaticActionsContainerStyled = styled.div`
  height: 48px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`
