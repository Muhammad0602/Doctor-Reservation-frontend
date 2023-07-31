import { configureStore } from '@reduxjs/toolkit';
import doctorsReducer from './doctors/doctorsSlice';
import userReducer from './users/userSlice';
import reservationsReducer from './reservations/ReservationSlice';
import localStorageMiddleware from '../middleware/localStorage';

const store = configureStore({
  reducer: {
    doctors: doctorsReducer,
    user: userReducer,
    Reservation: reservationsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
