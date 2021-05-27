import React from 'react'
import './Navegation.css';
import { Link } from 'react-router-dom';
import CartWidget from "../CartWidget/CartWidget";

export const Navegation = () => {
  return (
    <nav className="Navegation">
      <ul className="Navegation-ul">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/Products">
          <li>Productos</li>
        </Link>
        <Link to="/Contact">
          <li>Contacto</li>
        </Link>
        <Link to="/my-orders">
          <li>Mis Compras</li>
        </Link>
        <CartWidget />
      </ul>
    </nav>
  );
};







