import React, { useState } from "react";

import Fasady from "./tabs/Fasady";
import Koupelny from "./tabs/Koupelny";
import Obklady from "./tabs/Obklady";
import Kuchyne from "./tabs/Kuchyne";
import Ostatni from "./tabs/Ostatni";

import "./Gallery.scss";

const Slider = () => {
  const imagesAll = document.querySelectorAll(".gallery-tabs img");
  //console.log(imagesAll);

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (numb) => {
    setToggleState(numb);
  };

  return (
    <div id="slider">
      <div className="container containerSlider">
        <ul className="menu-tabs">
          <li 
          onClick={() => toggleTab(1)}
          className={toggleState === 1 ? "tabs activeMenu" : "tabs"} 
          >
            Fasády
          </li>
          <li className={toggleState === 2 ? "tabs activeMenu" : "tabs"}  
          onClick={() => toggleTab(2)}>
            Obklady
          </li>
          <li className={toggleState === 3? "tabs activeMenu" : "tabs"}  
          onClick={() => toggleTab(3)}>
            Koupelny
          </li>
          <li className={toggleState === 4 ? "tabs activeMenu" : "tabs"}  
          onClick={() => toggleTab(4)}>
            Kuchyně, krby
          </li>
          <li className={toggleState === 5 ? "tabs activeMenu" : "tabs"}  
          onClick={() => toggleTab(5)}>
            Ostatní
          </li>
        </ul>

        <div className="gallery-tabs">
          <div className={toggleState === 1 ? "gallery activeS" : "gallery"}>
            <Fasady />
          </div>

          <div className={toggleState === 2 ? "gallery activeS" : "gallery"}>
            <Obklady />
          </div>

          <div className={toggleState === 3 ? "gallery activeS" : "gallery"}>
            <Koupelny />
          </div>

          <div className={toggleState === 4 ? "gallery activeS" : "gallery"}>
            <Kuchyne />
          </div>

          <div className={toggleState === 5 ? "gallery activeS" : "gallery"}>
            <Ostatni />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
