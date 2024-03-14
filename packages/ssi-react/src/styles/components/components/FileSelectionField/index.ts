import styled from 'styled-components'
import {borderColors, fontColors} from '@sphereon/ui-components.core'
import {SSITextH2SemiBoldDarkStyled, SSITextH7RegularStyled} from '../../../fonts';

export const FileSelectionFieldContainerStyled = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  border-radius: 6px;
  border: 1px solid ${borderColors.lightGrey};
  overflow: hidden;
`

export const FileSelectionFieldContentContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px 0 5px 8px;
`

export const FileSelectionFieldRemoveContainerStyled = styled.div`
  margin-left: auto;
  border-left: 1px solid ${borderColors.lightGrey};
  display: flex;
  align-items: center;
`

export const FileSelectionFieldRemoveButtonStyled = styled.div`
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const FileSelectionFieldRemoveButtonCircleIconStyled = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${borderColors.darkGrey};
  border-radius: 50%;
`

export const FileSelectionFieldIconContainerStyled = styled.div`
  margin-right: 12px;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FileSelectionFieldFileDataContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`

export const FileSelectionFieldFileNameCaptionStyled = styled(SSITextH2SemiBoldDarkStyled)`
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 350px;
`

export const FileSelectionFieldFileSizeCaptionStyled = styled(SSITextH7RegularStyled)`
  color: ${fontColors.lightGrey};
`

export const FileSelectionFieldPermissionSelectionContainerStyled = styled.div`
  width: 152px;
  margin-left: auto;
  margin-right: 5px;
`
