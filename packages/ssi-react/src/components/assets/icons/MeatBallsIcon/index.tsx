import React, {CSSProperties, FC, ReactElement} from 'react'
import {fontColors} from '@sphereon/ui-components.core'

type Props = {
  width?: number
  height?: number
  color?: string
  style?: CSSProperties
}

const MeatBallsIcon: FC<Props> = (props: Props): ReactElement => {
  const {width = 20, height = 5, color = fontColors.dark, style} = props

  return (
    <div style={{...style, width, height, display: 'flex'}}>
      <svg width="100%" height="100%" viewBox="0 0 20 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="2" cy="2.5" r="2" fill={color} />
        <circle cx="10" cy="2.5" r="2" fill={color} />
        <circle cx="18" cy="2.5" r="2" fill={color} />
      </svg>
    </div>
  )
}

export default MeatBallsIcon
