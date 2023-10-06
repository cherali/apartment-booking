import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import authReducer from '@/redux/authReducer'
import apartmentReducer from '@/redux/apartmentReducer'
import visitReducer from '@/redux/visitReducer'

export const store = configureStore({
  reducer: {
    [authReducer.name]: authReducer.reducer,
    [apartmentReducer.name]: apartmentReducer.reducer,
    [visitReducer.name]: visitReducer.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
