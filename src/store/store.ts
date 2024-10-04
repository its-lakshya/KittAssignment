import { configureStore } from '@reduxjs/toolkit';
import journySlice, { journyState } from './slices/journy.slice.ts';

interface RootState {
  journy: journyState;
}

const Store = configureStore({
  reducer: {
    journy: journySlice,
  },
});

export default Store;
export type { RootState };