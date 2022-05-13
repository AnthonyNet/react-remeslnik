import React from 'react'
import{useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, EffectFade } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

import Kuchyn1 from '../../assets/kuchyne/1.jpg'
import Kuchyn2 from '../../assets/kuchyne/2.jpg'
import Kuchyn3 from '../../assets/kuchyne/3.jpg'
import Kuchyn4 from '../../assets/kuchyne/4.jpg'
import Kuchyn5 from '../../assets/kuchyne/5.jpg'
import Kuchyn6 from '../../assets/kuchyne/6.jpg'

import 'swiper/css'
import styles from './Swiper.scss'


const Gallery = () => {

  const kitchens = [
    '../../assets/kuchyne/1.jpg',
    '../../assets/kuchyne/2.jpg',
    '../../assets/kuchyne/3.jpg',
    '../../assets/kuchyne/4.jpg',
    '../../assets/kuchyne/5.jpg',
    '../../assets/kuchyne/6.jpg'
  ]



  return (
    <section className='swiper-section'>
        <Swiper
            modules={[Navigation, EffectFade]}
            navigation
            effect
            speed={800}
            slidesPreview={1}
            loop
            className={styles.myswiper}
        >        
          
     {
      kitchens.map((kitchen,index)=>{
        return(
          <SwiperSlide className={styles.swiperslide}>
        <span className='img-cover'><img className='img' src={kitchen} /></span>
        </SwiperSlide> 
        )
       })
     }

          
  
    
     </Swiper>
    </section>
  )
}
/* 
  const Kitchens = (folder, number) => {
    for (let i = 1; i < number; i++) {
      
        <SwiperSlide className={styles.swiperslide}>
        <span className='img-cover'><img className='img' src={require(`../../assets/${folder}/${i}.jpg`)} /></span>
        </SwiperSlide> 
      
    
    }
  }
*/

export default Gallery