import styled from 'styled-components'
import {alertColors} from '@sphereon/ui-components.core'
import {SSIFlexDirectionRowViewStyled, SSIRoundedContainerStyled} from '../../containers/index.js'
import {SSITextH4DarkStyled} from '../../../fonts/index.js'

export const SSIToastContainerStyled = styled(SSIRoundedContainerStyled)`
  //TODO we need better width, use a max width and use content to scale
  // 96.8%;
  width: 326px;
  background-color: ${alertColors.secondaryLight};
  border-radius: 8px;
  justify-content: center;
  padding: 18px 18px 15px 18px;
`

export const SSIToastBadgeContainerStyled = styled.div`
  margin-right: 10px;
  justify-content: center;
`

export const SSIToastTitleContainerStyled = styled(SSIFlexDirectionRowViewStyled)`
  margin-bottom: 12px;
  width: 100%;
`

export const SSIToastMessageTextStyled = styled(SSITextH4DarkStyled)`
  width: 100%;
`
