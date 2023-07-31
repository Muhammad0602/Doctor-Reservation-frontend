import { configureStore } from '@reduxjs/toolkit';
import doctorsReducer from './doctors/doctorsSlice';
import reservationsReducer from './reservations/reservationsSlice';

const store = configureStore({
  reducer: {
    doctors: doctorsReducer,
    Reservation: reservationsReducer,
  },
});

export default store;
