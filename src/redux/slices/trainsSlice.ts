import { getTrains } from '@/services'
import { TLoadingStatus } from '@/types/general.types';
import { ITrainsRoot } from '@/types/trains.interfaces';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'



export const fetchTrains = createAsyncThunk(
  'trains/fetchAllTrains',
  async () => {
    const data = await getTrains();
    return data;
  },
)

interface ITrainsState {
  data : ITrainsRoot[]
  loading: TLoadingStatus
  preventFormSubmission : boolean
}

const initialState = {
  data: [],
  loading: 'idle',
  preventFormSubmission : false
} satisfies ITrainsState as ITrainsState

// Then, handle actions in your reducers:
const trainsSlice = createSlice({
  name: 'trains',
  initialState,
  reducers: {
    editPreventFormSubmission : (state , action : PayloadAction<boolean>) => {
      state.preventFormSubmission = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTrains.pending, (state, action) => {
        state.loading = "pending";
    })
    builder.addCase(fetchTrains.fulfilled, (state, action) => {
      state.data = action.payload as ITrainsRoot[];
      state.loading = "succeeded";
    })
    builder.addCase(fetchTrains.rejected, (state, action) => {
        state.loading = "failed";
    })
  },
})

export const {editPreventFormSubmission} = trainsSlice.actions;
export default trainsSlice.reducer;