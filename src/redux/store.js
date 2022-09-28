import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './auth';
import { contactsApi } from './contactsSlice';
import { filterSlice } from './filterSlice';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    [filterSlice.name]: filterSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
    authApi.middleware,
  ],
});
