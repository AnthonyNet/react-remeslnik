import React from 'react'
import{useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, EffectFade } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

import 'swiper/css'
import styles from '../Gallery.scss'


const Gallery = () => {

  const fasady = [
    '../../assets/fasady-obklady/1.jpg',
    '../../assets/fasady-obklady/2.jpg',
    '../../assets/fasady-obklady/3.jpg',
    '../../assets/fasady-obklady/4.jpg',
    '../../assets/fasady-obklady/5.jpg',
    '../../assets/fasady-obklady/6.jpg',
    
    '../../assets/fasady-obklady/7.jpg',
    '../../assets/fasady-obklady/8.jpg',
    '../../assets/fasady-obklady/9.jpg',
    '../../assets/fasady-obklady/10.jpg',
    '../../assets/fasady-obklady/11.jpg',
    '../../assets/fasady-obklady/12.jpg',
    
    '../../assets/fasady-obklady/13.jpg',
    '../../assets/fasady-obklady/14.jpg',
    '../../assets/fasady-obklady/15.jpg',
    '../../assets/fasady-obklady/16.jpg',
    '../../assets/fasady-obklady/17.jpg',
    '../../assets/fasady-obklady/18.jpg',
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
      fasady.map((item,index)=>{
        return(
          <SwiperSlide className={styles.swiperslide}>
        <span className='img-cover'><img className='img' src={item} /></span>
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