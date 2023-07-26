import { configureStore } from '@reduxjs/toolkit';
import doctorsReducer from './doctors/doctorsSlice';
import userReducer from './users/userSlice';

const store = configureStore({
  reducer: {
    doctors: doctorsReducer,
    user: userReducer,
  },
});

export default store;
