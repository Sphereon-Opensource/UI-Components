import React, {CSSProperties, FC, ReactElement} from 'react'
import {fontColors} from '@sphereon/ui-components.core'

type Props = {
  width?: number
  height?: number
  color?: string
  style?: CSSProperties
}

const DeleteIcon: FC<Props> = (props: Props): ReactElement => {
  const {width = 19, height = 21, color = fontColors.light, style = {}} = props

  return (
    <div style={{...style, width, height, display: 'flex'}}>
      <svg width="19" height="21" viewBox="0 0 19 21" fill={color} xmlns="http://www.w3.org/2000/svg">
        <path
          d="M24.8277 8.98905V24.6058C24.8277 26.4672 23.3113 28 21.4699 28H10.5336C8.68863 28 7.1722 26.4672 7.1722 24.6058V8.98905H5.97712C4.9409 8.98905 4.9409 7.39781 5.97712 7.39781H12.1114V5.87226C12.1114 4.87591 12.8841 4 13.8914 4H18.1121C19.1158 4 19.8921 4.87956 19.8921 5.87226V7.39781H26.0228C27.059 7.39781 27.059 8.98905 26.0228 8.98905H24.8277ZM13.6856 7.39781H18.3143V5.87226C18.3143 5.75547 18.2457 5.59124 18.1121 5.59124H13.8914C13.7542 5.59124 13.6856 5.75547 13.6856 5.87226V7.39781ZM19.43 21.9635C19.43 23.0073 17.8558 23.0073 17.8558 21.9635V13.2993C17.8558 12.2555 19.43 12.2555 19.43 13.2993V21.9635ZM14.1441 21.9635C14.1441 23.0073 12.5699 23.0073 12.5699 21.9635V13.2993C12.5699 12.2555 14.1441 12.2518 14.1441 13.2993V21.9635ZM23.2535 8.98905C18.419 8.98905 13.5845 8.98905 8.75001 8.98905V24.6058C8.75001 25.5985 9.54793 26.4088 10.5336 26.4088H21.4699C22.452 26.4088 23.2535 25.5985 23.2535 24.6058V8.98905Z"
          fill={color}
        />
      </svg>
    </div>
  )
}

export default DeleteIcon
