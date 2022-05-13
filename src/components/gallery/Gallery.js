import React, {useState} from 'react'

import Fasady from './tabs/Fasady'
import Koupelny from './tabs/Koupelny'
import Obklady from './tabs/Obklady'
import Kuchyne from './tabs/Kuchyne'
import Ostatni from './tabs/Ostatni'


import './Gallery.scss'




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
/*import Kuchyn6 from '../../assets/kuchyne/6.jpg'*/

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
    //console.log(imagesAll);

 
    
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (numb) => {
        setToggleState(numb)
    }

    
  return (
    <div id='slider'>

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

            <Fasady />
        
            </div>
          
        <div className={toggleState === 2 ? 'gallery activeS' : 'gallery'}>
           
         <Obklady />

        </div>
        
           <div  className={toggleState === 3 ? 'gallery activeS' : 'gallery'}>
           
              <Koupelny />
            </div>
           

         
          <div  className={toggleState === 4 ? 'gallery activeS' : 'gallery'}>
              <Kuchyne />
            </div>
          
          
           <div  className={toggleState === 5 ? 'gallery activeS' : 'gallery'}>
               <Ostatni />
                
            </div>
           
         </div>
        </div>
     
    </div>
  )
}

export default Slider