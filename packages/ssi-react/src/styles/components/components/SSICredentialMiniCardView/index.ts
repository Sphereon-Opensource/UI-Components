import styled from 'styled-components'
import {SSIFlexDirectionColumnViewStyled} from '../../containers'

export const SSICredentialMiniCardViewContainerStyled = styled.div`
  width: 75px;
  height: 50px;
  border-radius: 4.6px;
  overflow: hidden;
  display: flex;
`

export const SSICredentialMiniCardViewBackgroundImageStyled = styled(SSIFlexDirectionColumnViewStyled)`
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`
