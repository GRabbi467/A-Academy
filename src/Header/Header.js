import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import logo from '../free-logo2.svg'


const Header = () => {
    return (
    <nav className='header'>

    <div className="logo-title">
    <img src={logo} alt="" />
    <p className='title'>A+ Academy</p>
    </div>


    <div className="header-links">
           <Link to = '/'>Home</Link>
           <Link to = '/course'>Courses</Link>
           <Link to = '/blog'>Blog</Link>
           <NavDropdown
              id="nav-dropdown-dark-example"
              title="FAQ"
              menuVariant="dark"
            >
              <NavDropdown.Item Link to="#">Action</NavDropdown.Item>
              <NavDropdown.Item Link to="#">Another action</NavDropdown.Item>
              <NavDropdown.Item Link to="#">Something</NavDropdown.Item>
            </NavDropdown>
           <Link to = '/about'>About</Link>
    </div>

    </nav> 
    );
};

export default Header;