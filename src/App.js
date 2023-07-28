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
import Signup from './components/signupPage/Signup';
import AddDcotor from './components/addDoctor/AddDoctor';
import DelDoctor from './components/DelDoctor/DelDoctor';
import Reserv from './components/reserve/Reserv';
import Reservation from './components/reservation/Reservation';
import Private from './components/Private';

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
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Private><Home /></Private>} />
        <Route path="adddoctor" element={<Private><AddDcotor /></Private>} />
        <Route path="deldoctor" element={<Private><DelDoctor /></Private>} />
        <Route path="reserveform" element={<Private><Reserv /></Private>} />
        <Route path="myreservations" element={<Private><Reservation /></Private>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
