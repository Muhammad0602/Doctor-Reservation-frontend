import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDoctors } from '../redux/doctors/doctorsSlice';

function Home() {
  const { doctors, isLoading, error } = useSelector((store) => store.doctors);
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
    <div className="home-page">
      {doctors.map((doctor) => (
        <div className="doctor-info" key={doctor.id}>
          <img className="photo" src={doctor.photo} alt={doctor.name} />
          <h2>{doctor.name}</h2>
          <p>{doctor.about}</p>
          <p>
            Buy one hour of time with only $
            {doctor.price_hour}
          </p>
          <Link to={`/${doctor.id}`} className="link">{doctor.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
