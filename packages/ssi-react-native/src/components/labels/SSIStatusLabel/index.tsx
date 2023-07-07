import React, {FC, ReactElement} from 'react'
import {ColorValue, View, ViewStyle} from 'react-native'

import {CredentialStatus, IssuerStatus, LabelStatus, Localization, statusColors} from '@sphereon/ui-components.core'
import {
  SSIStatusLabelBadgeContainer as BadgeContainer,
  SSIStatusLabelContainerStyled as Container,
  SSIStatusLabelStatusCaptionStyled as StatusCaption,
} from '../../../styles/components'
import SSICheckmarkBadge from '../../../components/assets/badges/SSICheckmarkBadge'
import SSIExclamationMarkBadge from '../../../components/assets/badges/SSIExclamationMarkBadge'

type Props = {
  status: LabelStatus
  showIcon?: boolean
  color?: ColorValue
  style?: ViewStyle
}

const SSIStatusLabel: FC<Props> = (props: Props): ReactElement => {
  const {status, color = statusColors[status], style, showIcon = false} = props

  return (
    <Container style={[style, {borderColor: color}]}>
      {showIcon && <BadgeContainer>{getStatusBadge(status, color)}</BadgeContainer>}
      <StatusCaption style={{color}}>{getStatusTranslation(status)}</StatusCaption>
    </Container>
  )
}

const getStatusTranslation = (status: LabelStatus): string => {
  switch (status) {
    case IssuerStatus.VERIFIED:
      return Localization.translate('issuer_status_verified')
    case IssuerStatus.UNVERIFIED:
      return Localization.translate('issuer_status_unverified')
    case CredentialStatus.VALID:
      return Localization.translate('credential_status_valid')
    case CredentialStatus.EXPIRED:
      return Localization.translate('credential_status_expired')
    case CredentialStatus.REVOKED:
      return Localization.translate('credential_status_revoked')
    default:
      return Localization.translate('status_missing')
  }
}

const getStatusBadge = (status: LabelStatus, backgroundColor?: ColorValue): ReactElement => {
  switch (status) {
    case IssuerStatus.VERIFIED:
      return <SSICheckmarkBadge backgroundColor={backgroundColor} />
    case IssuerStatus.UNVERIFIED:
      return <SSIExclamationMarkBadge backgroundColor={backgroundColor} />
    case CredentialStatus.VALID:
      return <SSICheckmarkBadge backgroundColor={backgroundColor} />
    case CredentialStatus.EXPIRED:
      return <SSIExclamationMarkBadge backgroundColor={backgroundColor} />
    case CredentialStatus.REVOKED:
      return <View /> // TODO we are missing this in the design
    default:
      return <View />
  }
}

export default SSIStatusLabel
