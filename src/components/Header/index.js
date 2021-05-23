import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Header = () => {
  return (
    <header className="Header">
      <ul>        
        <Link to="/" className="nav-link">
          <li>
            Home
          </li>
        </Link>
        <Link to="/r2" className="nav-link">
          <li>
            R2
          </li>
        </Link>
        <Link  to="/r3" className="nav-link">
          <li>
            R3
          </li>
        </Link>
        <Link to="/r4" className="nav-link">
          <li>
            R4
          </li>
        </Link>        
      </ul>
    </header>
  )
}

export default Header;
