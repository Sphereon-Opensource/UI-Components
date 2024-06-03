import {IPreloadImage, IImagePreloader} from './IPreloadImage'
/*const FastImage = require('react-native-fast-image')*/

export class ReactNativeImagePreloader implements IImagePreloader {
  async preload(sources: Array<IPreloadImage>): Promise<void> {
    /*FastImage.preload(sources)*/
  }
}
