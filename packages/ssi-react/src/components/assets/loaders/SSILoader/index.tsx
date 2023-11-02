import React from 'react'
import {Oval} from 'react-loader-spinner'

interface SSILoaderProps {
  ariaLabel?: string
  width?: string | number
  height?: string | number
  color?: string
  secondaryColor?: string
  strokeWidth?: string | number
  strokeWidthSecondary?: string | number
  visible?: boolean
  wrapperStyle?: {[key: string]: string}
  wrapperClass?: string
  timeout?: number
  callback: (state?: any) => Promise<void>
}

export default class SSILoader extends React.Component<SSILoaderProps, any> {
  componentDidMount() {
    setTimeout(async (state?: any): Promise<void> => {
      await this.props.callback(state)
    }, this.props.timeout ?? 0)
  }

  render() {
    return <Oval {...this.props} />
  }
}
