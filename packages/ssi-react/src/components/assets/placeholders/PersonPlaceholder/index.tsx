import React, {CSSProperties, FC, ReactElement} from 'react'
import {elementColors} from '@sphereon/ui-components.core'

type Props = {
  width?: number
  height?: number
  color?: string
  style?: CSSProperties
}

const PersonPlaceholder: FC<Props> = (props: Props): ReactElement => {
  const {width = 79, height = 77, color = elementColors[300], style} = props

  return (
    <div style={{...style, width, height, display: 'flex'}}>
      <svg width="100%" height="100%" viewBox="0 0 79 77" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M22.8136 19.3766C22.8136 10.2672 30.2594 2.85265 39.4999 2.85265C48.7404 2.85265 56.1862 10.2672 56.1862 19.3766C56.1862 28.486 48.7404 35.9005 39.4999 35.9005C30.2594 35.9005 22.8136 28.486 22.8136 19.3766ZM3.52788 62.4042C3.52788 60.1881 4.62672 58.0491 6.89989 55.9687C9.18981 53.873 12.4868 52.0225 16.3463 50.4894C24.0686 47.4219 33.3853 45.8802 39.4999 45.8802C45.6144 45.8802 54.9312 47.4219 62.6534 50.4894C66.513 52.0225 69.81 53.873 72.0999 55.9687C74.3731 58.0491 75.4719 60.1881 75.4719 62.4042V74.1473H3.52788V62.4042Z"
          stroke={color}
          strokeWidth="5.19882"
        />
      </svg>
    </div>
  )
}

export default PersonPlaceholder
