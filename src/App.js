import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Featured from './components/featured/Featured'

import Swiper from './components/gallery/tabs/Koupelny'
import Gallery from './components/gallery/Gallery'
import Footer from './components/footer/Footer'

import './App.scss';



function App() {
  
  return (

    <div className="App">
     {/*
     <Navbar />
      <Hero />
      <Featured /> 
      <Slider />
      <Swiper />
     <Footer />
      */}  
      <Navbar />
      <Hero />
      <Featured /> 
      <Gallery />
      <Footer />
     
    
    </div>
  );
}

export default App;
