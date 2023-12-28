import React from 'react'

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg bg-light navbar-light'>

      <div className="container">

        <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#Nav-Bar">
          <span className='navbar-toggler-icon '></span>
        </button>

        <h1 className="navbar-brand">WHS</h1>

        <div id="Nav-Bar" className='collapse navbar-collapse justify-content-around'>

          <ul className='navbar-nav'>

            <li className='nav-item'>
              <a href="#" className='nav-link'>Sustainability</a>
            </li>

            <li className='nav-item'>
              <a href="#" className='nav-link'>About</a>
            </li>

            <li className='nav-item'>
              <a href="#" className='nav-link'>Contact</a>
            </li>

          </ul>

        </div>

      </div>

    </nav>
  )
}

export default Navbar