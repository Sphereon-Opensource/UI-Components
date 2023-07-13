import React, {ReactElement, ReactNode, useState} from 'react'
import LocaleContext from './LocaleContext'
import Localization from './Localization'
import {SupportedLanguage} from '../types/localization'

type Props = {
  children: ReactNode
}

const LocaleProvider = ({children}: Props): ReactElement => {
  const [locale, setLocale] = useState(SupportedLanguage.ENGLISH)

  Localization.switchToLanguage(locale)

  return <LocaleContext.Provider value={{locale, setLocale}}>{children}</LocaleContext.Provider>
}

export default LocaleProvider
