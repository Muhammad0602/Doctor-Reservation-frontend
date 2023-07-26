import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const initialState = {
  doctors: [],
  isLoading: false,
  error: '',
};

export const getDoctors = createAsyncThunk('doctors/getDoctors', async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/doctors');
    return response.data;
  } catch (error) {
    throw error.response.data.error;
  }
});

export const getDoctor = createAsyncThunk('doctors/getDoctor', async (doctorId) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/doctors/${doctorId}`);
    return response.data;
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

      .addCase(getDoctor.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(getDoctor.fulfilled, (state, action) => {
        const doctor = state.doctors.find((doctor) => doctor.id === action.payload);
        return {
          ...state,
          isLoading: false,
          doctors: doctor,
        };
      });
  },
});

export default doctorsSlice.reducer;
