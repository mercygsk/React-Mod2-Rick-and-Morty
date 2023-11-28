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

function App() {
  

  return (
    <>
    <div className='App'>
     <Nav />
     <div className='pic'><h1>Hello</h1></div>
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
