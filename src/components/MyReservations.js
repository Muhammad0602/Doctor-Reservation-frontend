import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteReserve, getReserve } from '../redux/reservations/ReservationSlice';

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
    <div>
      <h1>My Reservations</h1>
      <div>
        <h3>Filter by Doctor:</h3>
        <select value={doctor} onChange={handleDoctorChange}>
          <option value={1}>Doctor 1</option>
          <option value={2}>Doctor 2</option>
        </select>
      </div>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            <p>
              Doctor:
              {reservation.doctorName}
            </p>
            <p>
              City:
              {reservation.city}
            </p>
            <p>
              Date:
              {reservation.date}
            </p>
            <p>
              Time:
              {reservation.appointment_time}
            </p>
            <button type="button" onClick={() => handleDelete(reservation.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {reservations.length === 0 && <p>No reservations found.</p>}
      <div>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default MyReservation;
