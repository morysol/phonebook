import { createSlice } from '@reduxjs/toolkit';
// import { userSignup, userLogin, userLogout, userCurrent } from './operations';
import { userSignup, userLogin, userLogout, userRefresh } from './operations';

// const initialState = {
//   user: { name: null, email: null },
//   token: null,
//   isLoggedIn: false,
//   isRefreshing: false,
// };

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(userSignup.pending, (state, action) => {
        return state;
      })
      .addCase(userSignup.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(userSignup.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.error = action.payload;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.error = action.payload;
      })
      .addCase(userLogout.fulfilled, (state, action) => {
        state.user = {};
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(userRefresh.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      }),
});

export const authReducer = authSlice.reducer;
