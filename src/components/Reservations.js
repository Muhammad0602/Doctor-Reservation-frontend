import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReservations } from '../redux/reservations/reservationsSlice';
import './reservation.css';

function Reservations() {
  const { reservations, isLoading, error } = useSelector((store) => store.reservations);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReservations());
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
    <div className="reservation-page flex">
      {reservations.map((reservation) => (
        <div className="reservation-info flex" key={reservation.id}>
          <img className="photo" src={reservation.photo} alt={reservation.name} />
          <h1>{reservation.doctor_name}</h1>
          <p>{reservation.city}</p>
          <p>{reservation.appointment_date}</p>
          <p>{reservation.appointment_time}</p>
        </div>
      ))}
    </div>
  );
}
export default Reservations;
