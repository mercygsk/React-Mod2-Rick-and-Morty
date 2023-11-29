import { Link } from "react-router-dom";

import React from 'react'



function Nav() {
  return (
    <div className="nav">
    <Link to="/">
        <div>Rick & Morty </div>
    </Link>
    <Link to="/Characters">
        <div>Episodes</div>
    </Link>
        </div>
  )
}

export default Nav