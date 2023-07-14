import styled from 'styled-components'

import {SSIFlexDirectionRowViewStyled} from '../../containers'
import {SSITextH5LightStyled} from '../../fonts'

export const SSIStatusLabelContainerStyled = styled(SSIFlexDirectionRowViewStyled)`
  border-radius: 9px;
  border: 1px solid #000;
`

export const SSIStatusLabelStatusCaptionStyled = styled(SSITextH5LightStyled)`
  margin-left: 7px;
  margin-right: 7px;
`

export const SSIStatusLabelBadgeContainer = styled.div`
  margin-top: auto;
  margin-bottom: auto;
`
