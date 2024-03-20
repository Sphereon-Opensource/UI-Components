import React, {FC, ReactElement} from 'react'
import {ToastType} from '@sphereon/ui-components.core'
import SSICheckmarkBadge from '../../../assets/badges/SSICheckmarkBadge/index.js'
import SSIExclamationMarkBadge from '../../../assets/badges/SSIExclamationMarkBadge/index.js'
import {
  SSIToastContainerStyled as Container,
  SSIToastMessageTextStyled as MessageText,
  SSIFlexDirectionRowViewStyled as MessageContainer,
  SSITextH2SemiBoldStyled as TitleText,
  SSIToastTitleContainerStyled as TitleContainer,
  SSIToastBadgeContainerStyled as ToastBadgeContainer,
} from '../../../../styles/index.js'

type Props = {
  type: ToastType
  title?: string
  message?: string
  showBadge?: boolean
  onClick?: () => Promise<void>
}

const getBadge = (type: ToastType): ReactElement => {
  switch (type) {
    case ToastType.SUCCESS:
      return <SSICheckmarkBadge />
    case ToastType.ERROR:
      return <SSIExclamationMarkBadge />
    default:
      return <div />
  }
}

const SSIToast: FC<Props> = (props: Props): ReactElement => {
  const {type, title, message, showBadge = true, onClick} = props

  return (
    <Container onClick={onClick}>
      {title && (
        <TitleContainer>
          {showBadge && <ToastBadgeContainer>{getBadge(type)}</ToastBadgeContainer>}
          <TitleText>{title}</TitleText>
        </TitleContainer>
      )}
      <MessageContainer>
        {!title && showBadge && <ToastBadgeContainer>{getBadge(type)}</ToastBadgeContainer>}
        {message && <MessageText style={{...(showBadge && {textAlign: 'center'})}}>{message}</MessageText>}
      </MessageContainer>
    </Container>
  )
}

export default SSIToast
