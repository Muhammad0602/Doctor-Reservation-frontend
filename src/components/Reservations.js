import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReservations } from '../redux/reservations/ReservationSlice';

const formatAppointmentTime = (appointmentTime) => {
  const date = new Date(appointmentTime);
  const day = date.getDate();
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month}, ${year}`;
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
          <h1>{reservation.doctor}</h1>
          <h3>
            {reservation.city}
            Kabul
          </h3>
          <p>{formatAppointmentTime(reservation.appointment_time)}</p>

        </div>
      ))}

    </div>

  );
}

export default Reservations;