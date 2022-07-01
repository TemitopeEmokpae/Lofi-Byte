import React, {Component} from 'react'
import {Link, useMatch, useResolvedPath} from 'react-router-dom'
import '../css/NavBar.css'
import JSONDATA from '../Artist.json'
import { useState } from 'react'
export default function NavBar(){
    const [searchTerm, setSearchTerm] = useState('');
        return (
            <div>
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
            <div className='displayS'>
            <input type={'text'} placeholder= "Search.."  className='bar' onChange={event => {setSearchTerm(event.target.value);}}/>
            {JSONDATA.filter((val)=>{
                if(searchTerm == ""){
                    return "";
                } else if(val.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val.first_name;
                }
            }).map((val, key)=>{
                return(
                    <div className='Search' key={key}>
                        {/* <CustomLink to={"/" + val.}>Home</CustomLink> */}
                        <p>{val.first_name}</p>
                    </div>
                );
            })}
            </div>
            </div>
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

