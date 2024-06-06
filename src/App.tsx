import { Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

//components
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/common/Navbar';
import Stats from './components/Stats';

import './App.css'

function App() {

  return (
    <ChakraProvider>
        <NavBar></NavBar>
        <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </div>
    </ChakraProvider>

  )
}

export default App
