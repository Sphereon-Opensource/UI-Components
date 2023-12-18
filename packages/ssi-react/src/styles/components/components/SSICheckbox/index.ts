import styled from 'styled-components'
import {SSITextH4LightStyled} from '../../../fonts'
import {SSIFlexDirectionRowViewStyled} from '../../containers'

export const SSICheckboxContainerStyled = styled(SSIFlexDirectionRowViewStyled)`
  align-items: center;
  gap: 10px;
  cursor: pointer;
`

export const SSICheckboxUnselectedContainerStyled = styled.div`
  width: 18px;
  aspect-ratio: 1;
  border-radius: 4px;
  border-width: 1px;
`

export const SSICheckboxSelectedContainerStyled = styled.div`
  width: 18px;
  aspect-ratio: 1;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`

// TODO this might be a solution for more text wrapping issues
export const SSICheckboxLabelContainerStyled = styled(SSITextH4LightStyled)`
  display: flex;
  flex-wrap: wrap;
`
