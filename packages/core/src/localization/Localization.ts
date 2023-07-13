import i18n, {Scope, TranslateOptions} from 'i18n-js'
import memoize from 'lodash.memoize'
import {SupportedLanguage} from '../types/localization'

class Localization {
  private static translationGetters: {[locale: string]: () => object} = {
    [SupportedLanguage.ENGLISH]: () => require('./translations/en.json'),
    [SupportedLanguage.DUTCH]: () => require('./translations/nl.json'),
  }

  public static translate: any = memoize(
    (key: Scope, config?: TranslateOptions) => {
      // If no LocaleProvider is used we need to load the default locale as the translations will be empty
      if (Object.keys(i18n.translations).length === 0) {
        i18n.translations = {
          [SupportedLanguage.ENGLISH]: Localization.translationGetters[SupportedLanguage.ENGLISH](),
        }
        i18n.locale = SupportedLanguage.ENGLISH
      }

      return i18n.t(key, config)
    },
    (key: Scope, config?: TranslateOptions) => (config ? key + JSON.stringify(config) : key),
  )

  public static switchToLanguage = (languageTag: string = SupportedLanguage.ENGLISH): void => {
    if (Localization.translate.cache.clear) {
      Localization.translate.cache.clear()
    }
    i18n.translations = {
      [languageTag]: Localization.translationGetters[languageTag](),
    }
    i18n.locale = languageTag
  }

  public static getLocale = (): string => {
    return i18n.locale
  }
}

export const translate = Localization.translate
export default Localization
