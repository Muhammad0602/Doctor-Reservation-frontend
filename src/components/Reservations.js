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
    <div className="reservation-page">
      <h1 className="reserve-title">All the Reservations</h1>
      <div className="reservation-list">
        {reservations.map((reservation) => (
          <div className="reservation-info flex m-2" key={reservation.id}>
            <img className="photo" src={reservation.photo} alt={reservation.name} />
            <h2 className="text-center">
              Dr.
              {reservation.doctor_name}
            </h2>
            <div className="reserve-details">
              <p>
                <strong>Address:&ensp;</strong>
                {reservation.city}
              </p>
              <p>
                <strong>Date:&ensp;</strong>
                {reservation.appointment_date}
              </p>
              <p>
                <strong>Time:&ensp;</strong>
                {new Date(reservation.appointment_time).getHours()}
                :
                {new Date(reservation.appointment_time).getMinutes()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Reservations;
