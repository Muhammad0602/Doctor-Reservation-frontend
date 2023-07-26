import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const signupUser = createAsyncThunk('users/signupUser', async (user, thunkAPI) => {
  try {
    const response = await axios.post('http://localhost:3000/users', user);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.response.data.error });
  }
});

export const loginUser = createAsyncThunk('users/loginUser', async (user, thunkAPI) => {
  try {
    const response = await axios.post('http://localhost:3000/sessions', user);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.response.data.error });
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState: { user: {}, error: null },
  reducers: {},
  extraReducers: {
    [signupUser.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      localStorage.setItem('token', action.payload.token);
    },
    [signupUser.rejected]: (state, action) => {
      state.error = action.payload.error;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      localStorage.setItem('token', action.payload.token);
    },
    [loginUser.rejected]: (state, action) => {
      state.error = action.payload.error;
    },
  },
});

export default userSlice.reducer;
