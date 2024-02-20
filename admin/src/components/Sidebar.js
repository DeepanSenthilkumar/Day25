import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg'; // Import your logo image

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav>
        <ul>
        <li><Link to="/">Dashboard</Link></li>
          <li className="sidebar-heading">Components</li>
          <ul>
            <li><Link to="/forms">Forms</Link></li>
            <li><Link to="/tables">Tables</Link></li>
            <li><Link to="/charts">Charts</Link></li>
            <li><Link to="/buttons">Buttons</Link></li>
            <li><Link to="/cards">Cards</Link></li>
            {/* Add other component fields here */}
          </ul>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
