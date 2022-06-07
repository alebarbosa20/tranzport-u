import React from "react";
import Navbar from "../navbar/index";
import Cards from "./Cards";
import fondo from "../../media/fondocuadros.jpeg";



const Transport = () => {
  return (
    <div>
      <Navbar/>
      <img className='imagen' src={fondo}/>
      <Cards />
    </div>
    
  );
};

export default Transport;
