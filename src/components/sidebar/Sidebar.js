import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaVine, FaPinterestP } from 'react-icons/fa';
import { TiSocialGooglePlus } from 'react-icons/ti';
import './sidebar.css';

const Sidebar = () => (
    <div className='sidebar_container flex'>
      <div className='sidebar_container-uperhead flex'>
        <div className='sidebar_container-logo'>Logo</div>
        <div className='sidebar_container-list'>
          <ul className='sidebar_list'>
            <li className='sidebar-link'>
              <Link className='sidebar-link-doctor' to='/home'>
                Doctor
              </Link>
            </li>
            <li className='sidebar-link'>
              <Link className='sidebar-link-doctor' to='/reserveform'>
                Reserve
              </Link>
            </li>
            <li className='sidebar-link'>
              <Link className='sidebar-link-doctor' to='/myreservations'>
                Reservations
              </Link>
            </li>
            <li className='sidebar-link'>
              <Link className='sidebar-link-doctor' to='/adddoctor'>
                Add Doctor
              </Link>
            </li>
            <li className='sidebar-link'>
              <Link className='sidebar-link-doctor' to='/deldoctor'>
                Del Doctor
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='sidbar_footer flex'>
        <div className='sidebar_socials flex'>
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
export default Sidebar;
