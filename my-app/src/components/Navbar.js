import React,{useState} from 'react';
import "./Navbarstyle.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='header'>
        <Link to="/">
            <h1>AppName</h1>
        </Link>
     <ul className='nav-menu'>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/calculator">Calculator</Link>
      </li>
      <li>
        <Link to="/dictionary">Dictionary</Link>
      </li>
      <li>
        <Link to="/explore">Explore</Link>
      </li>
     </ul>

    </div>
  )
}

export default Navbar