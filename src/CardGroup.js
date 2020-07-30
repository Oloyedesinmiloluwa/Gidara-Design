import React from "react";
import cardImage1 from "./assets/What we do section image 1.png";
import cardImage2 from "./assets/What we do section image 2.png";
import cardImage3 from "./assets/What we do section image 3.png";
import "./cardGroup.scss";

const CardGroup = () => {
  return (
    <div className="card-group">
      <div className="card">
        <div
          style={{ backgroundImage: `url('${cardImage1}')` }}
          className="card-image"
        ></div>
        <div className="card-text">
          <h3>One</h3>
          <p>
            Place any text you want here etc. We invest between N2m - N5m in
            marketing, production and promotional fees.
          </p>
        </div>
      </div>
      <div className="card">
        <div
          style={{ backgroundImage: `url('${cardImage2}')` }}
          className="card-image"
        ></div>
        <div className="card-text">
          <h3>Two</h3>
          <p>
            Place any text you want here etc. We invest between N2m - N5m in
            marketing, production and promotional fees.
          </p>
        </div>
      </div>
      <div className="card">
        <div
          style={{ backgroundImage: `url('${cardImage3}')` }}
          className="card-image"
        ></div>
        <div className="card-text">
          <h3>Three</h3>
          <p>
            Place any text you want here etc. We invest between N2m - N5m in
            marketing, production and promotional fees.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardGroup;
