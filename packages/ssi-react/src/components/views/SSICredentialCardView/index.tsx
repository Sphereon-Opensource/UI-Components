import React, { FC, ReactElement } from 'react'
import {
  CredentialStatus,
  ImageAttributes,
  backgroundColors,
  credentialCardColors,
  Localization,
  toLocalDateString
} from '@sphereon/ui-components.core'
import SSILogo from '../../assets/logos/SSILogo'
import SSIStatusLabel from '../../labels/SSIStatusLabel'
import {
  SSIAlphaContainerStyled as AlphaContainer,
  SSICredentialCardViewContainerStyled as Container,
  SSICredentialCardViewBackgroundImageStyled as BackgroundImage,
  SSICredentialCardViewContentMainContainerStyled as ContentMainContainer,
  SSICredentialCardViewContentSubContainerStyled as ContentSubContainer,
  SSICredentialCardViewStatusContainerStyled as StatusContainer,
  SSICredentialCardViewCredentialSubtitleTextStyled as CredentialSubtitleText,
  SSICredentialCardViewCredentialTitleTextStyled as CredentialTitleText,
  SSITextH5LightStyled as ExpirationDateText,
  SSICredentialCardViewFooterContainerStyled as FooterContainer,
  SSITextH4LightStyled as H4Text,
  SSICredentialCardViewHeaderContainerStyled as HeaderContainer,
  SSICredentialCardViewContentIssueNameContainerStyled as IssueNameContainer,
  SSICredentialCardViewHeaderLogoContainerStyled as LogoContainer,
  SSICredentialCardViewContentPropertiesContainerStyled as PropertiesContainer,
  SSITextH6LightStyled as PropertyValueText,
  SSICredentialCardViewHeaderTitleContainerStyled as TitleContainer,
  SSIFlexDirectionColumnViewStyled as PropertyContainer,
} from '../../../styles/components'

type CardProperty = {
  name: string
  value: string
}

type CardHeader = {
  credentialTitle?: string
  credentialSubtitle?: string
  logo?: ImageAttributes
}

type CardBody = {
  issuerName?: string
  properties?: Array<CardProperty>
}

type CardFooter = {
  expirationDate?: number
  credentialStatus?: CredentialStatus
}

type CardDisplay = {
  backgroundColor?: string
  backgroundImage?: ImageAttributes
  textColor?: string
}

type Props = {
  header?: CardHeader
  body?: CardBody
  footer?: CardFooter
  display?: CardDisplay
}

const SSICredentialCardView: FC<Props> = (props: Props): ReactElement => {
  const {header, body, footer} = props
  const {credentialTitle, credentialSubtitle, logo} = props.header ?? {}
  const {issuerName, properties} = props.body ?? {}
  const {credentialStatus, expirationDate} = props.footer ?? {}
  const {backgroundColor = credentialCardColors.default, backgroundImage, textColor = backgroundColors.primaryLight} = props.display ?? {}

  const getPropertyElementsFrom = (properties: Array<CardProperty>): Array<ReactElement> => {
    // We currently only support two properties on the card, this might change in the future
    return properties.slice(0, 2).map((property: CardProperty, index: number) => (
      <PropertyContainer
        key={index}
        style={{
          ...(properties.length > 1 && {width: 140}),
          ...(index > 0 && {marginLeft: 10}),
        }}>
        <H4Text style={{color: textColor}}>{property.name}</H4Text>
        <PropertyValueText style={{color: textColor}}>{property.value}</PropertyValueText>
      </PropertyContainer>
    ))
  }

  return (
    <Container style={{backgroundColor}}>
      <BackgroundImage
        style={{
          // FIXME Putting backgroundSize here as for some reason putting this on the styled component does not work
          ...(backgroundImage?.uri && {background: `url(${backgroundImage.uri})`, backgroundSize: 'cover'}),
        }}>
        <AlphaContainer>
          {header && (
            <HeaderContainer>
              <LogoContainer>
                <SSILogo logo={logo} color={textColor} />
              </LogoContainer>
              {credentialTitle && (
                <TitleContainer>
                  <CredentialTitleText style={{color: textColor}}>{credentialTitle}</CredentialTitleText>
                  {credentialSubtitle && <CredentialSubtitleText style={{color: textColor}}>{credentialSubtitle}</CredentialSubtitleText>}
                </TitleContainer>
              )}
            </HeaderContainer>
          )}
          {body && (
            <ContentMainContainer>
              <ContentSubContainer>
                {issuerName && (
                  <IssueNameContainer>
                    <H4Text style={{color: textColor}}>{issuerName}</H4Text>
                  </IssueNameContainer>
                )}
                {properties && <PropertiesContainer>{getPropertyElementsFrom(properties)}</PropertiesContainer>}
              </ContentSubContainer>
            </ContentMainContainer>
          )}
          {footer && (
            <FooterContainer>
              <ExpirationDateText style={{color: textColor}}>
                {expirationDate
                  ? `${Localization.translate('credential_card_expires_message')} ${toLocalDateString(expirationDate)}`
                  : Localization.translate('credential_status_never_expires_date_label')}
              </ExpirationDateText>
              {credentialStatus && (
                <StatusContainer>
                  {credentialStatus && <SSIStatusLabel status={credentialStatus} color={textColor} />}
                </StatusContainer>
              )}
            </FooterContainer>
          )}
        </AlphaContainer>
      </BackgroundImage>
    </Container>
  )
}

export default SSICredentialCardView
