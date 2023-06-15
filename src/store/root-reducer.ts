import { combineReducers } from '@reduxjs/toolkit';
import homeSlice from '@/views/home/store';
import authSlice from '@/configs/auth/store';
import themeSlice from '@/theme/store';
import commonSlice from '@/common/Store';
import { brokerApi } from '@/services/broker.service';

const rootReducer = combineReducers({
  themeSlice,
  commonSlice,
  homeSlice,
  authSlice,
  [brokerApi.reducerPath]: brokerApi.reducer
});

export default rootReducer;
