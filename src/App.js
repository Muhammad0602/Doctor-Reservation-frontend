import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import DeleteDoctor from './components/DeleteDoctor';
import Login from './components/Login';
import AddDcotor from './components/AddDoctor';
import Reserv from './components/Reserv';
import Reserve from './components/Reserve';
import Reservation from './components/Reservation';
import MyReservations from './components/MyReservations';
import Home from './components/Home';
import DoctorDetails from './components/DoctorDetails';

function App() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="home" element={<Home />} />
      <Route path="delete" element={<DeleteDoctor />} />
      <Route path="adddoctor" element={<AddDcotor />} />
      <Route path="reserveform" element={<Reserv />} />
      <Route path="myreservations" element={<Reservation />} />
      <Route path="/my-reservations" element={<MyReservations />} />
      <Route path="/reserve" element={<Reserve />} />
      <Route path="/:doctorId" element={<DoctorDetails />} />
    </Routes>
  );
}

export default App;
