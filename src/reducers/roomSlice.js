import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { roomService } from '../services/api.service';

export const getMyRooms = createAsyncThunk('room/getMyRooms', async (payload) => {
  const response = await roomService.getRoomsByWallet(payload);
  return response.data;
});

const initialState = {
  myRooms: [],
  rooms: [],
  loading: false
}

const roomSlice = createSlice({
  name: 'room',
  initialState,
  extraReducers: {
    [getMyRooms.pending]: (state) => {
      state.loading = true;
    },
    [getMyRooms.fulfilled]: (state, action) => {
      state.loading = false;
      state.myRooms = action.payload;
    },
    [getMyRooms.rejected]: (state) => {
      state.loading = false;
    },
  }
});

export default roomSlice.reducer;