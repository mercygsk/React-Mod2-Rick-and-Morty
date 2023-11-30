import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import Route and Routes 
import { Route, Routes } from 'react-router-dom';
// import my page components
import Home from './pages/Home';
import Actor from './pages/Actor';
import Characters from './pages/Characters';
import Nav from './components/Nav';
import rick from './mygif/rick.gif';
import R from './mygif/R.png';
import rick3 from './mygif/rick3.gif'
import Footer from './components/Footer';


function App() {


  return (
    <>
      <Nav />
      <div className='pic'> <img src = {rick} alt ={"rick"} /> <img src={R} /><img src={rick3} /> </div>
      <div className='App'>
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/Characters' element={<Characters/>} /> 
        <Route path='/:character' element={<Actor/>} />
        <Route path='/infoCharacters/:id' element={<Characters/>} />
    </Routes>
    </div>
    <div>  <Footer/> </div>
    </>
  )
}

export default App
