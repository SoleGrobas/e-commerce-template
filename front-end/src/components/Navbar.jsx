import React from 'react'
import logo from '../assets/logo.svg'

function Navbar() {
  return (
    <div>
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
            </button>
            <img className="navbar-app-icon" src={logo} alt="Icono Menú de Navegación" />
            <a className="navbar-brand" href="#">Logo</a>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Products
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="/">Products List</a></li>
                        <li><a className="dropdown-item" href="/create">Create Product </a></li>
                    
                      </ul>
                    </li>
                    <li className="nav-item">
                     <a className="nav-link" href="/categories">Categories</a>
                    </li>
                    <li className="nav-item">
                     <a className="nav-link" href="#">Orders</a>
                    </li>
                    <li className="nav-item">
                     <a className="nav-link" href="#">Clients</a>
                    </li>
                </ul>
                <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
        </nav>
    </div>
  )
};

export default Navbar;


