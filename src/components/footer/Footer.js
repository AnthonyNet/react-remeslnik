import React from 'react'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {BsFillEnvelopeFill} from 'react-icons/bs'

import './Footer.scss'

const Footer = () => {
  return (

        <footer>
        <h1>Kontakt:</h1>
        <div className="footerCover">
            <span><BsFillTelephoneFill /><p>775 789 789</p></span>
            <span> <BsFillEnvelopeFill /><p>janmarek@gmail.com</p></span>
        </div>

        
       
        </footer>
   
  )
}

export default Footer