import styled from 'styled-components'
import {SSIFlexDirectionRowViewStyled} from '../../containers'
import {backgroundColors, fontColors} from "@sphereon/ui-components.core";

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

export const SSITableViewHeaderFilterCaptionStyled = styled.div`
  color: ${fontColors.dark};
`

// TODO remove heights
export const SSITableViewHeaderShowOptionContainerStyled = styled.div`
  height: 32px;
  display: flex;
  text-align: left;
  align-items: center;
`
