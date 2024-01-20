import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='navbar'>
      <img src="https://preview.colorlib.com/theme/wines/images/logo.png" alt="" />
      <div className="navbarLinks">
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><a href="">About</a></li>
          <li><a href="">Wines</a></li>
          <li><a href="">Shop</a></li>
          <li><a href="">Contact</a></li>
          <li><Link to={"/add"}>Add</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header