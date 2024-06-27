import React, {FC, ReactElement} from 'react'
import {CredentialStatus, ImageAttributes, Localization} from '@sphereon/ui-components.core'
import {
  InformationRequestViewCardSubtitle as CardSubtitle,
  InformationRequestViewCardTextContainer as CardTextContainer,
  InformationRequestViewCardTitle as CardTitle,
  InformationRequestViewContainerStyled as Container,
  InformationRequestViewContentContainerStyled as ContentContainer,
  InformationRequestViewDescriptionStyled as Description,
  InformationRequestViewFormContainerStyled as FormContainer,
  InformationRequestViewFormContainerStyled as PurposeContainer,
  InformationRequestViewHeaderContainerStyled as HeaderContainer,
  InformationRequestViewLogoContainerStyled as LogoContainer,
  InformationRequestViewRPCardContainerStyled as RPCardContainer,
  InformationRequestViewTitleStyled as HeaderTitle,
  InformationRequestViewParagraphStyled as PurposeTitle,
  InformationRequestViewParagraphStyled as FormTitle,
} from '../../../styles/components'
import SSIStatusLabel from '../../labels/SSIStatusLabel'
import SSILogo from '../../assets/logos/SSILogo'

type Props = {
  relyingPartyName: string;
  purpose: string;
  credentialStatus: CredentialStatus;
  credentialTitle?: string
  credentialSubtitle?: string
  uri?: string;
  logo?: ImageAttributes
  textColor?: string
};

const InformationRequestView: FC<Props> = (args: Props): ReactElement => {
  const {
    relyingPartyName,
    purpose,
    uri,
    credentialStatus,
    logo,
    textColor,
  } = args

  return (
    <Container>
      <ContentContainer>
        <HeaderContainer>
          <HeaderTitle>{Localization.translate('information_request_title')}</HeaderTitle>
          <Description>{Localization.translate('information_request_header_description', {
            partyName: relyingPartyName,
          })}</Description>
        </HeaderContainer>
        <PurposeContainer>
          <PurposeTitle>{Localization.translate('information_request_purpose_label')}</PurposeTitle>
          <Description>{purpose}</Description>
        </PurposeContainer>
        <FormContainer>
          <FormTitle>{Localization.translate('information_request_form_label')}</FormTitle>
          <Description>{Localization.translate('information_request_interacting_with', {
            partyName: relyingPartyName,
          })}
          </Description>

          <RPCardContainer>
            <LogoContainer>
              <SSILogo logo={logo} color={textColor ?? '#000'} />
            </LogoContainer>
            <CardTextContainer>
              <CardTitle>{relyingPartyName}</CardTitle>
              <CardSubtitle>Verifier</CardSubtitle>
              {uri && (
                <CardSubtitle>{uri}</CardSubtitle>
              )
              }
            </CardTextContainer>
            <SSIStatusLabel status={credentialStatus} />
          </RPCardContainer>
        </FormContainer>
      </ContentContainer>
    </Container>
  )
}

export default InformationRequestView
