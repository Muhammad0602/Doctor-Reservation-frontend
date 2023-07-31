import React from 'react';
import DoctorForm from './addDoctorForm/DoctorForm';
import './addDoctorForm/doctor.css';

const AddDcotor = () => (
  <div className="add-doctor-container">
    <h1>Add a new Doctor</h1>
    <DoctorForm />
    <embed src="https://lottie.host/?file=e508658a-d3ad-4854-9809-830fd303ce38/tAnKJn1r42.json" className="icon" />
  </div>
);

export default AddDcotor;
