import React from "react";
import "./Store.css";
import Slider from "./Slider";
import { posters } from "../Array/storecarousel";

export default function Store() {
  return (
    <>
      <div className="storeback">
        <Slider
            width={1024}
            count={1}
            length1={posters.length}
        >
          {posters.map((elem) => {
            return (
              <div className="bigslider">
                <div
                  className="bigslide"
                  style={{
                    backgroundImage: `url(${elem.img})`,
                  }}
                >
                  <div className="text">
                    <div>{elem.dis}</div>
                    <div>{elem.name}</div>
                    <div>{elem.price}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}
