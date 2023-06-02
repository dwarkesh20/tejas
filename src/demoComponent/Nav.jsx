import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <div>
        <nav className="navbar">
        <ul className="nav-links">
            <li><Link to="/home" className="navbar-link">Home</Link></li>
            <li><Link to="/class" className="navbar-link">Class</Link></li>
            <li><Link to="/count" className="navbar-link">Count</Link></li>
            <li><Link to="/array" className="navbar-link">Array</Link></li>
            <li><Link to="/demoevent" className="navbar-link">DemoEvent</Link></li>
            <li><Link to="/nav" className="navbar-link">Nav</Link></li>
        </ul>
        </nav>
    </div>
  )
}
