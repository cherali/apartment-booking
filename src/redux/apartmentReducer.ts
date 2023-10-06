import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { Apartment } from '@/models/apartment'

export type ApartmentReducerInitialStateType = {
  apartments: Array<Apartment> | null
}

const initialState: ApartmentReducerInitialStateType = {
  apartments: null,
}

const apartmentReducer = createSlice({
  name: 'apartment',
  initialState,
  reducers: {
    setApartment: (state, action: PayloadAction<Array<Apartment>>) => {
      state.apartments = action.payload
    },
  },
})

export const { setApartment } = apartmentReducer.actions
export default apartmentReducer
