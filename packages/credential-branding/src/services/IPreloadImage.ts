export interface IPreloadImage {
  uri: string
}

export interface IImagePreloader {
  preload(sources: Array<IPreloadImage>): Promise<void>
}
