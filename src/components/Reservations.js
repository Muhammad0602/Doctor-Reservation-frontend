import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { getReservations } from '../redux/reservations/reservationsSlice';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import 'bootstrap/dist/css/bootstrap.min.css';
import './reservation.css';

const formatAppointmentTime = (appointmentTime) => {
  const date = new Date(appointmentTime);
  const day = date.getDate();
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return `${day} ${month}, ${year} ${hour}:${minute}:${second}`;
};
const Reservations = () => {
  const { reservations, isLoading, error } = useSelector((store) => store.reservations);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReservations());
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
        {reservations.map((reservation) => (
          <SwiperSlide className="reservation-info flex" key={reservation.id}>
            <img className="photo" src={reservation.photo} alt={reservation.name} />
            <h1>{reservation.doctor_name}</h1>
            <div className="redetails">
              <p>{reservation.city}</p>
              <p>{reservation.appointment_date}</p>
              <p>{formatAppointmentTime(reservation.appointment_time)}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Reservations;
