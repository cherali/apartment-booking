import { useUser } from './useUser'

export const useCheckUser = () => {
  const [isUserLoggedIn] = useUser()

  function checkIfUserLoggedIn() {
    if (!isUserLoggedIn) {
      alert('You must logged in first')
      throw new Error('Login required.')
    }
  }

  return {
    checkIfUserLoggedIn,
  }
}
