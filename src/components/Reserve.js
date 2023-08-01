import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createReserve } from '../redux/reservations/ReservationSlice';
import { getDoctors } from '../redux/doctors/doctorsSlice';
import './componentsCss/reserve.css';

const Reservation = () => {
  const doctors = useSelector((state) => state.doctors.doctors);
  const user = localStorage.getItem('username');
  // const user = JSON.parse(storage);
  // console.log(storage);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDoctors());
  }, [dispatch]);

  const [reserve, setReserve] = useState({
    username: user?.user || null,
    date: '',
    time: '',
    doctor: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReserve((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();
    const {
      date, time, doctor,
    } = reserve;
    console.log(reserve);

    if (!date || !time || !doctor) {
      alert('Please fill in all the required fields.');
      return;
    }

    try {
      const payload = {
        ...reserve,
        username: user.username,
      };

      // Dispatch the createReserve action to make the reservation request
      dispatch(createReserve(payload));
      alert('Reservation created successfully!');
      navigate('/my-reservations'); // Redirect to the reservation page after successful reservation
    } catch (error) {
      alert('Error occurred while making a reservation.');
      console.error(error);
    }
  };

  return (
    <div className="container-2">
      <h1 className="heading">Reservation Page</h1>
      <form onSubmit={submit}>
        <div className="make-heading">
          <h2>Make a reservation with us</h2>
          {/* <div className="city">
            <p>City:</p>
            <input type="text" name="city"
            value={reserve.city}
            onChange={handleInputChange} placeholder="enter city..." />
          </div> */}
        </div>
        <div className="date">
          <p>Date:</p>
          <input type="date" name="date" value={reserve.date} onChange={handleInputChange} placeholder="Date" />
        </div>
        <div className="time">
          <p>Time:</p>
          <input type="time" name="time" value={reserve.time} onChange={handleInputChange} placeholder="Time" />
        </div>
        <div className="select-container">
          <select name="doctor" value={reserve.doctor} onChange={handleInputChange} placeholder="Select a doctor" className="select-option">
            <option value="" className="option-item">Select a doctor</option>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.name}
              </option>
            ))}
          </select>
        </div>
        <div className="r-btn">
          <button type="submit" className="rebtn">Reserve</button>
        </div>
      </form>
    </div>
  );
};

export default Reservation;
