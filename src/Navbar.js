import React from 'react'
import styled from 'styled-components'
import user from './images/user.svg'
import search from './images/search.svg'
import logo from './images/logo.svg'
import NavLinks from './NavLinks'
import { useMediaQuery } from 'react-responsive'
import { deviceSize } from './responsive'
import MobileNavLinks from './navbarMobile/MobileNavLinks'

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 50px 35px;
  background-color: #FFFFFF;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  position: relative;

  @media screen and (max-width: ${deviceSize.mobile}px) {
     justify-content: center;
     align-items: center;
  }

  
`;

const NavLogo = styled.div`
  width: 200px;
  height: auto;
  z-index: 9000;
img {
  width: 100%;
  height: 100%;
}

@media screen and (max-width: ${deviceSize.mobile}px) {
  width: 150px;
  height: 50px;
  margin-right: 40px;
  }
`;

// const NavLinks = styled.div`
// height: 100%;
// padding: 5px 0;
//  display: flex;
//  justify-content: space-between;
//  align-items: center;
// `;

// const NavLink = styled.a`
//   text-decoration: none;
//   padding: 15px 10px;
//   font-weight: 400;
//   color: #000000;
//   cursor: pointer;
//   border-bottom: 2px solid transparent;
//   transition: all 400ms ease;

  
//   &:hover {
//     color: #326FC9;
//     border-bottom: 2px solid  #326FC9;
//   }
// `;

const NavIcons = styled.div`
  display: flex;

  img  {
    width: 50px;
    padding: 0 10px;
    padding-left: 15px;
    cursor: pointer;
    z-index: 9000;
  }
`;

const Navbar = (props) => {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const isDesktop = useMediaQuery({ maxWidth: deviceSize.desktop });
  
  return (
    <Nav>
      <NavLogo>
        <img src={logo} alt="logo" />
      </NavLogo>
      {/* <NavLinks>
        <NavLink href="#">Certification v</NavLink>
        <NavLink href="#">About Us</NavLink>
        <NavLink href="#">Explore Cities</NavLink>
        <NavLink href="#">Meet Our Partners</NavLink>
        <NavLink href="#">Login</NavLink>
        <NavLink href="#">Sign Up</NavLink>
      </NavLinks> */}
      {!isMobile && !isDesktop && (<NavLinks />)}
      <NavIcons>
        <img src={user} alt="user" />
        <img src={search} alt="search" />
      </NavIcons>

      {isDesktop && (<MobileNavLinks />)}
    </Nav>
    
  )
}

export default Navbar
