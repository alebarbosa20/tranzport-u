import React from "react";
import Navbar from "../navbar/index";
import fondo from "../../media/fondocuadros.jpeg";
import Cards from "./Cards";

const Rutas = () => {
  return (
    <div>
      <Navbar />
      <img className="imagen" src={fondo} />
      <Cards />
    </div>
  );
};

export default Rutas;
