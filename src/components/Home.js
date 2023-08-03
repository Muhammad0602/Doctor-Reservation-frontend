import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { getDoctors } from '../redux/doctors/doctorsSlice';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const { doctors, isLoading, error } = useSelector((store) => store.doctors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDoctors());
  }, [dispatch]);

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
    <div className="container py-4 px-4 justify-content-center">
      <Swiper
        navigation
        slidesPerView={1}
        spaceBetween={60}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 2,
          },
          600: {
            slidesPerView: 1,
          },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {doctors.map((doctor) => (
          <SwiperSlide className="doctor-info" key={doctor.id}>
            <Link to={`/${doctor.id}`} className="link">
              <img className="photo" src={doctor.photo} alt={doctor.name} />
              <h2>{doctor.name}</h2>
              <p>{doctor.about}</p>
              <p>
                Buy one hour of time with only $
                {doctor.price_hour}
              </p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home;
