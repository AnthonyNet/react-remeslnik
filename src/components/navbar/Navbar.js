import React, {useState} from 'react'
import {BsFillHouseFill} from 'react-icons/bs'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'


import './Navbar.scss'

const Navbar = () => {

    const[click, setClick]= useState(false)
    const handleClick = () => setClick(!click)

 { const bodyEl = document.body;
 click ?  bodyEl.style.overflow = "hidden" :  bodyEl.style.overflow = "scroll";
}

  return (
    <div className='navbar'>
        <div className="container">
            <h1><span><BsFillHouseFill />JanMarek </span>Zednictví</h1>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            
                <li onClick={handleClick}><a href="#a">Domů</a></li>
                <li onClick={handleClick}><a href="#a">Hotová díla</a></li>
                <li onClick={handleClick}><a href="#a">Kontakt</a></li>
                
            </ul>
        
            <div className="hamburger" onClick={handleClick}>
            {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon'/>)}
            </div>
        </div>
    </div>
  )
}

export default Navbar