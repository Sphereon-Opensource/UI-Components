import styled from 'styled-components'

import {SSIFlexDirectionColumnViewStyled, SSIFlexDirectionRowViewStyled, SSIRoundedContainerStyled} from '../../containers/index.js'
import {SSITextH4SemiBoldLightStyled, SSITextH5LightStyled} from '../../../fonts/index.js'

export const SSICredentialCardViewContainerStyled = styled(SSIRoundedContainerStyled)`
  width: 327px;
  height: 186px;
  display: flex;
  flex-direction: column;
  user-select: none;
  flex-shrink: 0;
`

export const SSICredentialCardViewBackgroundImageStyled = styled(SSIFlexDirectionColumnViewStyled)`
  flex-grow: 1;
`

export const SSICredentialCardViewHeaderContainerStyled = styled(SSIFlexDirectionRowViewStyled)`
  height: 32px;
  margin-top: 16px;
`

export const SSICredentialCardViewHeaderLogoContainerStyled = styled.div`
  margin: 0 12px 0 9px;
`

export const SSICredentialCardViewHeaderTitleContainerStyled = styled.div`
  text-align: end;
  margin: 0 13px 0 auto;
`

export const SSICredentialCardViewContentMainContainerStyled = styled.div`
  display: flex;
  flex-grow: 1;
`

export const SSICredentialCardViewContentSubContainerStyled = styled.div`
  margin-top: auto;
`

export const SSICredentialCardViewContentIssueNameContainerStyled = styled.div`
  padding: 2px 9px 2px 12px;
`

export const SSICredentialCardViewContentPropertiesContainerStyled = styled(SSIFlexDirectionRowViewStyled)`
  justify-content: flex-start;
  margin: 1px 0;
  padding: 2px 9px 4px 12px;
`

export const SSICredentialCardViewFooterContainerStyled = styled(SSIFlexDirectionRowViewStyled)`
  margin-top: auto;
  backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.25);
  padding: 12px;
`

export const SSICredentialCardViewCredentialTitleTextStyled = styled(SSITextH4SemiBoldLightStyled)`
  word-break: break-all;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`

export const SSICredentialCardViewCredentialSubtitleTextStyled = styled(SSITextH5LightStyled)`
  text-align: right;
`

export const SSICredentialCardViewStatusContainerStyled = styled.div`
  margin-left: auto;
`
