import styled from 'styled-components'
import {backgroundColors, elements, gradientColors} from '@sphereon/ui-components.core';

export const StepMarkerActiveContainerStyled = styled.div`
  width: 50px;
  height: 50px;
  background: ${gradientColors[100]};
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StepMarkerActiveOuterContainerStyled = styled.div`
  width: 46px;
  height: 46px;
  background-color: ${backgroundColors.primaryLight};
  border-radius: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StepMarkerGradientContainerStyled = styled.div`
  width: 42px;
  height: 42px;
  background: ${gradientColors["100"]};
  border-radius: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StepMarkerInactiveContainerStyled = styled.div`
  width: 42px;
  height: 42px;
  background-color: ${elements.lightGrey};
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`

