import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Login from './components/loginpage/Login';
import Signup from './components/signupPage/Signup';
import DeleteDoctor from './components/DeleteDoctor';
import AddDcotor from './components/AddDoctor';
import Reserv from './components/Reserv';
import Private from './components/Private'
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
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  // Get the current location
  const location = useLocation();
  // Check if the current route matches the login or signup path
  const isLoginPage = location.pathname === '/login';
  const isSignupPage = location.pathname === '/signup';

  // Render the Sidebar only if the route is not the login or signup page
  const renderSidebar = !isLoginPage && !isSignupPage;

  return (
    <>
      {renderSidebar && <Sidebar />}
      <Routes>
        <Route index element={<Private><Home /></Private>} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Private><Home /></Private> } />
        <Route path="adddoctor" element={<Private><AddDcotor /></Private>} />
        <Route path="delete" element={<Private><DeleteDoctor /></Private>} />
        <Route path="reserveform" element={<Private><Reserv /></Private>} />
        <Route path="myreservations" element={<Private><Reservations /></Private>} />
      </Routes>
    </>
  );
}

export default App;