import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const API_BASE = 'http://127.0.0.1:3000/api';

export const createReserve = createAsyncThunk('reserve/createReserve', async (payload) => {
  const response = await fetch(`${API_BASE}/reservations`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      city: payload.city,
      date: payload.date,
      time: payload.time,
      doctor_id: payload.doctor,
      user_id: payload.user_id,
    }),
  });

  const data = await response.json();
  return data;
});

export const getReserve = createAsyncThunk('reserve/getReserve', async () => {
  const response = await fetch(`${API_BASE}/reservations`);
  const data = await response.json();
  return data;
});

export const deleteReserve = createAsyncThunk('reserve/deleteReserve', async (payload) => {
  const response = await fetch(`${API_BASE}/reservations/${payload}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await response.json();
  return data;
});

const initialState = {
  reservations: [],
  regsuccess: null,
};

const ReservationSlice = createSlice({
  name: 'reserve',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createReserve.fulfilled, (state, action) => {
      state.regsuccess = action.payload;
      if (action.payload.token) {
        localStorage.setItem('success', JSON.stringify(action.payload));
      }
    });
    builder.addCase(getReserve.fulfilled, (state, action) => {
      state.reservations = action.payload;
    });
  },
});

export default ReservationSlice.reducer;
