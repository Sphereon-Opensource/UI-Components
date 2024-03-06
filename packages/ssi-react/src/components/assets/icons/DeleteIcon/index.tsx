import React, {CSSProperties, FC, ReactElement} from 'react'
import {fontColors} from '@sphereon/ui-components.core'

type Props = {
  width?: number
  height?: number
  color?: string
  style?: CSSProperties
}

const DeleteIcon: FC<Props> = (props: Props): ReactElement => {
  const {width = 20, height = 21, color = fontColors.dark, style = {}} = props

  return (
    <div style={{...style, width, height, display: 'flex'}}>
      <svg width="100%" height="100%" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17.3126 4.36542V18.0301C17.3126 19.6588 15.975 21 14.3509 21H4.70454C3.07718 21 1.73962 19.6588 1.73962 18.0301V4.36542H0.685498C-0.228499 4.36542 -0.228499 2.97308 0.685498 2.97308H6.09623V1.63823C6.09623 0.766423 6.77775 0 7.66627 0H11.3891C12.2745 0 12.9592 0.769617 12.9592 1.63823V2.97308H18.3667C19.2807 2.97308 19.2807 4.36542 18.3667 4.36542H17.3126ZM7.48474 2.97308H11.5675V1.63823C11.5675 1.53604 11.507 1.39234 11.3891 1.39234H7.66627C7.54525 1.39234 7.48474 1.53604 7.48474 1.63823V2.97308ZM12.5515 15.7181C12.5515 16.6314 11.163 16.6314 11.163 15.7181V8.13686C11.163 7.22354 12.5515 7.22354 12.5515 8.13686V15.7181ZM7.8892 15.7181C7.8892 16.6314 6.50068 16.6314 6.50068 15.7181V8.13686C6.50068 7.22354 7.8892 7.22035 7.8892 8.13686V15.7181ZM15.9241 4.36542C11.6598 4.36542 7.39557 4.36542 3.13132 4.36542V18.0301C3.13132 18.8987 3.83513 19.6077 4.70454 19.6077H14.3509C15.2171 19.6077 15.9241 18.8987 15.9241 18.0301V4.36542Z"
          fill={color}
        />
      </svg>
    </div>
  )
}

export default DeleteIcon
