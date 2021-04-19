
import React from 'react';
import './Header.css';
import image from '../Header/logo-1.png';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="Header">
      <h1>
      <Link to="/">
        <img src={image} alt="logo" width="200" />
      </Link>
      </h1>
    </div>

  );
};
