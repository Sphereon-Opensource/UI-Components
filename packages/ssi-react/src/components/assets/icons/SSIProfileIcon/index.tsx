import React, {FC, ReactElement} from 'react'
import {fontColors, getInitials, profileColors} from '@sphereon/ui-components.core'
import {SSIProfileIconContainerStyled as Container, SSITextH2Styled as ProfileIconText} from '../../../../styles'

type Props = {
  fullName: string
  fontColor?: string
  backgroundColor?: string
}

const ProfileIcon: FC<Props> = (props: Props): ReactElement => {
  const {fontColor = fontColors.light, backgroundColor = profileColors['100'], fullName} = props

  return (
    <Container style={{backgroundColor}}>
      <ProfileIconText style={{color: fontColor}}>{getInitials(fullName)}</ProfileIconText>
    </Container>
  )
}

export default ProfileIcon
