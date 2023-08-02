import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReservations } from '../redux/reservations/reservationsSlice';
import './reservation.css';

const formatAppointmentTime = (appointmentTime) => {
  const date = new Date(appointmentTime);
  const day = date.getDate();
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return `${day} ${month}, ${year} ${hour}:${minute}:${second}`;
};
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
          <div className="redetails">
            <p>{reservation.city}</p>
            <p>{reservation.appointment_date}</p>
            <p>{formatAppointmentTime(reservation.appointment_time)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Reservations;
