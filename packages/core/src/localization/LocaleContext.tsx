import {Context, createContext, Dispatch, SetStateAction} from 'react'
import Localization from './Localization'

type LocaleContextType = {
  locale: string
  setLocale: Dispatch<SetStateAction<string>>
}

const LocaleContext: Context<LocaleContextType> = createContext<LocaleContextType>({
  locale: Localization.supportedLanguages.ENGLISH,
  setLocale: () => {},
})

export default LocaleContext
