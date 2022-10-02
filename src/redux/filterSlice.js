import { createSlice } from '@reduxjs/toolkit';
// const filtersInitialState = {
//   filter: '',
// };
const filterSlice = createSlice({
  name: 'filter',
  // initialState: filtersInitialState,
  initialState: '',
  reducers: {
    setFilter(state, action) {
      // console.log('ssss  ', state);
      // return { ...state, filter: action.payload };
      return action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
