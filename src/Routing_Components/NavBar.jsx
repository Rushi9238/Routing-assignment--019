import React from 'react'
import '../CSS_files/NavBar.css'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <>
    <div className='navbar'>
      <h1>Shopping Mall</h1>
      <ul>
        <NavLink to={'/'}>
        <li>Home</li>
        </NavLink>
        <NavLink to={'/product'}>
        <li>Product</li>
        </NavLink>
        <NavLink to={'/cart'}>
        <li className='count'>Add to cart <span>1</span></li>
        </NavLink>
      </ul>
    </div>
    </>
  )
}

export default NavBar