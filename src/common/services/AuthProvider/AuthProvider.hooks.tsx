import { useState, useEffect, useMemo, useCallback, useContext } from 'react'
import { getLoginStatus, getLogout, SnackbarContext } from '@services'
import { useTranslation } from 'react-i18next'

const useAuthProvider = () => {
  // State data
  const [isAuth, setIsAuth] = useState(false)

  // UX
  const { addSnackbar } = useContext(SnackbarContext)
  const { t } = useTranslation()

  const logout = useCallback(() => {
    getLogout().then((response) => {
      if (response.status === 200) {
        setIsAuth(false)
        addSnackbar({ message: t('services.AuthProvider.logout'), severity: 'success', autoHideDuration: 5000 })
      }
    })
  }, [addSnackbar, t])

  // Side effects
  useEffect(() => {
    getLoginStatus()
      .then((response) => {
        // When the user is logged in, the backend will return 200, otherwise 401 and clear the cookie
        if (response.status === 200) {
          setIsAuth(true)
        } else {
          setIsAuth(false)
        }
      })
      .catch(() => {
        addSnackbar({
          message: t('services.AuthProvider.connectivityerror'),
          severity: 'error',
          autoHideDuration: 5000
        })
      })
  }, [addSnackbar, t])

  return useMemo(() => ({ isAuth, setIsAuth, logout }), [isAuth, logout])
}

export { useAuthProvider }
