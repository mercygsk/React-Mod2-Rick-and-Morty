import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Route and Routes 
import { Route, Routes } from 'react-router-dom';
// import my page components
import Home from './pages/Home';
import Episode from './pages/Episode';
import Characters from './pages/Characters';
import Nav from './components/Nav';
import rick from './mygif/rick.gif';
import R from './mygif/R.png';







function App() {
  

  return (
    <>
      <Nav />
      <div className='pic'> <img src = {rick} alt ={"rick"} /> <img src={R} /></div>
    <div className='App'>
    <Routes>
    <Route path='/' element={<Home/>} />
        <Route path='/Characters' element={<Characters/>} />
        <Route path='/Episode/:symbol' element={<Episode/>} />
    </Routes>
    </div>
    
    </>
  )
}

export default App
