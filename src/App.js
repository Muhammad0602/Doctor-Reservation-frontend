import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Login from './components/loginpage/Login';
import Signup from './components/signupPage/Signup';
import Private from './components/Private';
import DeleteDoctor from './components/DeleteDoctor';
import AddDcotor from './components/AddDoctor';
import Reserv from './components/Reserv';
import Reservations from './components/Reservations';
import Home from './components/Home';
import Sidebar from './components/Sidebar';

function App() {
  const token = localStorage.getItem('token');
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="signup" element={<Signup />} />
        <Route index element={<Login />} />
        {/* <Route path="login" element={<Login />} /> */}
        <Route path="home" element={<Private><Home /></Private>} />
        <Route path="adddoctor" element={<Private><AddDcotor /></Private>} />
        <Route path="delete" element={<Private><DeleteDoctor /></Private>} />
        <Route path="reserveform" element={<Private><Reserv /></Private>} />
        <Route path="myreservations" element={<Private><Reservations /></Private>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
