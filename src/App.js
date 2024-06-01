import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Login  from './components/Login.jsx';
import HomePage from './components/HomePage.jsx';
import Theme from './components/Theme.jsx';
import Api from './components/Api.jsx';
import { ChakraProvider } from '@chakra-ui/react'
 
function App() {
  return (
      <ChakraProvider>
      <Router>
      <Theme/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/api" element={<Api />} />
      </Routes>  
      </Router>
      </ChakraProvider>
  )
}
export default App
