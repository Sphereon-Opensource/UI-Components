import styled from 'styled-components'

import {SSIFlexDirectionRowViewStyled} from '../../containers/index.js'
import {SSITextH5LightStyled} from '../../../fonts/index.js'

export const SSIStatusLabelContainerStyled = styled(SSIFlexDirectionRowViewStyled)`
  border-radius: 9px;
  border: 1px solid #000;
  width: fit-content;
`

export const SSIStatusLabelStatusCaptionStyled = styled(SSITextH5LightStyled)`
  margin-left: 7px;
  margin-right: 7px;
`

export const SSIStatusLabelBadgeContainer = styled.div`
  margin-top: auto;
  margin-bottom: auto;
`
