export type ImageSize = {
  height: number
  width: number
  aspectRatio?: number // FIXME, we might want to look at making this non optional
}

export type ImageAttributes = {
  uri?: string
  alt?: string
  dimensions?: ImageSize
  style?: {
    height?: number
  }
}
