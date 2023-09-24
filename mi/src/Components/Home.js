import React, { useState } from "react";
import "./Home.css";
import Slider from "./Slider";
import styledcards from "../Array/styledcards";
import {movieposter} from '../Array/storecarousel'

export default function Home() {
  return (
    <>
      <div className="homeback">
        <div className="smallcard">
          <span>Store.</span> The best way to buy the products you love.
        </div>
        <Slider width={355} count={3} length1={styledcards.length}>
          {styledcards.map((elem) => {
            return (
              <div
                className="slideback"
                style={{
                  backgroundImage: `url(${elem.Image})`,
                }}
              >
                <div className="name">{elem.name}</div>
                <div className="dis">{elem.Discription}</div>
                <div id="mrp">{elem.prise}</div>
              </div>
            );
          })}
        </Slider>
        <div className="bigposter">
          <img
            src="https://i03.appmifile.com/173_operator_in/27/04/2023/0dfa3f1b35a05337b9048fd9b7c34cdd.jpg?f=webp"
            alt=""
          />
        </div>
        <div className="helpback">
          <div className="smallcard">
            <span>Upcoming.</span> Launches is here..
          </div>
          <div className="postergrid">
            <div className="poster" id="ps1">
              <div className="dis">Xiaomi Smart TV X Pro Series</div>
              <div className="name">Disgned by Xiaomi. Powerd by Google</div>
              <div className="name">Coming Soon</div>
            </div>
            <div className="poster" id="ps2">
              <div className="dis">Redmi 13C</div>
              <div className="name">Fast. Next Level.</div>
              <div className="name">24,999</div>
            </div>
            <div className="poster" id="ps3"></div>
          </div>
        </div>
        <Slider 
        width={1024} 
        count={1} 
        length1={movieposter.length} >
          {
            movieposter.map((elem)=>{
              return (
                <div className="movieposterback" >
                <div className="movieslide"
                  style={{
                    backgroundImage : `url(${elem.img})`
                  }}
                >
                  <div className="logo">
                    <img id="mi" src="https://www.freepnglogos.com/uploads/xiaomi-png/xiaomi-logo-logos-marcas-8.png" alt="" /><span> PLAY</span>
                  </div>
                </div>
              </div>
              )
            })
          }
        </Slider>
      </div>
    </>
  );
}
