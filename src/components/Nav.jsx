import { Link } from "react-router-dom";

import React from 'react'



function Nav() {
  return (
    <header className="H">
    <div className="nav" >
    <Link to="/">
        <div>Rick & Morty </div>
    </Link>
    <Link to="/Characters">
        <div>Characters</div>
    </Link>
   </div>
   </header>
  )
}

export default Nav