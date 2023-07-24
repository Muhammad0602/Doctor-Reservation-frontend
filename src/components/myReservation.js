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