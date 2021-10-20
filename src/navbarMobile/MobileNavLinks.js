import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { SidebarData } from '../SidebarData';
import logo from '../images/logo.svg'
import user from '../images/user.svg'
import search from '../images/search.svg'
import { useMediaQuery } from 'react-responsive'
import './MobileNavLinks.css';
import { deviceSize } from '../responsive';


const MobileNavLinks = () => {
  const isDesktop = useMediaQuery({ maxWidth: deviceSize.desktop });
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      {/* <div className="navbar"> */}
   
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items"  onClick={showSidebar}>
          <li className="navbar-toggle">
            
            <div className="nav-logo">
             <img src={logo} alt="logo" />
           </div>
            <div className="navbar-toggle-icon">
              <img src={user} alt="user" />
              <img src={search} alt="search" />   
            </div>
              
            
            <div>
            <Link to="#" className='menu-bars'>
                <AiIcons.AiOutlineClose className='menu-bars-icon' />
            </Link>
            </div>
            </li>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path} className='nav-text-link'>
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      {/* </div> */}
    </>
  )
}

export default MobileNavLinks
