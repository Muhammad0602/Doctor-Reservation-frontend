import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDoctor } from '../../redux/doctors/doctorsSlice';
import './doctor.css';

const DoctorForm = () => {
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [photo, setPhoto] = useState('');
  const [price, setPrice] = useState('');
  const dispatch = useDispatch();
  const status = useSelector((state) => state.doctors.status);
  const error = useSelector((state) => state.doctors.error);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && about && price) {
      dispatch(addDoctor({
        name, about, photo, price,
      }));
      setName('');
      setAbout('');
      setPhoto('');
      setPrice('');
    }
  };

  return (
    <div className="from-container">
      <h2>Add a Doctor</h2>
      {status === 'failed' && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" value={about} onChange={(e) => setAbout(e.target.value)} />
        <input type="text" value={photo} onChange={(e) => setPhoto(e.target.value)} />
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        <button type="submit" disabled={status === 'loading'}>
          Add Doctor
        </button>
      </form>
    </div>
  );
};

export default DoctorForm;
