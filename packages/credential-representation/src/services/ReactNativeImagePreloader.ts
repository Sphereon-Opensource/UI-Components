import {IPreloadImage, IImagePreloader} from './IPreloadImage'

export class ReactNativeImagePreloader implements IImagePreloader {
  async preload(sources: Array<IPreloadImage>): Promise<void> {
    const promises = sources.map(
      source =>
        new Promise<void>((resolve, reject) => {
          const img = new Image()
          img.src = source.uri
          img.onload = () => resolve()
          img.onerror = error => reject(error)
        }),
    )
    await Promise.all(promises)
  }
}
