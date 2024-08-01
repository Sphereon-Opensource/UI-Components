import {ImageSize} from '@sphereon/ui-components.core'

export const getImageSize = (uri: string): Promise<ImageSize> => {
  return new Promise((resolve, reject): void => {
    const img = new Image()

    img.onload = (): void => {
      resolve({width: img.width, height: img.height})
    }

    img.onerror = (error: string | Event): void => {
      reject(error)
    }

    img.src = uri
  })
}
