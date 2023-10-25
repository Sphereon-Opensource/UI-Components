import React from "react";

import {
  SSIBasicHorizontalCenterContainerStyled as Container,
  SSILoadingScreenActivityCaptionStyled as ActivityCaption,
  SSILoadingScreenActivityIndicatorContainerStyled as ActivityIndicatorContainer
} from '../../../styles/components';
import {Oval} from "react-loader-spinner";

interface SSILoaderScreenProps {
  ariaLabel?: string
  height?: number
  color?: string
  secondaryColor?: string
  strokeWidth?: number
  strokeWidthSecondary?: number
  timeout?: number
  visible?: boolean
  width?: number
  wrapperStyle?: { [key: string]: string }
  wrapperClass?: string
  message?: string
  callback: (state?: any) => Promise<void>
}

export default class SSILoaderView extends React.Component<SSILoaderScreenProps, any> {

  componentDidMount() {
    setTimeout(async (state?: any): Promise<void> => {
      await this.props.callback(state)
    }, this.props.timeout ?? 0)
  }

  render() {
    return (
        <>
        <Container>
          <ActivityIndicatorContainer>
            <Oval {...this.props} />
          </ActivityIndicatorContainer>
          <ActivityCaption>{this.props.message}</ActivityCaption>
        </Container>
        </>
    )
  }
}
