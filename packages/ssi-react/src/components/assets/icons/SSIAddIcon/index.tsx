import React, {CSSProperties, FC, ReactElement} from 'react'
import {fontColors} from '@sphereon/ui-components.core'

export interface IProps {
  size?: number
  color?: string
  style?: CSSProperties
}

const SSIAddIcon: FC<IProps> = (props: IProps): ReactElement => {
  const {size = 16, color = fontColors.dark, style} = props

  return (
    <div style={{...style, width: size, aspectRatio: 1, display: 'flex'}}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 0.5C7.65483 0.5 7.375 0.779833 7.375 1.125V7.37503H1.125C0.779812 7.37503 0.5 7.65484 0.5 8.00003C0.5 8.34519 0.779812 8.62502 1.125 8.62502H7.375V14.875C7.375 15.2202 7.65483 15.5 8 15.5C8.34519 15.5 8.625 15.2202 8.625 14.875V8.62502H14.875C15.2202 8.62502 15.5 8.34519 15.5 8.00003C15.5 7.65484 15.2202 7.37503 14.875 7.37503H8.625V1.125C8.625 0.779833 8.34519 0.5 8 0.5Z"
          fill={color}
        />
      </svg>
    </div>
  )
}

export default SSIAddIcon
