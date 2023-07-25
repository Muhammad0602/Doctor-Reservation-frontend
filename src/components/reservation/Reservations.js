import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReservations } from '../../redux/reservations/reservationsSlice';
import { getDoctors } from '../../redux/doctors/doctorsSlice';
import './reservation.css';

function Reservations() {
  const reservations = useSelector(
    (store) => store.reservations,
  );
  const doctors = useSelector(
    (store) => store.doctors,
  );

  const isLoading = useSelector(
    (store) => store.isLoading,
  );
  const error = useSelector(
    (store) => store.error,
  );

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
    
    <div className="reservation-page flex">
      {reservations.map((reservation) => (
        <div className="reservation-info flex" key={reservation.id}>
          <tr>
            <th>{reservation.appointment_time}</th>
            <th>{reservation.doctor_id}</th>
            <th>{reservation.patient_id}</th>
          </tr>
        </div>
      ))}

    </div>

  );
}

export default Reservations;
