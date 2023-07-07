import styled from 'styled-components'

import {SSIFlexDirectionColumnViewStyled, SSIFlexDirectionRowViewStyled, SSIRoundedContainerStyled} from '../../containers'
import {SSITextH4SemiBoldLightStyled, SSITextH5LightStyled} from '../../fonts'

export const SSICardViewContainerStyled = styled(SSIRoundedContainerStyled)`
  width: 327px;
  height: 186px;
  display: flex;
  flex-direction: column;
  user-select: none;
`

export const SSICardViewBackgroundImageStyled = styled(SSIFlexDirectionColumnViewStyled)`
  flex-grow: 1;
`

export const SSICardViewHeaderContainerStyled = styled(SSIFlexDirectionRowViewStyled)`
  height: 32px;
  margin-top: 16px;
`

export const SSICardViewHeaderLogoContainerStyled = styled.div`
  margin-left: 9px;
  margin-right: 12px;
`

export const SSICardViewHeaderTitleContainerStyled = styled.div`
  text-align: end;
  margin: 0px 13px 0px auto;
`

export const SSICardViewContentMainContainerStyled = styled.div`
  display: flex;
  flex-grow: 1;
`

export const SSICardViewContentSubContainerStyled = styled.div`
  margin-top: auto;
`

export const SSICardViewContentIssueNameContainerStyled = styled.div`
  padding: 2px 9px 2px 12px;
`

export const SSICardViewContentPropertiesContainerStyled = styled(SSIFlexDirectionRowViewStyled)`
  justify-content: flex-start;
  margin: 1px 0px 1px 0px;
  padding: 2px 9px 4px 12px;
`

export const SSICardViewFooterContainerStyled = styled(SSIFlexDirectionRowViewStyled)`
  margin-top: auto;
  backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.25);
  padding: 12px;
`

export const SSICardViewCredentialTitleTextStyled = styled(SSITextH4SemiBoldLightStyled)`
  word-break: break-all;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`

export const SSICardViewCredentialSubtitleTextStyled = styled(SSITextH5LightStyled)`
  text-align: right;
`

export const SSICardViewSSICredentialStatusStyled = styled.div`
  margin-left: auto;
`
