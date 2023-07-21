import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDoctors } from '../redux/doctors/doctorsSlice';

function Home() {
  const { doctors, isLoading, error } = useSelector((store) => store.doctors);
  console.log(doctors)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDoctors());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="loading">
        <div className="spinner" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Oopps somethings went wrong.PLease try again!</h2>
        <p>{error}</p>
      </div>
    );
  }
  return (
    <h1>Hello I am the home page</h1>
  )
}

export default Home;