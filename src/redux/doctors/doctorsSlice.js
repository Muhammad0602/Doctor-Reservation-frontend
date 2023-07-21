import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const initialState = {
  doctors: [],
  isLoading: false,
  error: '',
};

export const getDoctors = createAsyncThunk('doctors/getDoctors', async () => {
  try {
    const response = await axios.get('api/doctors');
    return response.data.doctors;
  } catch (error) {
    throw error.response.data.error;
  }
});

export const doctorsSlice = createSlice({
    name: 'doctors',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getDoctors.pending, (state) => ({ ...state, isLoading: true }))
        .addCase(getDoctors.fulfilled, (state, action) => ({
          ...state,
          isLoading: false,
          doctors: action.payload,
        }))
        .addCase(getDoctors.rejected, (state, action) => ({
          ...state,
          isLoading: false,
          error: action.payload,
        }))
    },
  });
  
  export default doctorsSlice.reducer;