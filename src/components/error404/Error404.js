import "./Error404.css"
import fondo from "../../media/fondocuadros.jpeg";
import casa from "../../media/desarrollo.png";
import Navbar from "../navbar/index";




const Error404 = () => {
  return (
    <div>
      <Navbar />
      <img className="imagen" src={fondo}  />
      <div className="hi">
      <h1>Hi Everyone!</h1>
      <p class="zoom-area">
        <b>Ohhhhh</b>. This Page Is In Process.{" "}
      </p>
      <section class="error-container">
        <span className="com">
          <span>COMING</span>
        </span>
        &nbsp;
        <span className="soo">
          <span>SOON</span>
        </span>
      </section>
      <div class="link-container">
      <img className="imagen-casa" src={casa} style={{ width: 200, height: 200, marginBottom: 15, marginTop: 0 }}/>
      </div>
      </div>
      
    </div>
  );
};

export default Error404;
