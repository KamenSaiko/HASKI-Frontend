const reactI18Next: any = jest.createMockFromModule('react-i18next')

const useTranslation = () => {
  return {
    t: (str: string) => str,
    i18n: {
      changeLanguage: () => new Promise(() => { return }),
      getFixedT: () => (str: string) => {
        if (str === 'components.QuestionnaireResults.TableILS.balanced') return 'balanced'
        else return str.substring(41, str.length)
      }
    }
  }
}

const initReactI18next = {
  type: '3rdParty',
  init: jest.fn()
}

const I18nextProvider = ({ children }: any) => {
  return children
}

export { useTranslation, initReactI18next, I18nextProvider, reactI18Next }
