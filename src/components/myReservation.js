import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteReserve, getReserve } from "../redux/reservations/ReservationSlice";

const MyReservation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReserve());
  }, [dispatch]);

  const reservations = useSelector((state) => state.Reservation.reservations);

  const [buttondis, setButtondis] = useState(false);
  const [prevdis, setPrevdis] = useState(false);
  const [doctor, setDoctor] = useState(1);
  
  const handleDoctorChange = (e) => {
    setDoctor(Number(e.target.value));
  };

  const handleDelete = async (reservationId) => {
    try {
      // Dispatch the deleteReserve action to delete the reservation
      await dispatch(deleteReserve(reservationId));
      alert("Reservation deleted successfully!");
    } catch (error) {
      alert("Error occurred while deleting the reservation.");
      console.error(error);
    }
  };

  return (
    <div>
      <h1>My Reservations</h1>
      <div>
        <label>Filter by Doctor:</label>
        <select value={doctor} onChange={handleDoctorChange}>
          <option value={1}>Doctor 1</option>
          <option value={2}>Doctor 2</option>
        </select>
      </div>