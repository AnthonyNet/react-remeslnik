import React from 'react'
import{useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, EffectFade } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

import 'swiper/css'
import styles from '../Gallery.scss'


const Obklady = () => {

  const obklady = [
    '../../assets/obklady/1.jpg',
    '../../assets/obklady/2.jpg',
    '../../assets/obklady/3.jpg',
    '../../assets/obklady/4.jpg',
    '../../assets/obklady/5.jpg',
    '../../assets/obklady/6.jpg',
    '../../assets/obklady/7.jpg'
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
      obklady.map((obklad, index)=>{
        return(
          <SwiperSlide className={styles.swiperslide}>
        <span key={index} className='img-cover'><img className='img' src={obklad} /></span>
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

export default Obklady