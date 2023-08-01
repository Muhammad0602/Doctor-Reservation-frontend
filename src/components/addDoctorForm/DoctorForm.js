import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDoctor } from '../../redux/doctors/doctorsSlice';
import { useNavigate } from 'react-router-dom';

const DoctorForm = () => {
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [photo, setPhoto] = useState('');
  const [price, setPrice] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector((state) => state.doctors.status);
  const error = useSelector((state) => state.doctors.error);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && about && price) {
      dispatch(addDoctor({
        name, about, photo, price,
      }));
      navigate("/home");
      setName('');
      setAbout('');
      setPhoto('');
      setPrice('');
    }
  };

  return (
    <div className="form-container">
      {status === 'failed' && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input type="text" value={photo} onChange={(e) => setPhoto(e.target.value)} placeholder="Photo (URL)" />
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price per hour" />
        <textarea type="text" value={about} onChange={(e) => setAbout(e.target.value)} placeholder="About" />
        <button type="submit" disabled={status === 'loading'}>
          Add Doctor
        </button>
      </form>
    </div>
  );
};

export default DoctorForm;
