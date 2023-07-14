import {Context, createContext, Dispatch, SetStateAction} from 'react'
import {SupportedLanguage} from '../types/localization'

type LocaleContextType = {
  locale: SupportedLanguage
  setLocale: Dispatch<SetStateAction<SupportedLanguage>>
}

const LocaleContext: Context<LocaleContextType> = createContext<LocaleContextType>({
  locale: SupportedLanguage.ENGLISH,
  setLocale: () => {},
})

export default LocaleContext
