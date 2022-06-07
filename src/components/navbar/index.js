import React from 'react';
import {
  Nav,
  NavLink,
  NavLinkLogo,
  Bars,
  NavMenu,
  // NavBtn,
  // NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLinkLogo to='/'>
          <img src={require('../../media/favicon.png')} alt='logo' 
          style={{ width: 90, height: 90, marginBottom: 15, marginTop: 40 }}/>
        </NavLinkLogo>
        <Bars />
        <NavMenu>
          <NavLink to='/transport' activeStyle>
            Transportation Type
          </NavLink>
          <NavLink to='/rutas' activeStyle>
            Routes
          </NavLink>
          <NavLink to='/history' activeStyle>
            Ride History
          </NavLink>
          <NavLink to='/confi' activeStyle>
            Settings
          </NavLink>
          <NavLink to='/help' activeStyle>
            Help
          </NavLink>
          <NavLink to='/about' activeStyle>
            About Us
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;