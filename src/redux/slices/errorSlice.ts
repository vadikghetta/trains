import { PayloadAction, createSlice } from "@reduxjs/toolkit"





interface IErrorState {
  preventFormSubmission : boolean
}

const initialState = {
  preventFormSubmission : false
} satisfies IErrorState as IErrorState


const errorsSlice = createSlice({
  name: 'errors',
  initialState,
  reducers: {
    editPreventFormSubmission : (state , action : PayloadAction<boolean>) => {
      state.preventFormSubmission = action.payload
    }
  }
})

export const {editPreventFormSubmission} = errorsSlice.actions;
export default errorsSlice.reducer;