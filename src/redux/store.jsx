import { configureStore } from '@reduxjs/toolkit';
import { BreedsSlice } from './RtkSlices/BreedsSlice';

const store = configureStore({
    reducer:{
        [BreedsSlice.reducerPath]:BreedsSlice.reducer,
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(
        BreedsSlice.middleware,
  ),
})

export default store