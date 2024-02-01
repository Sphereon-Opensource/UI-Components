import React, {CSSProperties, FC, ReactElement} from 'react'
import {fontColors} from '@sphereon/ui-components.core'

type Props = {
  size?: number
  color?: string
  style?: CSSProperties
}

const BitterballenIcon: FC<Props> = (props: Props): ReactElement => {
  const {size = 42, color = fontColors.dark, style} = props

  return (
    <div style={{...style, width: size, aspectRatio: 1, display: 'flex'}}>
      <svg width="42" height="43" viewBox="0 0 42 43" fill={color} xmlns="http://www.w3.org/2000/svg">
        <circle cx="13" cy="21.5" r="2" fill="#303030" />
        <circle cx="21" cy="21.5" r="2" fill="#303030" />
        <circle cx="29" cy="21.5" r="2" fill="#303030" />
      </svg>
    </div>
  )
}

export default BitterballenIcon
