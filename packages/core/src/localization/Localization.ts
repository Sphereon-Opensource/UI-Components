import i18n, {Scope, TranslateOptions} from 'i18n-js'
import memoize from 'lodash.memoize'

class Localization {
  public static supportedLanguages = {
    ENGLISH: 'en',
    DUTCH: 'nl',
  }

  private static translationGetters: {[locale: string]: () => object} = {
    [Localization.supportedLanguages.ENGLISH]: () => require('./translations/en.json'),
    [Localization.supportedLanguages.DUTCH]: () => require('./translations/nl.json'),
  }

  public static translate = memoize((key: Scope, config?: TranslateOptions) => {
      // If no LocaleProvider is used we need to load the default locale as the translations will be empty
      if (Object.keys(i18n.translations).length === 0) {
        i18n.translations = {
          [Localization.supportedLanguages.ENGLISH]: Localization.translationGetters[Localization.supportedLanguages.ENGLISH](),
        }
        i18n.locale = Localization.supportedLanguages.ENGLISH
      }

      return i18n.t(key, config)
    },
    (key: Scope, config?: TranslateOptions) => (config ? key + JSON.stringify(config) : key),
  )

  public static switchToLanguage = (languageTag: string = Localization.supportedLanguages.ENGLISH): void => {
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
