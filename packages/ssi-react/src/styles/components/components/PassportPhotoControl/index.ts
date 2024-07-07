import styled from 'styled-components'
import {backgroundColors, borderColors} from '@sphereon/ui-components.core'

export const PassportPhotoControlContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const PassportPhotoControlDragAndDropBoxContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

export const PassportPhotoControlPassportPhotoContainerStyled = styled.div`
  height: 138px;
  width: 112px;
  background-color: ${backgroundColors.lightGrey};
  overflow: hidden;
  border-radius: 4px;
  border: 1px solid ${borderColors.lightGrey};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PassportPhotoControlPassportPhotoImageStyled = styled.img`
  width: 100%;
  height: auto;
`
