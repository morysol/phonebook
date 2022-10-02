import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, removeContact } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    // fetchingInProgress(state) {
    //   state.isLoading = true;
    // },
    // fetchingSuccess(state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state = {
    //     ...state,
    //     items: [...state.items, action.payload],
    //   };
    // },
    // fetchingError(state, action) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
    // addContact(state, action) {
    //   return {
    //     ...state,
    //     items: [...state.items, action.payload],
    //   };
    // },
    // removeContact(state, action) {
    //   return {
    //     ...state,
    //     items: state.items.filter(item => item.id !== action.payload),
    //   };
    // },
  },
  extraReducers: {
    //
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      // state = {
      //   ...state,
      //   items: [...state.items, action.payload],
      // };
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [removeContact.pending](state) {
      state.isLoading = true;
    },
    [removeContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(task => task.id === action.payload);
      state.items.splice(index, 1);
    },
    [removeContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
