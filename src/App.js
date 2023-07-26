import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import Login from './components/loginpage/Login';
import AddDcotor from './components/addDoctor/AddDoctor';
import DelDoctor from './components/DelDoctor/DelDoctor';
import Reserv from './components/reserve/Reserv';
import Reservation from './components/reservation/Reservation';

function App() {
  const token = localStorage.getItem('token');
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        {/* <Route index element={<Login />} /> */}
        {/* <Route path="/signup" component={Signup} /> */}
        <Route path="/login" component={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="adddoctor" element={<AddDcotor />} />
        <Route path="deldoctor" element={<DelDoctor />} />
        <Route path="reserveform" element={<Reserv />} />
        <Route path="myreservations" element={<Reservation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
