import React, {useState} from "react";
import { ethers } from "ethers";
import "./Cards.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

const startPayment = async ({ setError, setTxs, ether, addr }) => {
  try {
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");

    await window.ethereum.send("eth_requestAccounts");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    ethers.utils.getAddress(addr);
    const tx = await signer.sendTransaction({
      to: addr,
      value: ethers.utils.parseEther(ether)
    });
    console.log({ ether, addr });
    console.log("tx", tx);
    setTxs([tx]);
  } catch (err) {
    setError(err.message);
  }
};

export default function Cards() {
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError();
    await startPayment({
      setError,
      setTxs,
      ether: "1",
      addr: "0x794d4204e9390D882154767cDe1dA4944C7fC919"
    });
  };

  return (
    <form className="m-4" onSubmit={handleSubmit}>
      <div className="cards">
        <div>
          <MDBCard style={{ maxWidth: "22rem" }}>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage
                src="https://www.showbus.com/p2012/Metroline%20MAN%20MCV%20MM826.JPG"
                fluid
                alt="..."
              />
              <a>
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>Bus</MDBCardTitle>
              <MDBCardText>
              Select this option if you plan to travel by bus:
              </MDBCardText>
              <button type="submit" className="boton">Buy</button>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div>
          <MDBCard style={{ maxWidth: "22rem" }}>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage
                src="http://queautocompro.com/wp-content/uploads/2014/07/Yellow-cab.jpg"
                fluid
                alt="..."
                width={790}
                height={480}
              />
              <a>
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>Taxi</MDBCardTitle>
              <MDBCardText>
              Select this option if you plan to travel by taxi:
              </MDBCardText>
              <button type="submit" className="boton">Buy</button>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div>
          <MDBCard style={{ maxWidth: "22rem" }}>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage
                src="http://news.soltekonline.com/images/articles/58dd84e37d189.jpg"
                fluid
                alt="..."
                width={790}
                height={480}
              />
              <a>
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>Subway</MDBCardTitle>
              <MDBCardText>
              Select this option if you plan to travel by subway:
              </MDBCardText>
              <button type="submit" className="boton">Buy</button>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
    </form>
  );
};