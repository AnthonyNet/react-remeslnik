import React, {useState} from 'react'
import {Link} from 'react-scroll';
import {BsFillHouseFill} from 'react-icons/bs'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'


import './Navbar.scss'

const Navbar = () => {

    const[click, setClick]= useState(false)
    const handleClick = () => setClick(!click)

 { const bodyEl = document.body;
  !click  ?  bodyEl.style.overflow = "scroll" :  bodyEl.style.overflow = "hidden";
}

  return (
    <div className='navbar'>
        <div className="container">
            <h1><span><BsFillHouseFill />JanMarek </span>Zednictví</h1>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            
                <li><Link onClick={handleClick} >Domů</Link></li>
                <li><Link onClick={handleClick} to="featured" smooth={true} offset={50} duration={500}>Hotová díla</Link></li>
                <li><Link onClick={handleClick} to="slider" smooth={true} offset={50} duration={500}>Galerie</Link></li>
                
            </ul>
        
            <div className="hamburger" onClick={handleClick}>
            {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon'/>)}
            </div>
        </div>
    </div>
  )
}

export default Navbar