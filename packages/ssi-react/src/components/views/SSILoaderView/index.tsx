import {FC, useEffect} from "react";

import {
  SSIBasicHorizontalCenterContainerStyled as Container,
  SSILoadingScreenActivityCaptionStyled as ActivityCaption,
  SSILoadingScreenActivityIndicatorContainerStyled as ActivityIndicatorContainer,
} from '../../../styles/components';
import {Oval} from "react-loader-spinner";

interface SSILoaderScreenProps {
  ariaLabel?: string
  height?: number
  primaryColor?: string
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

export const SSILoaderView = (props: SSILoaderScreenProps): JSX.Element => {
  useEffect(() => {
    setTimeout(async (state?: any): Promise<void> => {
      await props.callback(state)
    }, props.timeout ?? 0)
  })

  return (
      <Container>
        <ActivityIndicatorContainer>
          <Oval {...props}/>
        </ActivityIndicatorContainer>
        <ActivityCaption>{props.message}</ActivityCaption>
      </Container>
  )
}

export default SSILoaderView
