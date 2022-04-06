import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Featured from './components/featured/Featured'
import Slider from './components/slider/Slider'

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
     <Footer />
      */}  
      
      <Navbar />
      <Hero />
      <Featured /> 
      <Slider />
     <Footer />
    
    </div>
  );
}

export default App;
