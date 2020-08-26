import React from 'react';
import HRCpic from '../../assets/HRC(2).png';
import '../../styles/index.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="nav-div">
      <nav className="nav-bar">
        <div className="HRClogo">
          <div className="logo-img-div">
            <Link to="/">
              <img src={HRCpic} className="logo-img" alt="HRC logo" />
            </Link>
          </div>
          <div className="logo-text-div">
            <h3 className="logo-text">
              Human <br /> Rights <br /> Considered
            </h3>
          </div>
        </div>
        <a href="/signup">Sign Up</a>
      </nav>
    </div>
  );
};
export default NavBar;
