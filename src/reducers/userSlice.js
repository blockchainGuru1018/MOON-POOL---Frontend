import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userApiService } from '../services/api.service';
import { userService } from '../services/user.service';

// save profile

export const login = createAsyncThunk('user/login', async (payload) => {
  const response = await userApiService.login(payload);
  return response.data;
});

export const updateAvatar = createAsyncThunk('user/updateAvatar', async (payload) => {
  const response = await userApiService.updateAvatar(payload);
  return response.data;
});

export const updateUsername = createAsyncThunk('user/updateUsername', async (payload) => {
  const response = await userApiService.updateUsername(payload);
  return response.data;
});

export const getOnlineUsers = createAsyncThunk('user/getOnlineUsers', async (payload) => {
  const response = await userApiService.getOnlineUsers();
  return response.data;
});

const initialState = {
  userInfo: userService.getUser(),
  onlineUsers: [],
  loading: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout(state) {
      state.userInfo = null;
      userService.removeUser();
    }
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
      userService.saveUser(action.payload);
    },
    [login.rejected]: (state) => {
      state.loading = false;
    },
    [updateAvatar.pending]: (state) => {
      state.loading = true;
    },
    [updateAvatar.fulfilled]: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
      userService.saveUser(action.payload);
    },
    [updateAvatar.rejected]: (state) => {
      state.loading = false;
    },
    [updateUsername.pending]: (state) => {
      state.loading = true;
    },
    [updateUsername.fulfilled]: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
      userService.saveUser(action.payload);
    },
    [updateUsername.rejected]: (state) => {
      state.loading = false;
    },
    [getOnlineUsers.pending]: (state) => {
      state.loading = true;
    },
    [getOnlineUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.onlineUsers = action.payload;
    },
    [getOnlineUsers.rejected]: (state, action) => {
      state.loading = false;
    }
  }
});

export const { logout} = userSlice.actions;
export default userSlice.reducer;