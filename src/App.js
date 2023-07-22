import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import Login from './components/loginpage/Login';
import AddDcotor from './components/addDoctor/AddDoctor';
import DelDoctor from './components/DelDoctor/DelDoctor';
import Reserv from './components/reserve/Reserv';
import Reservation from './components/reservation/Reservation';

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route index element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="adddoctor" element={<AddDcotor />} />
        <Route path='deldoctor' element={<DelDoctor />} />
        <Route path='reserveform' element={<Reserv />} />
        <Route path='myreservations' element={<Reservation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
