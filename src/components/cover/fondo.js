import React from 'react';
import "./fondo.css";
import fondo from "../../media/fondocuadros.jpeg";

const cover = () => {
  return (
    <div className='cover-container'>
        <img className='imagen' src={fondo}/>
    </div>
  )
}

export default cover