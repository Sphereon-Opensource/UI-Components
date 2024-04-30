import {toast} from 'react-toastify'
import {ToastCustomProps, ToastType} from '@sphereon/ui-components.core'
import {toastConfig} from '../@config/toasts'
import {ToastConfigParams} from '../types'

export const showToast = async (type: ToastType, params: ToastConfigParams<ToastCustomProps>): Promise<void> => {
  const {title, message, onClick, props} = params

  if (!toastConfig.hasOwnProperty(type)) {
    return Promise.reject('Unknown toast type')
  }

  toast(
    toastConfig[type]({
      title,
      message,
      onClick,
      props,
    }),
  )
}
