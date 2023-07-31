import React, { useState, useRef } from 'react';
import { Outlet, Link } from 'react-router-dom';
import {
  FaTwitter, FaFacebookF, FaVine, FaPinterestP,
  FaBars, FaTimes,
} from 'react-icons/fa';
import { TiSocialGooglePlus } from 'react-icons/ti';
import './sidebar.css';

const Sidebar = () => {
  const [activeNav, setActiveNav] = useState('/');
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle('responsive');
  };
  return (
    <div className="sidebar_container_items">
      <button className="nav_btn" type="button" onClick={showNavbar}>
        <FaBars />
      </button>
      <div ref={navRef} className="sidebar_container flex">

        <button className="nav_btn nav_btn_close" type="button" onClick={showNavbar}>
          <FaTimes />
        </button>
        <div className="sidebar_container-uperhead flex">
          <div className="sidebar_container-logo">Logo</div>
          <div className="sidebar_container-list">
            <ul className="sidebar_list">
              <li className="sidebar-link">
                <Link
                  onClick={() => setActiveNav('home')}
                  className={activeNav === 'home' ? 'active' : ''}
                  to="/home"
                >
                  Doctor
                </Link>
              </li>
              <li className="sidebar-link">
                <Link
                  onClick={() => setActiveNav('reserveform')}
                  className={activeNav === 'reserveform' ? 'active' : ''}
                  to="/reserveform"
                >
                  Reserve
                </Link>
              </li>
              <li className="sidebar-link">
                <Link
                  onClick={() => setActiveNav('myreservations')}
                  className={activeNav === 'myreservations' ? 'active' : ''}
                  to="/myreservations"
                >
                  Reservations
                </Link>
              </li>
              <li className="sidebar-link">
                <Link
                  onClick={() => setActiveNav('adddoctor')}
                  className={activeNav === 'adddoctor' ? 'active' : ''}
                  to="/adddoctor"
                >
                  Add Doctor
                </Link>
              </li>
              <li className="sidebar-link">
                <Link
                  onClick={() => setActiveNav('delete')}
                  className={activeNav === 'delete' ? 'active' : ''}
                  to="/delete"
                >
                  Del Doctor
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="sidbar_footer flex">
          <div className="sidebar_socials flex">
            <FaTwitter />
            <FaFacebookF />
            <TiSocialGooglePlus />
            <FaVine />
            <FaPinterestP />
          </div>
          <small>&copy; 2023 APPOINTMENT</small>
        </div>

        <Outlet />
      </div>

    </div>
  );
};
export default Sidebar;
