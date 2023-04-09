import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'
import { Link } from 'react-router-dom';
import logo from '../free-logo2.svg'
import Authprovider, { AuthContext } from '../Context/Authprovide/Authprovider';


const Header = () => {
  const {user} = useContext(AuthContext);
    return (
    <nav className='header'>

    <div className="logo-title">
    <img src={logo} alt="" />
    <p className='title'>A+ Academy</p>
    </div>


    <div className="header-links font-semibold">
           <Link to = '/'>Home</Link>
           <Link to = '/courses'>Courses</Link>
           <Link to = '/blog'>Pricing</Link>
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
           {/* <Link>{user?.user}</Link> */}
           <Link to = 'signup'>SignUp</Link>
    </div>

    </nav> 
    );
};

export default Header;