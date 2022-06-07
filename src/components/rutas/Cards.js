import React from "react";
import "./Cards.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";

const Cards = () => {
  return (
    <div className="class">
      <div className="container-fluid">
      <div class="row">
        <div class="col-sm-6 mb-5" >
          <div class="card">
            <div class="card-body">
              <h5 class="card-title" id="ruta1">Route 1</h5>
              <p class="card-text">
              This route covers the north of the city
              </p>
              <button type="submit" className="boton">Ver más</button>
            </div>
          </div>
        </div>
        <div class="col-sm-6 mb-5">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title" id="ruta2">Route 2</h5>
              <p class="card-text">
              This route covers the south of the city
              </p>
              <button type="submit" className="boton">Ver más</button>
            </div>
          </div>
        </div>
       

        <div class="col-sm-6 mb-5">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title" id="ruta3">Route 3</h5>
              <p class="card-text">
              This route covers the east of the city
              </p>
              <button type="submit" className="boton">Ver más</button>
            </div>
          </div>
        </div>
        <div class="col-sm-6 mb-5">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title" id="ruta4">Route 4</h5>
              <p class="card-text">
              This route covers the west of the city
              </p>
              <button type="submit" className="boton">Ver más</button>
            </div>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Cards;
