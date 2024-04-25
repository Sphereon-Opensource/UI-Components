import React from 'react'
import {ToastCustomProps, ToastType} from '@sphereon/ui-components.core'
import SSIToast from '../../components/messageBoxes/toasts/SSIToast/index.js'
import {ToastConfigParams} from '../../types/index.js'

export const toastConfig = {
  ssiToastSuccess: (params: ToastConfigParams<ToastCustomProps>) => {
    const {title, message, onClick, props} = params
    return <SSIToast type={ToastType.SUCCESS} title={title} message={message} showBadge={props?.showBadge} onClick={onClick} />
  },
  ssiToastError: (params: ToastConfigParams<ToastCustomProps>) => {
    const {title, message, onClick, props} = params
    return <SSIToast type={ToastType.ERROR} title={title} message={message} showBadge={props?.showBadge} onClick={onClick} />
  },
}
