import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createReserve } from "../redux/reservations/ReservationSlice";
import { getDoctors } from "../redux/doctors/DoctorSlice";


const Reservation = () => {
  const doctors = useSelector((state) => state.Doctor.doctors);
  const storage = localStorage.getItem("token");
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
    const { city, date, time, doctor } = reserve;

    if (!city || !date || !time || !doctor) {
      alert("Please fill in all the required fields.");
      return;
    }

    try {
      const payload = {
        ...reserve,
        patient_id: patient.id,
      };

      // Dispatch the createReserve action to make the reservation request
      await dispatch(createReserve(payload));
      alert("Reservation created successfully!");
      navigate('/reserve'); // Redirect to the reserve page after successful reservation
    } catch (error) {
      alert("Error occurred while making a reservation.");
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Reservation Page</h1>
      <form onSubmit={submit}>
        <div>
          <h2>Make a reservation with us</h2>
          <label>City:</label>
          <input type="text" name="city" value={reserve.city} onChange={handleInputChange} />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" name="date" value={reserve.date} onChange={handleInputChange} />
        </div>
        <div>
          <label>Time:</label>
          <input type="time" name="time" value={reserve.time} onChange={handleInputChange} />
        </div>
        <div>
          <label>Doctor:</label>
          <select name="doctor" value={reserve.doctor} onChange={handleInputChange}>
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
