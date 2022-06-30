import React, {Component} from 'react'
import {Link, useMatch, useResolvedPath} from 'react-router-dom'
import '../css/NavBar.css'
export default function NavBar(){
        return (
            <nav className='nav_item'>
            <Link to='/' className='title' style={{color: '#D6DDF1', paddingLeft: '20px'}}>Lofi-byte</Link>
            <div className='menu-icon'></div>
            <ul>
                <CustomLink to= "/Home">Home</CustomLink>
                <CustomLink to= "/Songs">Songs</CustomLink>
                <CustomLink to= "/Albums">Albums</CustomLink>
                <CustomLink to= "/Artists">Artists</CustomLink>
            </ul>
            </nav>
          )
  
}

function CustomLink ({ to, children, ...props}){
    const resolvePath = useResolvedPath(to)
    const isActive = useMatch({path: resolvePath.pathname, end: true})

    return (
        <li className= {isActive?' active' : ""}>
            <Link to= {to} {...props}>{children}</Link>
        </li>
    )
}

