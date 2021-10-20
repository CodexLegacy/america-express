import React from 'react'
import styled from 'styled-components';

const NavLinkItems = styled.div`
/* height: 100%; */
padding: 20px 0;
 display: flex;
 justify-content: space-between;
 align-items: center;
`;

const NavLink = styled.a`
  text-decoration: none;
  padding: 32px 10px;
  font-weight: 400;
  color: #000000;
  cursor: pointer;
  border-bottom: 8px solid transparent;
  transition: all 400ms ease;


  
  &:hover {
    color: #326FC9;
    border-bottom: 8px solid  #FEB348;
  } 
`;

const NavLinks = () => {
  return (
    <NavLinkItems>
        <NavLink href="#">Certification v</NavLink>
        <NavLink href="#">About Us</NavLink>
        <NavLink href="#">Explore Cities</NavLink>
        <NavLink href="#">Meet Our Partners</NavLink>
        <NavLink href="#">Login</NavLink>
        <NavLink href="#">Sign Up</NavLink>
    </NavLinkItems>
  )
}

export default NavLinks
