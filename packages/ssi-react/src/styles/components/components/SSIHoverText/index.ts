import {styled} from 'styled-components'

export const SSIHoverTextTextHoverStyled = styled.span`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  border: 1px solid #ccc;
  padding: 5px;
  z-index: 1;
`

export const SSIHoverTextContainerStyled = styled.div`
  position: relative;

  &:hover ${SSIHoverTextTextHoverStyled} {
    display: block;
  }
`

export const SSIHoverTextTextStyled = styled.span`
  display: inline;
`
