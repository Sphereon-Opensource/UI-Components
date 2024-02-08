import React, {CSSProperties, FC, ReactElement} from 'react'
import {fontColors} from '@sphereon/ui-components.core'

type Props = {
  width?: number
  height?: number
  color?: string
  style?: CSSProperties
}

const MeatBallsIcon: FC<Props> = (props: Props): ReactElement => {
  const {width = 20, height = 4, color = fontColors.dark, style} = props

  return (
    <div style={{...style, width, height, display: 'flex'}}>
      <svg width="20" height="4" viewBox="0 0 20 4" fill={color} xmlns="http://www.w3.org/2000/svg">
        <circle cx="13" cy="21.5" r="2" fill={color} />
        <circle cx="21" cy="21.5" r="2" fill={color} />
        <circle cx="29" cy="21.5" r="2" fill={color} />
      </svg>
    </div>
  )
}

export default MeatBallsIcon
