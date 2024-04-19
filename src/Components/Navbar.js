import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/'>Gsons India</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item" >
                <Link className="nav-link " aria-current="page" to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/about'>About</Link>
              </li>
              <li className="nav-item"  >
                <Link className="nav-link" to='/catelog'>Catelogs</Link>
              </li>
              <li className="nav-item" >
                <Link className="nav-link" to='/products'>Product</Link>
              </li>
              <li className="nav-item" >
                <Link className="nav-link" to='/team'>Team</Link>
              </li>
              <li className="nav-item" >
                <Link className="nav-link" to='/contact'>Contact</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar