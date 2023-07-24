import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteDoctor, getDoctors } from '../redux/doctors/doctorsSlice';

function DeleteDoctor() {
  const { doctors, isLoading, error } = useSelector((store) => store.doctors);
  console.log(doctors)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDoctors());
  }, [dispatch]);

  const handleDeleteDoctor = (doctorId) => {
    dispatch(deleteDoctor(doctorId));
  };

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
    <div className="delete-doctor">
        <h1>Delete me if you want</h1>
      {doctors.map((doctor) => (
        <div className="doctor-info" key={doctor.id}>
          <img className="photo" src={doctor.photo} alt={doctor.name} />
          <h2>{doctor.name}</h2>
          <button onClick={() => handleDeleteDoctor(doctor.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default DeleteDoctor;