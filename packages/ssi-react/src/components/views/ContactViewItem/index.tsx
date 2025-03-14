import React, {FC} from 'react'
import {CredentialRole, IImageAttributes} from '@sphereon/ssi-sdk.data-store'
import SSILogo from '../../assets/logos/SSILogo'
import {
  ContactViewItemContactDetailsContainerStyled as ContactDetailsContainer,
  SSITextH3Styled as ContactNameCaption,
  SSITextH4Styled as ContactRolesCaption,
  ContactViewItemContactUriCaptionStyled as ContactUriCaption,
  ContactViewItemContainerStyled as Container,
  ContactViewItemLogoContainerStyled as LogoContainer,
  ContactViewItemNewStatusContainerStyled as StatusContainer,
} from '../../../styles'
import {fontColors} from '@sphereon/ui-components.core'

export interface Props {
  name: string
  uri?: string
  logo?: IImageAttributes
  roles: Array<CredentialRole>
}

const ContactViewItem: FC<Props> = (props: Props): JSX.Element => {
  const {name, uri, roles, logo} = props
  return (
    <Container>
      <StatusContainer />
      <LogoContainer>
        <SSILogo logo={logo} color={fontColors.dark} />
      </LogoContainer>
      <div>
        <ContactDetailsContainer>
          <ContactNameCaption>{name}</ContactNameCaption>
          <ContactRolesCaption>{roles.join(', ')}</ContactRolesCaption>
        </ContactDetailsContainer>
        <ContactUriCaption>{uri}</ContactUriCaption>
      </div>
    </Container>
  )
}

export default ContactViewItem
