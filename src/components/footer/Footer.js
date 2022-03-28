import React from 'react'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {BsFillEnvelopeFill} from 'react-icons/bs'

import './Footer.scss'

const Footer = () => {
  return (
    <div>
        <footer>
        <h1>Kontakt:</h1>
        <div className="footer">
            <span><BsFillTelephoneFill /><p>775 789 789</p></span>
            <span> <BsFillEnvelopeFill /><p>janmarek@gmail.com</p></span>
        </div>
       
        </footer>
    </div>
  )
}

export default Footer