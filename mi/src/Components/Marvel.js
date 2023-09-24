import React from "react";
import "./Marvel.css";
import Slider from "./Slider";
import { msposters } from "../Array/storecarousel";

export default function Marvel() {
  return (
    <div className="mback" >
      <Slider 
      width={1024} 
      count={1} 
      length1={msposters.length}
      >
        {msposters.map((elem) => {
          return (
            <div className="msback">
              <div className="msslide"
              style={{
                backgroundImage : `url(${elem.img})`
              }}
              >
                <div className="mslogo">
                  {elem.logo}
                </div>
                <div className="msdis">
                  {elem.dis}
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
