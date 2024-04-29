import {borderColors, fontColors} from '@sphereon/ui-components.core'
import styled from 'styled-components'
import {SSITextH2Css} from '../../../css'

export const TextFieldInputContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`

export const TextFieldInputInputStyled = styled.input`
  ${SSITextH2Css};
  color: ${fontColors.dark};
  display: flex;
  padding: 12px 16px;
  align-items: center;
  border-radius: 4px;
  border: 1px solid ${borderColors.lightGrey};
  outline: none;
  background-color: unset;
  font-family: Poppins, serif;

  &:focus {
    border-color: ${borderColors.purple};
  }

  &:hover {
    border-color: ${borderColors.purple};
  }
`
