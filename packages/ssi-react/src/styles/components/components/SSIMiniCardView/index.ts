import styled from 'styled-components';
import {SSIFlexDirectionColumnViewStyled} from "../../containers";

export const SSIMiniCardViewContainerStyled = styled.div`
  width: 75px;
  height: 50px;
  border-radius: 4.6px;
  overflow: hidden;
  display: flex;
`

export const SSIMiniCardViewBackgroundImageStyled = styled(SSIFlexDirectionColumnViewStyled)`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`
