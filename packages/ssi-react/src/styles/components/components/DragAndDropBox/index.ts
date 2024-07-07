import {backgroundColors, borderColors, fontColors} from '@sphereon/ui-components.core'
import styled from 'styled-components'
import {SSITextH7RegularStyled} from '../../../fonts'

export const DragAndDropBoxContainerStyled = styled.div`
  background-color: ${backgroundColors.lightGrey};
  flex-grow: 1;
  height: 138px;
  cursor: pointer;
  border: 1px dashed ${borderColors.lightGrey};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const DragAndDropBoxHiddenInputStyled = styled.input`
  display: none;
`

export const DragAndDropBoxCaptionContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const DragAndDropBoxDescriptionStyled = styled(SSITextH7RegularStyled)`
  color: ${fontColors.lightGrey};
`
