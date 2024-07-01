import { getTrains } from '@/services'
import { TLoadingStatus } from '@/types/general.types';
import { ITrainsRoot } from '@/types/trains.interfaces';
import {  createAsyncThunk, createSlice } from '@reduxjs/toolkit'



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
}

const initialState = {
  data: [],
  loading: 'idle',
} satisfies ITrainsState as ITrainsState

// Then, handle actions in your reducers:
const trainsSlice = createSlice({
  name: 'trains',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTrains.pending, (state, ) => {
        state.loading = "pending";
    })
    builder.addCase(fetchTrains.fulfilled, (state, action) => {
      state.data = action.payload as ITrainsRoot[];
      state.loading = "succeeded";
    })
    builder.addCase(fetchTrains.rejected, (state) => {
        state.loading = "failed";
    })
  },
})

export default trainsSlice.reducer;