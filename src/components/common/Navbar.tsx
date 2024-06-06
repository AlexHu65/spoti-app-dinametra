import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon, SearchIcon } from '@chakra-ui/icons'


//assets
import '../assets/css/navbar.css';

const NavBar: React.FC = () => {

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <div className="container">
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
                <Button>
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
      </div>
    </>
  );
};

export default NavBar;