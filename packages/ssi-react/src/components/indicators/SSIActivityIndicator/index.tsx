import React, {FC} from 'react'

import {elementColors} from '@sphereon/ui-components.core'
/**
 * SyntaxError: Named export 'Oval' not found. The requested module 'react-loader-spinner' is a CommonJS module, which may not support all module.exports as named exports.
 * CommonJS modules can always be imported via the default export, for example using:
 */
import pkg from 'react-loader-spinner';
const { Oval } = pkg;


interface Props {
  size?: string | number
  color?: string
  style?: {[key: string]: string}
}

const SSIActivityIndicator: FC<Props> = (props: Props): React.ReactElement => {
  const {size = 80, color = elementColors.blue, style} = props
  return (
    <Oval
      width={size}
      height={size}
      color={color}
      secondaryColor={color}
      strokeWidth={5}
      strokeWidthSecondary={5}
      visible={true}
      wrapperStyle={style}
    />
  )
}

export default SSIActivityIndicator
