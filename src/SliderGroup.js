import React from "react";
import CustomButton from "./CustomButton";
import "./sliderGroup.scss";
import image2 from "./assets/Mentors section image 2 - Timbaland.png";
import image1 from "./assets/Mentors section image 1 - Killer Mike.png";
import image3 from "./assets/Mentors section image 3 - Chance the rapper.png";

const SliderGroup = () => {
  return (
    <div className="slider-group">
      <div className="slider">
        <div
          style={{
            backgroundImage: `url('${image1}')`,
            backgroundPosition: "right",
          }}
          className="slider-image"
        ></div>
        <div className="slider-body">
          <div
            className="slider-button"
            style={{ margin: "45px 0px 10px 0px" }}
          >
            <CustomButton style={{ marginRight: "25px" }} point="left" />
            <CustomButton point="right" />
          </div>
          <h3>Tim</h3>
          <p>
            Timothy Zachary Mosley, known professionally as Timbaland, is an
            American record producer, rapper, singer, songwriter, and DJ.
            Timbaland's first full credit production work was in 1996 on
            Ginuwine...the Bachelor for R&amp;B singer Ginuwine.
          </p>
        </div>
      </div>
      <div className="slider">
        <div
          style={{ backgroundImage: `url('${image2}')` }}
          className="slider-image"
        ></div>
        <div className="slider-body">
          <div
            className="slider-button"
            style={{ margin: "45px 0px 10px 0px" }}
          >
            <CustomButton style={{ marginRight: "25px" }} point="left" />
            <CustomButton point="right" />
          </div>
          <h3>Timbaland</h3>
          <p>
            Timothy Zachary Mosley, known professionally as Timbaland, is an
            American record producer, rapper, singer, songwriter, and DJ.
            Timbaland's first full credit production work was in 1996 on
            Ginuwine...the Bachelor for R&amp;B singer Ginuwine.
          </p>
        </div>
      </div>
      <div className="slider">
        <div
          style={{
            backgroundImage: `url('${image3}')`,
            backgroundPosition: "left",
          }}
          className="slider-image"
        ></div>
        <div className="slider-body">
          <div
            className="slider-button"
            style={{ margin: "45px 0px 10px 0px" }}
          >
            <CustomButton style={{ marginRight: "25px" }} point="left" />
            <CustomButton point="right" />
          </div>
          <h3>Chance the Rapper</h3>
          <p>
            Timothy Zachary Mosley, known professionally as Timbaland, is an
            American record producer, rapper, singer, songwriter, and DJ.
            Timbaland's first full credit production work was in 1996 on
            Ginuwine...the Bachelor for R&amp;B singer Ginuwine.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SliderGroup;
