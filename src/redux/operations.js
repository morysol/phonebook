import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://63308c18f5fda801f8e28cea.mockapi.io';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/FetchAll',

  // Используем символ подчеркивания как имя первого параметра,
  // потому что в этой операции он нам не нужен
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');

      // При успешном запросе возвращаем промис с данными
      return response.data;
    } catch (e) {
      // При ошибке запроса возвращаем промис
      // который будет отклонен с текстом ошибки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      // const response = await axios.post('/users/signup', contact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const patchContact = createAsyncThunk(
  'contacts/removeContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

//////////////////        USERS       //////////////////

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  // axios.defaults.headers.common['Authorization'] = token;
};

const clearAuthHeader = token => {
  // axios.defaults.headers.common['Authorization'] = '';
};

export const userSignup = createAsyncThunk(
  'auth/userSignup',
  async (user, thunkAPI) => {
    try {
      console.log(user);
      const response = await axios.post('/users/signup', user);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const userLogin = createAsyncThunk(
  'auth/userLogin',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', user);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const userLogout = createAsyncThunk(
  'auth/userLogout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      clearAuthHeader();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const userRefresh = createAsyncThunk(
  'auth/userRefresh',
  async (_, thunkAPI) => {
    // const state = thunkAPI.getState();
    const { token } = thunkAPI.getState().auth;
    if (!token) return thunkAPI.rejectWithValue(' No valid token ');

    setAuthHeader(token);
    try {
      //
      const response = await axios.get('/users/current');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
