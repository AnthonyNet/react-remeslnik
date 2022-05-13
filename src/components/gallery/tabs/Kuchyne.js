
import React from 'react'
import{useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, EffectFade } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

import 'swiper/css'
import styles from '../Gallery.scss'


const Gallery = () => {

  const kuchyne =[
    '../../assets/kuchyne/1.jpg',
  '../../assets/kuchyne/2.jpg',
  '../../assets/kuchyne/3.jpg',
  '../../assets/kuchyne/4.jpg',
  '../../assets/kuchyne/5.jpg'
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
      kuchyne.map((item,index)=>{
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