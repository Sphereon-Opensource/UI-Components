import React, {CSSProperties, FC, ReactElement} from 'react'
import {fontColors} from '@sphereon/ui-components.core'

type Props = {
  width?: number
  height?: number
  color?: string
  style?: CSSProperties
}

const SSIFilterIcon: FC<Props> = (props: Props): ReactElement => {
  const {height = 16, width = 18, color = fontColors.dark, style} = props

  return (
    <div style={{...style, width, height, display: 'flex'}}>
      <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.5 1.5H1.5L7.5 8.33222V13.0556L10.5 14.5V8.33222L16.5 1.5Z"
          stroke={color}
          strokeOpacity="0.8"
          strokeWidth="1.29412"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export default SSIFilterIcon
