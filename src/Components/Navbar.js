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
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/'>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/'>Catelogs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/'>Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/'>Team</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/'>Contact</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar