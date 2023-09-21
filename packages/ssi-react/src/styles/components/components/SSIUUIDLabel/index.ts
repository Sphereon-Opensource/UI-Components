import styled from 'styled-components'

export const SSIUUIDFullText = styled.span`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  border: 1px solid #ccc;
  padding: 5px;
  z-index: 1;
`

export const SSIUUIDContainer = styled.div`
  position: relative;

  &:hover ${SSIUUIDFullText} {
    display: block;  // or display: inline;
  }
`

export const SSIDUUIDText = styled.span`
  display: 'inline';
`
