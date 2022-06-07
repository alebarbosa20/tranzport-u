import React from "react";
import "./Pay.css";
import fondo from "../../media/fondocuadros.jpeg";
import Navbar from "../navbar/index";

const Pay = () => {
  return (
    <div>
      <Navbar />
      <img className="imagen" src={fondo} />
      <center>
        <div className="pago">
          <div class="card text-center">
            <div class="card-header">Payment of service</div>
            <div class="card-body">
              <img
                className="imagenlogo"
                src={require("../../media/logo.png")}
                alt="logo"
                style={{
                  width: 200,
                  height: 70,
                  marginBottom: 15,
                  marginTop: 0,
                }}
              />
              <p class="card-text">Transportation Type:</p>
              <p class="card-text">Cost:</p>
              <p class="card-text"> Commission:</p>
              <p class="card-text"> Total: </p>
              <p class="card-text"> Date: </p>

              <a href="#" class="btn btn-primary">
                Pay
              </a>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default Pay;
