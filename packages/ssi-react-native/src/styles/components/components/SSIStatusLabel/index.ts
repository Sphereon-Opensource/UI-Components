// @ts-ignore
import styled from 'styled-components/native'

import {SSIFlexDirectionRowViewStyled} from '../../containers'
import {SSITextH5LightStyled} from '../../../fonts'

export const SSIStatusLabelContainerStyled = styled(SSIFlexDirectionRowViewStyled)`
  border-radius: 9px;
  border-width: 1px;
  /*
    React-Native does not have a width: fit-content property to fix this like in the web version,
    so we need to set align-self to something other than stretch to make the container fit the content
    when the parent has a flex-grow: 1 CSS property set  
   */
  align-self: baseline;
`

export const SSIStatusLabelStatusCaptionStyled = styled(SSITextH5LightStyled)`
  margin-left: 7px;
  margin-right: 7px;
`

export const SSIStatusLabelBadgeContainer = styled.View`
  margin-top: auto;
  margin-bottom: auto;
`
