import React, {CSSProperties, FC, ReactElement} from 'react'
import {fontColors} from '@sphereon/ui-components.core'

type Props = {
  width?: number
  height?: number
  color?: string
  style?: CSSProperties
}

const MeatBallsIcon: FC<Props> = (props: Props): ReactElement => {
  const {width = 20, height = 20, color = fontColors.dark, style} = props

  return (
    <div style={{...style, width, height}}>
      <svg width="20" height="20" viewBox="0 0 32 32" fill={color} xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="16" r="2" fill={color} />
        <circle cx="16" cy="16" r="2" fill={color} />
        <circle cx="24" cy="16" r="2" fill={color} />
      </svg>
    </div>
  )
}

export default MeatBallsIcon
