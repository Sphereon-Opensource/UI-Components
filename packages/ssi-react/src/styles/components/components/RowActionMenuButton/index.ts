import styled from 'styled-components'

export const RowActionMenuButtonContainerStyled = styled.div`
  position: relative;
`

export const ActionItemContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  max-width: 250px;
`

export const ActionItemCaptionStyled = styled.span`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`

export const RowActionDropdownContainerStyled = styled.div`
  position: absolute;
  z-index: 1000;
  background-color: #fff;
  width: auto;
  padding: 10px;
  background: #fbfbfb;
  border-radius: 0px 0px 6px 6px;
`
