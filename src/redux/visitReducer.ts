import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { Visit, VisitIdType } from '@/models/visit'

export type VisitReducerInitialStateType = {
  visits: Array<Visit> | null
}

interface EditNoteVisitProps {
  id: VisitIdType
  note: string
}

const initialState: VisitReducerInitialStateType = {
  visits: null,
}

const visitReducer = createSlice({
  name: 'visit',
  initialState,
  reducers: {
    addVisit: (state, action: PayloadAction<Visit>) => {
      state.visits = [...(state.visits || []), action.payload]
    },
    removeVisit: (state, action: PayloadAction<VisitIdType>) => {
      state.visits = state.visits?.filter(r => r.id !== action.payload) || []
    },
    editNoteVisit: (state, action: PayloadAction<EditNoteVisitProps>) => {
      state.visits =
        state.visits?.map(visit =>
          visit.id === action.payload.id
            ? { ...visit, note: action.payload.note }
            : visit,
        ) || []
    },
  },
})

export const { addVisit, removeVisit, editNoteVisit } = visitReducer.actions
export default visitReducer
