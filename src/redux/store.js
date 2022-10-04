import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './authSlice';
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
    filter: filtersReducer,
  },
});
