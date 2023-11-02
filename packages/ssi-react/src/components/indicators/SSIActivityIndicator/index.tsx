import React, {FC} from 'react'
import {Oval} from 'react-loader-spinner'
import {elements} from "@sphereon/ui-components.core";

interface Props {
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
}

const SSIActivityIndicator: FC<Props> = (props: Props): React.ReactElement => {
  const defaultProps = {
    ...props,
    width: 80,
    height:80,
    color:elements.blue,
    secondaryColor: elements.blue,
    strokeWidth:5,
    strokeWidthSecondary:5,
    visible:true
  }
  return (
    <Oval {...defaultProps} />
  )
}

export default SSIActivityIndicator
