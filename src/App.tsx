import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

//components
import Home from './components/Home';
import About from './components/About';
import Stats from './components/Stats';
import NavBar from './components/common/NavBar';
import SideBar from './components/common/SideBar';

import './App.css'

function App() {

  const [drawer, setDrawer] = useState(false);

  return (
    <ChakraProvider>
        <NavBar setDrawer={setDrawer}/>
        <SideBar drawer={drawer} setDrawer={setDrawer}/>
        <div className="App">
            <div className="mt-5 mt-fixed">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/stats" element={<Stats />} />
              </Routes>
            </div>
        </div>
    </ChakraProvider>
  )
}

export default App
