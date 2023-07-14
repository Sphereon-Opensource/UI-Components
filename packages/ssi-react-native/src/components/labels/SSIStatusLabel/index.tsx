import React, {FC, ReactElement} from 'react'
import {ColorValue, ViewStyle} from 'react-native'

import {CredentialStatus, IssuerStatus, LabelStatus, statusColors, getStatusTranslation} from '@sphereon/ui-components.core'
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
      throw new Error(`${status} not yet implemented`) // TODO we are missing this in the design
    default:
      throw new Error(`${status} not supported`)
  }
}

export default SSIStatusLabel
