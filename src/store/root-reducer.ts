import { combineReducers } from '@reduxjs/toolkit';
import homeSlice from '@/views/home/store';
import authSlice from '@/configs/auth/store';
import themeSlice from '@/theme/store';
import commonSlice from '@/common/Store';

const rootReducer = combineReducers({
  themeSlice,
  commonSlice,
  homeSlice,
  authSlice,
});

export default rootReducer;
