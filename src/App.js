import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import DeleteDoctor from './components/DeleteDoctor';
import Login from './components/Login';
import AddDcotor from './components/AddDoctor';
import Reserv from './components/Reserv';
import Reservations from './components/Reservations';
import Home from './components/Home';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route index element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="delete" element={<DeleteDoctor />} />
        <Route path="adddoctor" element={<AddDcotor />} />
        <Route path="reserveform" element={<Reserv />} />
        <Route path="myreservations" element={<Reservations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
