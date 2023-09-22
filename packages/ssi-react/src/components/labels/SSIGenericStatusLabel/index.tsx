import React, {CSSProperties, FC, ReactElement} from "react";
import {
  SSIStatusLabelBadgeContainer as BadgeContainer,
  SSIStatusLabelContainerStyled as Container,
  SSIStatusLabelStatusCaptionStyled as StatusCaption
} from "../../../styles/components";

export type StatusLabelProps = {
  status: string
  showIcon?: boolean
  textColorMapping: Map<string, string>
  style?: CSSProperties
  getStatusBadge?: (status: string, backgroundColor?: string) => ReactElement
  getStatusTranslation?: (status: string) => string
}

const SSIGenericStatusLabel: FC<StatusLabelProps> = (props: StatusLabelProps): ReactElement => {
  const {getStatusBadge, getStatusTranslation, status, textColorMapping, style, showIcon = false} = props
  const color: string = textColorMapping?.has(status) ? textColorMapping.get(status) : 'black'
  return (
      <Container style={{...style, borderColor: color }}>
        {showIcon && getStatusBadge && <BadgeContainer>{getStatusBadge(status, color)}</BadgeContainer>}
        <StatusCaption style={{color}}>{getStatusTranslation ? getStatusTranslation(status) : status}</StatusCaption>
      </Container>
  )
}

export default SSIGenericStatusLabel