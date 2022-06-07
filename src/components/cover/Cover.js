import React from 'react';
import "./Cover.css";
import fondo from "../../media/fondocuadros.jpeg";

const cover = () => {
  return (
    <div className='cover-container'>
        <img className='imagen' src={fondo}/>
        <img className='imagenlogo' src={require('../../media/logo.png')} alt='logo' 
          style={{ width: 800, height: 300, marginBottom: 15, marginTop: 0 }}/>
        <p>Hitting the road</p>
    </div>
  )
}

export default cover