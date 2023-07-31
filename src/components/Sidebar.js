import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import {
  FaTwitter, FaFacebookF, FaVine, FaPinterestP,
} from 'react-icons/fa';
import { TiSocialGooglePlus } from 'react-icons/ti';
import './sidebar.css';

const Sidebar = () => {
  const [activeNav, setActiveNav] = useState('/');
  return (
    <div className="sidebar_container flex">
      <div className="sidebar_container-uperhead flex">
        <div className="sidebar_container-logo">Logo</div>
        <div className="sidebar_container-list">
          <ul className="sidebar_list">
            <li className="sidebar-link">
              <Link onClick={() => setActiveNav('home')} className={activeNav === 'home' ? 'active' : ''} to="/home">
                Doctor
              </Link>
            </li>
            <li className="sidebar-link">
              <Link onClick={() => setActiveNav('reserve')} className={activeNav === 'reserve' ? 'active' : ''} to="/reserve">
                Reserve
              </Link>
            </li>
            <li className="sidebar-link">
              <Link onClick={() => setActiveNav('myreservations')} className={activeNav === 'myreservations' ? 'active' : ''} to="/myreservations">
                Reservations
              </Link>
            </li>
            <li className="sidebar-link">
              <Link onClick={() => setActiveNav('adddoctor')} className={activeNav === 'adddoctor' ? 'active' : ''} to="/adddoctor">
                Add Doctor
              </Link>
            </li>
            <li className="sidebar-link">
              <Link onClick={() => setActiveNav('delete')} className={activeNav === 'delete' ? 'active' : ''} to="/delete">
                Del Doctor
              </Link>
            </li>
            <li className="sidebar-link">
              <Link onClick={() => setActiveNav('login')} className={activeNav === 'login' ? 'active' : ''} to="/login">
                Login
              </Link>
            </li>
            <li className="sidebar-link">
              <Link onClick={() => setActiveNav('signup')} className={activeNav === 'signup' ? 'active' : ''} to="/signup">
                Sign up
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
  );
};
export default Sidebar;
