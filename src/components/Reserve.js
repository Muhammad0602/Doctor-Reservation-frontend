import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createReserve } from '../redux/reservations/ReservationSlice';
import { getDoctors } from '../redux/doctors/doctorsSlice';

const Reservation = () => {
  const doctors = useSelector((state) => state.Doctor.doctors);
  const storage = localStorage.getItem('token');
  const patient = JSON.parse(storage);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDoctors());
  }, [dispatch]);

  const [reserve, setReserve] = useState({
    patient_id: patient.id || '',
    city: '',
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
      city, date, time, doctor,
    } = reserve;

    if (!city || !date || !time || !doctor) {
      alert('Please fill in all the required fields.');
      return;
    }

    try {
      const payload = {
        ...reserve,
        patient_id: patient.id,
      };

      // Dispatch the createReserve action to make the reservation request
      await dispatch(createReserve(payload));
      alert('Reservation created successfully!');
      navigate('/reserve'); // Redirect to the reserve page after successful reservation
    } catch (error) {
      alert('Error occurred while making a reservation.');
      alert('Error occurred while making a reservation.');
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Reservation Page</h1>
      <form onSubmit={submit}>
        <div>
          <h2>Make a reservation with us</h2>
          <input type="text" name="city" value={reserve.city} onChange={handleInputChange} placeholder="City" />
        </div>
        <div>
          <input type="date" name="date" value={reserve.date} onChange={handleInputChange} placeholder="Date" />
        </div>
        <div>
          <input type="time" name="time" value={reserve.time} onChange={handleInputChange} placeholder="Time" />
        </div>
        <div>
          <select name="doctor" value={reserve.doctor} onChange={handleInputChange} placeholder="Select a doctor">
            <option value="">Select a doctor</option>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Reserve Appointment</button>
      </form>
    </div>
  );
};

export default Reservation;
