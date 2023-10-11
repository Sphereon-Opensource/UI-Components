import styled from 'styled-components/native'
import FastImage from 'react-native-fast-image';
import { SSIFlexDirectionRowViewStyled, SSIRoundedContainerStyled } from '../../containers'
import { SSITextH4SemiBoldLightStyled, SSITextH5LightStyled } from '../../fonts'

export const SSICredentialCardViewContainerStyled = styled(SSIRoundedContainerStyled)`
  width: 327px;
  height: 186px;
`

export const SSICredentialCardViewHeaderContainerStyled = styled(SSIFlexDirectionRowViewStyled)`
  height: 32px;
  margin-top: 16px;
`

export const SSICredentialCardViewHeaderLogoContainerStyled = styled.View`
  margin: 0 12px 0 9px;
`

export const SSICredentialCardViewHeaderTitleContainerStyled = styled.View`
  flex: 1;
  margin: 0 13px 0 auto;
`

export const SSICredentialCardViewContentMainContainerStyled = styled.View`
  flex: 1;
`

export const SSICredentialCardViewContentSubContainerStyled = styled.View`
  margin-top: auto;
`

export const SSICredentialCardViewContentIssueNameContainerStyled = styled.View`
  padding: 2px 9px 2px 12px;
`

export const SSICredentialCardViewContentPropertiesContainerStyled = styled(SSIFlexDirectionRowViewStyled)`
  justify-content: flex-start;
  margin: 1px 0;
  padding: 2px 9px 4px 12px;
`

// FIXME Padding hacking to fix an issue with BlurView that messes up the positions on load doing it the normal way
// FIXME background-color: transparent, needs to be added or the positions are getting messed up
export const SSICredentialCardViewFooterContentContainerStyled = styled(SSIFlexDirectionRowViewStyled)`
  padding: 11px 12px;
  background-color: transparent;
`

// FIXME overflow: 'hidden' added to stop the BlurView from expanding
export const SSICredentialCardViewFooterContainerStyled = styled.View`
  height: 39px;
  margin-top: auto;
  overflow: hidden;
`

export const SSICredentialCardViewCredentialTitleTextStyled = styled(SSITextH4SemiBoldLightStyled)`
  flex: 1;
  text-align: right;
`

export const SSICredentialCardViewCredentialSubtitleTextStyled = styled(SSITextH5LightStyled)`
  text-align: right;
`

export const SSICredentialCardViewStatusContainerStyled = styled.View`
  margin-left: auto;
`

export const SSICredentialCardViewBackgroundImageStyled = styled(FastImage).attrs({
    resizeMode: 'cover',
})`
  flex: 1;
`;
