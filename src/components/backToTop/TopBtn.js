import React from 'react';
import {useEffect, useState} from 'react';
import './TopBtn.scss';

const TopBtn = () => {
    const[toTop, setToTop]=useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 900) {
               setToTop(true)
            }else {
                setToTop(false)
            }
        })
    }, [])

    const scrollUp = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

  return (
    <div>{
        toTop && (
            <button 
            id='backToTop'
            onClick={scrollUp}
            >^</button>
        )
    }</div>
  )
}

export default TopBtn