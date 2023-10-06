import { useAppSelector } from '@/providers/StateManagerProvider/store'

export const useUser = () => {
  const auth = useAppSelector(s => s.auth.auth)

  return [auth?.isLoggedIn, auth?.user]
}