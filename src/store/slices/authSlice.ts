// mySlice.ts

import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import Axios from '@service/axiosInstance';

interface User {
  message: string;
  home_page: string;
  full_name: string;
}

const initialState = {
  fullName: '',
  authLoading: false,
};

export const loginAsync = createAsyncThunk<User, {usr: string; pwd: string}>(
  'auth/loginAsync',
  async (credentials, {rejectWithValue, getState}) => {
    try {
      const res = await Axios({
        method: 'POST',
        path: 'login',
        data: credentials,
      });
      console.log('login Data:: ', res?.data);
      return res.data;
    } catch (error) {
      console.log(
        'login Error: ' + JSON.stringify(error?.response?.data?.message),
      );
      return rejectWithValue(error);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    // start login reducer
    builder
      .addCase(loginAsync.pending, state => {
        state.authLoading = true;
      })
      .addCase(loginAsync.fulfilled, (state, action: PayloadAction<User>) => {
        state.authLoading = false;
        state.fullName = action.payload?.full_name;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.authLoading = false;
      });
  },
});

export default authSlice.reducer;
