import React, {FC, ReactElement} from 'react'
import {CredentialStatus, ImageAttributes, Localization} from '@sphereon/ui-components.core'
import {
  InformationRequestViewCardSubtitle as CardSubtitle,
  InformationRequestViewCardTextContainer as CardTextContainer,
  InformationRequestViewCardTitle as CardTitle,
  InformationRequestViewContainerStyled as Container,
  InformationRequestViewContentContainerStyled as ContentContainer,
  InformationRequestViewDescriptionStyled,
  InformationRequestViewRPCardContainerStyled as RPCardContainer,
  InformationRequestViewFormContainerStyled as FormContainer,
  InformationRequestViewFormTitleStyled as FormTitle,
  InformationRequestViewLogoContainerStyled as LogoContainer,
  InformationRequestViewPurposeContainerStyled as PurposeContainer,
  InformationRequestViewPurposeTitleStyled as PurposeTitle,
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
        <PurposeContainer>
          <PurposeTitle>{Localization.translate('information_request_title')}</PurposeTitle>
          <InformationRequestViewDescriptionStyled>{purpose}</InformationRequestViewDescriptionStyled>
        </PurposeContainer>
        <FormContainer>
          <FormTitle>{Localization.translate('information_request_form_label')}</FormTitle>
          <InformationRequestViewDescriptionStyled>{Localization.translate('information_request_interacting_with', {
            partyName: relyingPartyName,
          })}
          </InformationRequestViewDescriptionStyled>

          <RPCardContainer>
            <LogoContainer>
              <SSILogo logo={logo} color={textColor ?? '#000'} />
            </LogoContainer>
            <CardTextContainer>
              <CardTitle>{Localization.translate('information_request_relying_party_name_label')}</CardTitle>
              <CardSubtitle>{relyingPartyName}</CardSubtitle>
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
