import {styled} from 'styled-components'
import {backgroundColors, borderColors, elementColors, fontColors} from '@sphereon/ui-components.core'
import {SSITextH1SemiBoldStyled, SSITextH3Styled} from '../../../fonts/index.js'

export const ProgressStepIndicatorContainerStyled = styled.div`
  background-color: ${backgroundColors.primaryLight};
  border-radius: 24px;
  border: 1px solid ${borderColors.light};
  display: flex;
  overflow: hidden;
  padding: 48px 24px;
  cursor: default;
  min-width: 325px;
  height: fit-content;
`

export const ProgressStepIndicatorContentGridContainerStyled = styled.div`
  display: grid;
  grid-column-gap: 24px;
`

export const ProgressStepIndicatorStepMarkerCellStyled = styled.div`
  grid-column: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const ProgressStepIndicatorStepTextCellStyled = styled.div`
  grid-column: 2;
  max-width: 365px;
  text-align: start;
`

// FIXME fix the height issue with height should be maxHeight, as we want it to be able to scale
export const ProgressStepIndicatorSpacerLineCellStyled = styled.div`
  height: 48px;
  grid-column: 1;
  align-items: center;
  display: flex;
  flex-direction: column;
`

export const ProgressStepIndicatorTitleTextStyled = styled(SSITextH1SemiBoldStyled)`
  word-break: break-word;
`

export const ProgressStepIndicatorDescriptionTextStyled = styled(SSITextH3Styled)`
  word-break: break-word;
  color: ${fontColors.lightGrey};
`

export const ProgressStepIndicatorStepLineStyled = styled.div`
  width: 4px;
  display: flex;
  flex-grow: 1;
  background-color: ${elementColors.lightGrey};
`
