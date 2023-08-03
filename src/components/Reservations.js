import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReservations } from '../redux/reservations/reservationsSlice';
import './reservation.css';

function Reservations() {
  const { reservations, isLoading, error } = useSelector((store) => store.reservations);
  const dispatch = useDispatch();
  const [time, setTime] = useState('');
  


  // const formattedTime = appointmentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

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
    <div className="reservation-page">
      <h1 className="reserve-title">All the Reservations</h1>
      <div className="d-flex">
        {reservations.map((reservation) => (
          <div className="reservation-info flex m-2" key={reservation.id}>
            <img className="photo" src={reservation.photo} alt={reservation.name} />
            <h2>
              Dr.
              {reservation.doctor_name}
            </h2>
            <div className="redetails">
              <p>
                <strong>Address:&ensp;</strong>
                {reservation.city}
              </p>
              <p>
                <strong>Date:&ensp;</strong>
                {reservation.appointment_date}
              </p>
              <p onClick={() => handleTime(reservation.appointment_time)}>
                <strong>Time:&ensp;</strong>
                {time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Reservations;
