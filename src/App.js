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
import Reservation from './components/Reservation';
import Homes from './components/Homes';

function App() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="home" element={<Home />} />
      <Route path="delete" element={<DeleteDoctor />} />
      <Route path="adddoctor" element={<AddDcotor />} />
      <Route path="reserveform" element={<Reserv />} />
      <Route path="myreservations" element={<Reservations />} />
    </Routes>
  );
}

export default App;
