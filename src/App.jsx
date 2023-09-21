import { useState } from 'react'

import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import './App.css'



// Components

import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Product from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar/>
      <Routes>
          <Route path='/'  element={<Home/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/products' element={<Product/>} />
          <Route path='/sign-up' element={<SignUp/>} />
      </Routes>
    </Router>
  )
}

export default App
