import { configureStore } from '@reduxjs/toolkit';
import urlReducer from './urlSlice';
import loggerMiddleware from './loggerMiddleware';

const store = configureStore({
  reducer: { url: urlReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
});

export default store;
