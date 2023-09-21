import styled from 'styled-components'

export const SSITruncatedFullTextStyled = styled.span`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  border: 1px solid #ccc;
  padding: 5px;
  z-index: 1;
`

export const SSITruncatedContainerStyled = styled.div`
  position: relative;

  &:hover ${SSITruncatedFullTextStyled} {
    display: block;
  }
`

export const SSITruncatedTextStyled = styled.span`
  display: 'inline';
`
