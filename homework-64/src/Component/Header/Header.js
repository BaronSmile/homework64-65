import React from 'react';
import './Header.css'
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <div className='header'>
      <h1 className='logo'>Homework<sup>64</sup></h1>
      <ul>
        <NavLink to='/'>ToDolist</NavLink>
        <NavLink to='movie'>Movie</NavLink>
        <NavLink to='personal'>Personal notes</NavLink>
      </ul>
    </div>
  );
};

export default Header;