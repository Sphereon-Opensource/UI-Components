import React, {FC} from 'react'
import {Oval} from 'react-loader-spinner'
import {elementColors} from '@sphereon/ui-components.core'

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
