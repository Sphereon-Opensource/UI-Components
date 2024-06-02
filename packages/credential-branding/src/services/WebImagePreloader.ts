import {IPreloadImage, IImagePreloader} from './IPreloadImage'

export class WebImagePreloader implements IImagePreloader {
  async preload(sources: Array<IPreloadImage>): Promise<void> {
    const promises = sources.map(source => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image()
        img.src = source.uri
        img.onload = () => resolve()
        img.onerror = error => reject(error)
      })
    })
    await Promise.all(promises)
  }
}
