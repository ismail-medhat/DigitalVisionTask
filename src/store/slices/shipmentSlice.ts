// mySlice.ts

import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import Axios from '@service/axiosInstance';

const initialState = {
  shipmentList: [],
  shipLoading: false,
};

export const shipmetListAsync = createAsyncThunk(
  'shipment/shipmetListAsync',
  async (data, {rejectWithValue, getState}) => {
    console.log('data ===> ', data);
    try {
      const res = await Axios({
        method: 'GET',
        path: 'shipmentList',
        data: data,
      });
      console.log('shipment Data:: ', res?.data[0]);
      return res.data;
    } catch (error) {
      console.log(
        'shipment Error: ' + JSON.stringify(error?.response?.data?.message),
      );
      return rejectWithValue(error);
    }
  },
);

const shipmentSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    // start login reducer
    builder
      .addCase(shipmetListAsync.pending, state => {
        state.shipLoading = true;
      })
      .addCase(shipmetListAsync.fulfilled, (state, action) => {
        state.shipLoading = false;
        state.shipmentList = action.payload;
      })
      .addCase(shipmetListAsync.rejected, (state, action) => {
        state.shipLoading = false;
        state.shipmentList = [];
      });
  },
});

export default shipmentSlice.reducer;
