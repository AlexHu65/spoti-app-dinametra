import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon, SearchIcon } from '@chakra-ui/icons'

//assets
import '../assets/css/navbar.css';

interface NavBarProps {
  setDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar: React.FC<NavBarProps> = ({setDrawer}) => {

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
        <nav>
            <ul>
              <li>
                <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/stats" className={({ isActive }) => isActive ? 'active' : ''}>
                  Estadisticas
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
                  About
                </NavLink>
              </li>
              <li>
                <Button onClick={() => setDrawer(prevDrawer =>  !prevDrawer)}>
                  <SearchIcon/>
                </Button>
              </li>
              <li>
                <Button onClick={toggleColorMode}>
                  {colorMode === 'light' ? <MoonIcon className='deep-blue'/> : <SunIcon className='yellow'/>}
                </Button>
              </li>
            </ul>
          </nav>
    </>
  );
};

export default NavBar;
