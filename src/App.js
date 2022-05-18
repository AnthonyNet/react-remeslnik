import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Featured from './components/featured/Featured'


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
      <Gallery />
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
