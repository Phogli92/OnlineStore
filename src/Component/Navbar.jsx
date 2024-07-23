import React from 'react'
import '../App.css'
import {NavLink } from 'react-router-dom'
import { color, style } from 'd3'
export default function Navbar() {
    const navLinkStyles = ({isActive})=>({
        color:isActive ? 'red':'black',
        textDecoration:isActive? 'underline':'none'
    })
  return (
    <div className="Navbar">
        <div className="logo">
            <h1>Logo</h1>
        </div>
        <div className="links">
            <NavLink to='/' style={navLinkStyles}>Home</NavLink>
            <NavLink to='/about' style={navLinkStyles}>About</NavLink>
        </div>
    </div>
  )
}
