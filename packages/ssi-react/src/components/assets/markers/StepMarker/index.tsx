import React, {FC, ReactElement} from 'react'
import {
  StepMarkerActiveContainerStyled as ActiveContainer,
  StepMarkerActiveOuterContainerStyled as ActiveOuterContainer,
  StepMarkerGradientContainerStyled as GradientContainer,
  SSITextH1SemiBoldLightStyled as StepNumberText,
  StepMarkerInactiveContainerStyled as InactiveContainer,
} from '../../../../styles'
import {StepStatus} from '../../../../types'

type Props = {
  stepNumber: number
  status?: StepStatus
}

const getCurrentMarkerElement = (stepNumber: number) => {
  return (
    <ActiveContainer>
      <ActiveOuterContainer>
        <GradientContainer>
          <StepNumberText>{stepNumber}</StepNumberText>
        </GradientContainer>
      </ActiveOuterContainer>
    </ActiveContainer>
  )
}

const getNextMarkerElement = (stepNumber: number) => {
  return (
    <InactiveContainer>
      <StepNumberText>{stepNumber}</StepNumberText>
    </InactiveContainer>
  )
}

const getCompletedMarkerElement = (stepNumber: number) => {
  return (
    <GradientContainer>
      <StepNumberText>{stepNumber}</StepNumberText>
    </GradientContainer>
  )
}

const StepMarker: FC<Props> = (props: Props): ReactElement => {
  const {stepNumber, status = StepStatus.NEXT} = props

  switch (status) {
    case StepStatus.CURRENT:
      return getCurrentMarkerElement(stepNumber)
    case StepStatus.COMPLETED:
      return getCompletedMarkerElement(stepNumber)
    case StepStatus.NEXT:
      return getNextMarkerElement(stepNumber)
    default:
      return <div />
  }
}

export default StepMarker
