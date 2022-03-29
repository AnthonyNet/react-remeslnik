import React, {useState} from 'react'

import './Slider.scss'


import House1 from '../../assets/fasady-obklady/1.jpg'
import House2 from '../../assets/fasady-obklady/2.jpg'
import House3 from '../../assets/fasady-obklady/3.jpg'
import House4 from '../../assets/fasady-obklady/4.jpg'
import House5 from '../../assets/fasady-obklady/5.jpg'
import House6 from '../../assets/fasady-obklady/6.jpg'

import House7 from '../../assets/fasady-obklady/7.jpg'
import House8 from '../../assets/fasady-obklady/8.jpg'
import House9 from '../../assets/fasady-obklady/9.jpg'
import House10 from '../../assets/fasady-obklady/10.jpg'
import House11 from '../../assets/fasady-obklady/11.jpg'
import House12 from '../../assets/fasady-obklady/12.jpg'

import House13 from '../../assets/fasady-obklady/13.jpg'
import House14 from '../../assets/fasady-obklady/14.jpg'
import House15 from '../../assets/fasady-obklady/15.jpg'
import House16 from '../../assets/fasady-obklady/16.jpg'
import House17 from '../../assets/fasady-obklady/17.jpg'
import House18 from '../../assets/fasady-obklady/18.jpg'

import Obklad1 from '../../assets/obklady/1.jpg'
import Obklad2 from '../../assets/obklady/2.jpg'
import Obklad3 from '../../assets/obklady/3.jpg'
import Obklad4 from '../../assets/obklady/4.jpg'
import Obklad5 from '../../assets/obklady/5.jpg'
import Obklad6 from '../../assets/obklady/6.jpg'
import Obklad7 from '../../assets/obklady/7.jpg'

import Koupelna1 from '../../assets/koupelny/1.jpg'
import Koupelna2 from '../../assets/koupelny/2.jpg'
import Koupelna3 from '../../assets/koupelny/3.jpg'
import Koupelna4 from '../../assets/koupelny/4.jpg'
import Koupelna5 from '../../assets/koupelny/5.jpg'
import Koupelna6 from '../../assets/koupelny/6.jpg'

import Kuchyn1 from '../../assets/kuchyne/1.jpg'
import Kuchyn2 from '../../assets/kuchyne/2.jpg'
import Kuchyn3 from '../../assets/kuchyne/3.jpg'
import Kuchyn4 from '../../assets/kuchyne/4.jpg'
import Kuchyn5 from '../../assets/kuchyne/5.jpg'
import Kuchyn6 from '../../assets/kuchyne/6.jpg'

import Ostatni1 from '../../assets/ostatni/1.jpg'
import Ostatni2 from '../../assets/ostatni/2.jpg'
import Ostatni3 from '../../assets/ostatni/3.jpg'
import Ostatni4 from '../../assets/ostatni/4.jpg'
import Ostatni5 from '../../assets/ostatni/5.jpg'
import Ostatni6 from '../../assets/ostatni/6.jpg'
import Ostatni7 from '../../assets/ostatni/7.jpg'
import Ostatni8 from '../../assets/ostatni/8.jpg'
import Ostatni9 from '../../assets/ostatni/9.jpg'
import Ostatni10 from '../../assets/ostatni/10.jpg'
import Ostatni11 from '../../assets/ostatni/11.jpg'
import Ostatni12 from '../../assets/ostatni/12.jpg'
import Ostatni13 from '../../assets/ostatni/13.jpg'
import Ostatni14 from '../../assets/ostatni/14.jpg'
import Ostatni15 from '../../assets/ostatni/15.jpg'
import Ostatni16 from '../../assets/ostatni/16.jpg'
import Ostatni17 from '../../assets/ostatni/17.jpg'
import Ostatni18 from '../../assets/ostatni/18.jpg'
import Ostatni19 from '../../assets/ostatni/19.jpg'
import Ostatni20 from '../../assets/ostatni/20.jpg'
import Ostatni21 from '../../assets/ostatni/21.jpg'





const Slider = () => {

    const imagesAll = document.querySelectorAll('.gallery-tabs img');
    console.log(imagesAll);
    
    imagesAll.forEach(image=>{
    image.addEventListener('mouseenter', function(){
        image.classList.remove('normal')
        image.classList.add('show')
        
    })
    image.addEventListener('mouseleave', function(){
        image.classList.remove('show')
        image.classList.add('normal')
    })
    })
    
    
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }

    
  return (
    <div>

        <div className="container containerSlider">
            
                <ul className='menu-tabs'>
                    <li className='tabs' 
                    onClick={() => toggleTab(1)}>Fasády</li>
                    <li className='tabs' onClick={() => toggleTab(2)}>Obklady</li>
                    <li className='tabs' onClick={() => toggleTab(3)}>Koupelny</li>
                    <li className='tabs' onClick={() => toggleTab(4)}>Kuchyně, krby</li>
                    <li className='tabs' onClick={() => toggleTab(5)}>Ostatní</li>
                </ul>
          

        <div className="gallery-tabs">
         
          <div className={toggleState === 1 ? 'gallery activeS' : 'gallery'}>

            <span> <img src={House1} alt="" /></span>
            <span> <img src={House2} alt="" /></span>
            <span> <img src={House3} alt="" /></span>
            <span> <img src={House4} alt="" /></span>
            <span> <img src={House5} alt="" /></span>
            <span> <img src={House6} alt="" /></span>
            <span> <img src={House7} alt="" /></span>
            <span> <img src={House8} alt="" /></span>
            <span> <img src={House9} alt="" /></span>
            <span> <img src={House10} alt="" /></span>
            <span> <img src={House11} alt="" /></span>
            <span> <img src={House12} alt="" /></span>
            <span> <img src={House13} alt="" /></span>
            <span> <img src={House14} alt="" /></span>
            <span> <img src={House15} alt="" /></span>
            <span> <img src={House16} alt="" /></span>
            <span> <img src={House17} alt="" /></span>
            <span> <img src={House18} alt="" /></span>

            </div>
          


       
        <div className={toggleState === 2 ? 'gallery activeS' : 'gallery'}>
           
           <span> <img src={Obklad1} alt="" /></span>
           <span> <img src={Obklad2} alt="" /></span>  
           <span> <img src={Obklad3} alt="" /></span>
           <span> <img src={Obklad4} alt="" /></span>
           <span> <img src={Obklad5} alt="" /></span>
           <span> <img src={Obklad6} alt="" /></span>
           <span> <img src={Obklad7} alt="" /></span>

        </div>
        

          
           <div  className={toggleState === 3 ? 'gallery activeS' : 'gallery'}>
                <span> <img src={Koupelna1} alt="" /></span>
                <span> <img src={Koupelna2} alt="" /></span>
                <span> <img src={Koupelna3} alt="" /></span>
                <span> <img src={Koupelna4} alt="" /></span>
                <span> <img src={Koupelna5} alt="" /></span>
                <span> <img src={Koupelna6} alt="" /></span>
            </div>
           

         
          <div  className={toggleState === 4 ? 'gallery activeS' : 'gallery'}>
            <span> <img src={Kuchyn1} alt="" /></span>
            <span> <img src={Kuchyn2} alt="" /></span>
            <span> <img src={Kuchyn3} alt="" /></span>
            <span> <img src={Kuchyn4} alt="" /></span>
            <span> <img src={Kuchyn5} alt="" /></span>
            <span> <img src={Kuchyn6} alt="" /></span>

            </div>
          
          
           <div  className={toggleState === 5 ? 'gallery activeS' : 'gallery'}>
                <span> <img src={Ostatni1} alt="" /></span>
                <span> <img src={Ostatni2} alt="" /></span>
                <span> <img src={Ostatni3} alt="" /></span>
                <span> <img src={Ostatni4} alt="" /></span>
                <span> <img src={Ostatni5} alt="" /></span>
                <span> <img src={Ostatni6} alt="" /></span>
                <span> <img src={Ostatni7} alt="" /></span>
                <span> <img src={Ostatni8} alt="" /></span>
                <span> <img src={Ostatni9} alt="" /></span>
                <span> <img src={Ostatni10} alt="" /></span>
                <span> <img src={Ostatni11} alt="" /></span>
                <span> <img src={Ostatni12} alt="" /></span>
                <span> <img src={Ostatni13} alt="" /></span>
                <span> <img src={Ostatni14} alt="" /></span>
                <span> <img src={Ostatni15} alt="" /></span>
                <span> <img src={Ostatni16} alt="" /></span>
                <span> <img src={Ostatni17} alt="" /></span>
                <span> <img src={Ostatni18} alt="" /></span>
                <span> <img src={Ostatni19} alt="" /></span>
                <span> <img src={Ostatni20} alt="" /></span>
                <span> <img src={Ostatni21} alt="" /></span>
                
            </div>
           
         </div>
        </div>
     
    </div>
  )
}

export default Slider