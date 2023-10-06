import { useAppSelector } from '@/providers/StateManagerProvider/store'
import type { AuthUserData } from '@/redux/authReducer'

export const useUser = (): [boolean, AuthUserData | undefined] => {
  const auth = useAppSelector(s => s.auth.auth)

  return [
    auth?.isLoggedIn || false,
    typeof auth?.user === 'object' ? auth.user : undefined,
  ]
}
