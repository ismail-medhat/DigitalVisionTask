// rootReducer.ts

import {combineReducers} from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import shipmentSlice from './slices/shipmentSlice';
const rootReducer = combineReducers({
  auth: authSlice,
  shipment: shipmentSlice,
  // Add more slices here if you have multiple slices in your app
});

export default rootReducer;
