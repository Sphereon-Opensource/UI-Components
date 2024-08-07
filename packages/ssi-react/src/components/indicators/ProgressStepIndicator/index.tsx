import React, {CSSProperties, FC, ReactElement} from 'react'
import {elementColors, fontColors, Localization} from '@sphereon/ui-components.core'
import StepMarker from '../../assets/markers/StepMarker'
import {gradientColors} from '../../../styles/colors'
import {
  ProgressStepIndicatorContainerStyled as Container,
  ProgressStepIndicatorContentGridContainerStyled as GridContainer,
  ProgressStepIndicatorStepMarkerCellStyled as StepMarkerCell,
  ProgressStepIndicatorStepLineStyled as StepLine,
  ProgressStepIndicatorStepTextCellStyled as StepTextCell,
  ProgressStepIndicatorTitleTextStyled as TitleText,
  ProgressStepIndicatorDescriptionTextStyled as DescriptionText,
  ProgressStepIndicatorOptionalTextStyled as OptionalText,
  ProgressStepIndicatorSpacerLineCellStyled as SpacerLineCell,
} from '../../../styles'
import {ProgressIndicatorStep, StepStatus} from '../../../types'

type Props = {
  steps: Array<ProgressIndicatorStep>
  activeStep: number
  style?: CSSProperties
}

const getStepRowElement = (stepNumber: number, status: StepStatus, step: ProgressIndicatorStep, maxSteps: number) => {
  const {title, description, required = true} = step
  // we calculate the row, because we are also adding rows for spacing between the step items
  const gridRowNumber: number = stepNumber * 2 - 1

  return (
    <>
      <StepMarkerCell style={{gridRow: gridRowNumber}}>
        <StepMarker stepNumber={stepNumber} status={status} />
        {stepNumber < maxSteps && (
          <StepLine
            style={{
              ...(status === StepStatus.COMPLETED && {
                // FIXME in the design this is a linear gradient but because of the grid it interrupts the gradient in the line
                backgroundColor: elementColors.purple,
              }),
            }}
          />
        )}
      </StepMarkerCell>
      <StepTextCell style={{gridRow: gridRowNumber}}>
        {title && (
          <TitleText
            style={{
              ...(status === StepStatus.CURRENT && {
                // FIXME would be nice if we could use gradient100TextCss here
                background: gradientColors['100'],
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }),
              ...(status === StepStatus.COMPLETED && {color: fontColors.dark}),
              ...(status === StepStatus.NEXT && {color: fontColors.lightGrey}),
            }}>
            <div>{title}</div>
            {!required && <OptionalText>{Localization.translate('optional_label')}</OptionalText>}
          </TitleText>
        )}
        {description && (
          <DescriptionText style={{...((status === StepStatus.CURRENT || status === StepStatus.COMPLETED) && {color: fontColors.dark})}}>
            {description}
          </DescriptionText>
        )}
      </StepTextCell>
      {stepNumber < maxSteps && (
        <SpacerLineCell style={{gridRow: gridRowNumber + 1}}>
          <StepLine
            style={{
              ...(status === StepStatus.COMPLETED && {
                // FIXME in the design this is a linear gradient but because of the grid it interrupts the gradient in the line
                backgroundColor: elementColors.purple,
              }),
            }}
          />
        </SpacerLineCell>
      )}
    </>
  )
}

const getStepStatus = (stepNumber: number, activeStep: number): StepStatus => {
  if (stepNumber < activeStep) {
    return StepStatus.COMPLETED
  } else if (stepNumber > activeStep) {
    return StepStatus.NEXT
  } else if (stepNumber === activeStep) {
    return StepStatus.CURRENT
  }

  throw new Error('Unable to determine step status')
}

const getStepElements = (activeStep: number, steps: Array<ProgressIndicatorStep>) => {
  return steps.map((step: ProgressIndicatorStep, index: number) => {
    const stepNumber: number = index + 1
    const stepStatus: StepStatus = getStepStatus(stepNumber, activeStep)
    return getStepRowElement(stepNumber, stepStatus, step, steps.length)
  })
}

const ProgressStepIndicator: FC<Props> = (props: Props): ReactElement => {
  const {activeStep, steps = [], style} = props

  return (
    <Container style={style}>
      <GridContainer>{getStepElements(activeStep, steps)}</GridContainer>
    </Container>
  )
}

export default ProgressStepIndicator
