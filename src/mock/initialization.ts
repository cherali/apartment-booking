import { store } from '@/providers/StateManagerProvider/store'
import { setApartment } from '@/redux/apartmentReducer'
import apartment from '@/mock/apartmentMockData.json'

export const initialize = () => {
  store.dispatch(setApartment(apartment))
}
