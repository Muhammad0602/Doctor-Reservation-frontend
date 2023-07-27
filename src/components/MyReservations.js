import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteReserve, getReserve } from '../redux/reservations/ReservationSlice';
import './componentsCss/myreservations.css';

const MyReservation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReserve());
  }, [dispatch]);

  const reservations = useSelector((state) => state.Reservation.reservations);

  const [doctor, setDoctor] = useState(1);

  const handleDoctorChange = (e) => {
    setDoctor(Number(e.target.value));
  };

  const handleDelete = async (reservationId) => {
    try {
      // Dispatch the deleteReserve action to delete the reservation
      await dispatch(deleteReserve(reservationId));
      alert('Reservation deleted successfully!');
    } catch (error) {
      alert('Error occurred while deleting the reservation.');
      console.error(error);
    }
  };

  return (
    <div className="container-3">
      <h1>My Reservations</h1>
      <div className="filter">
        <h3>Filter by Doctor:</h3>
        <select value={doctor} onChange={handleDoctorChange} className="select-option2">
          <option value={1}>Doctor 1</option>
          <option value={2}>Doctor 2</option>
        </select>
      </div>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            <p className="doctor2">
              Doctor:
              {reservation.doctorName}
            </p>
            <p className="city2">
              City:
              {reservation.city}
            </p>
            <p className="date2">
              Date:
              {reservation.date}
            </p>
            <p className="time2">
              Time:
              {reservation.appointment_time}
            </p>
            <div className="btn-container">
              <button type="button" onClick={() => handleDelete(reservation.id)} className="del">Delete</button>
            </div>
          </li>
        ))}
      </ul>
      {reservations.length === 0 && <p className="no-found">No reservations found.</p>}
      <div className="back">
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default MyReservation;
