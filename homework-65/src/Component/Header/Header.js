import React from 'react';
import {NavLink} from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <h1 className='logo'>Homework<sup>65</sup></h1>
      <ul>
        <NavLink to="/pages/home">Home</NavLink>
        <NavLink to="/pages/about">About</NavLink>
        <NavLink to="/pages/contacts">Contacts</NavLink>
        <NavLink to="/pages/catalog">Catalog</NavLink>
        <NavLink to="/pages/admin">My Admin</NavLink>
      </ul>

    </div>
  );
};

export default Header;