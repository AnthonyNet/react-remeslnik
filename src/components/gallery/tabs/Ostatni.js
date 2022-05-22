
import React from 'react'
import{useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, EffectFade } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

import 'swiper/css'
import styles from '../Gallery.scss'


const Gallery = () => {

    const ostatni = [
        '../../assets/ostatni/1.jpg',
    '../../assets/ostatni/2.jpg',
    '../../assets/ostatni/3.jpg',
    '../../assets/ostatni/4.jpg',
    '../../assets/ostatni/5.jpg',
    '../../assets/ostatni/6.jpg',
    '../../assets/ostatni/7.jpg',
    '../../assets/ostatni/8.jpg',
    '../../assets/ostatni/9.jpg',
     '../../assets/ostatni/10.jpg',
     '../../assets/ostatni/11.jpg',
     '../../assets/ostatni/12.jpg',
     '../../assets/ostatni/13.jpg',
     '../../assets/ostatni/14.jpg',
     '../../assets/ostatni/15.jpg',
     '../../assets/ostatni/16.jpg',
     '../../assets/ostatni/17.jpg',
     '../../assets/ostatni/18.jpg',
     '../../assets/ostatni/19.jpg',
     '../../assets/ostatni/20.jpg',
     '../../assets/ostatni/21.jpg'
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
      ostatni.map((item,index)=>{
        return(
          <SwiperSlide className={styles.swiperslide} key={index}>
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