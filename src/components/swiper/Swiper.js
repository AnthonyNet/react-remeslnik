import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, EffectFade } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import prd from '../../assets/fasady-obklady/1.jpg'

import 'swiper/css'
import styles from './Swiper.scss'


const Gallery = () => {
  return (
    <div>
        <Swiper
            modules={[Navigation, EffectFade]}
            navigation
            effect
            speed={800}
            slidesPreview={1}
            loop
            className={styles.myswiper}
        >        

         <SwiperSlide className={styles.swiperslide}>
             <img src='http://wallpapercave.com/wp/ksbwZBK.jpg' />
        </SwiperSlide> 
        <SwiperSlide className={styles.swiperslide}>
             <img src={prd} />
        </SwiperSlide> 
        <SwiperSlide className={styles.swiperslide}>
             <img src='http://wallpapercave.com/wp/ksbwZBK.jpg' />
       
        </SwiperSlide> 
     </Swiper>
    </div>
  )
}

export default Gallery