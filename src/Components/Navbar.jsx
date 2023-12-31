import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg bg-light navbar-light p-3'>

      <div className="container">

        <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#Nav-Bar">
          <span className='navbar-toggler-icon '></span>
        </button>

        <Link to="/" className="nav-link "><span className="navbar-brand"><b>WHS</b></span></Link>

        <div id="Nav-Bar" className='collapse navbar-collapse justify-content-end'>

          <ul className='navbar-nav ms-3'>

            <li className='nav-item'>
              <Link to="sustainability" className='nav-link'><b>Sustainability</b></Link >
            </li>

            <li className='nav-item'>
              <Link to="about" className='nav-link'><b>About</b></Link >
            </li>

            <li className='nav-item'>
              <Link to="contact" className='nav-link'><b>Contact</b></Link >
            </li>

          </ul>

          <div className='dropdown'>
            <button className='btn btn-light' type="button" data-bs-toggle="dropdown">
              <b>All Products</b>
            </button>
            <ul className='dropdown-menu'>
              <li className=''>
                <Link to="mobile" className='dropdown-item'>Mobile</Link>
              </li>
            </ul>

          </div>

        </div>

      </div>

    </nav>
  )
}

export default Navbar