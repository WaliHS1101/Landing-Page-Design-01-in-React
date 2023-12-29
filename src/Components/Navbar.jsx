import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg bg-light navbar-light'>

      <div className="container">

        <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#Nav-Bar">
          <span className='navbar-toggler-icon '></span>
        </button>

        <Link to="/" className="nav-link "><span className="navbar-brand">WHS</span></Link>

        <div id="Nav-Bar" className='collapse navbar-collapse justify-content-end'>

          <ul className='navbar-nav'>

            <li className='nav-item'>
              <Link to="sustainability" className='nav-link'>Sustainability</Link >

            </li>

            <li className='nav-item'>
              <Link to="about" className='nav-link'>About</Link >
            </li>

            <li className='nav-item'>
              <Link to="contact" className='nav-link'>Contact</Link >
            </li>

          </ul>

        </div>

      </div>

    </nav>
  )
}

export default Navbar