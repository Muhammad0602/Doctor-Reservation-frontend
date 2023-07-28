import { configureStore } from '@reduxjs/toolkit';
import doctorsReducer from './doctors/doctorsSlice';
import reservationReducer from './reservations/reservationsSlice';

const store = configureStore({
  reducer: {
    doctors: doctorsReducer,
    reservations: reservationReducer,
  },
});

export default store;
