import { configureStore } from '@reduxjs/toolkit';
import doctorsReducer from './doctors/doctorsSlice';
import ReservationSlice from './reservations/ReservationSlice';

const store = configureStore({
  reducer: {
    doctors: doctorsReducer,
    Reservation: ReservationSlice,
  },
});

export default store;
