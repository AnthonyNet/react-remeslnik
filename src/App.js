import React from 'react'
import Navbar from './components/navbar/Navbar'
import BackToTop from './components/backToTop/TopBtn'
import Hero from './components/hero/Hero'
import Featured from './components/featured/Featured'


import Gallery from './components/gallery/Gallery'
import Footer from './components/footer/Footer'
import Form from './components/form/Form'

import './App.scss';



function App() {
  
  return (

    <div className="App">
     {/*
     <Navbar />
     <BackToTop />
      <Hero />
      <Featured /> 
      <Gallery />
     <Footer />
      */}  
     
      <Navbar />
      <BackToTop />
      <Hero />
      <Featured /> 
      <Gallery />
     <Form />
     <Footer />
     
    
    </div>
  );
}

export default App;
