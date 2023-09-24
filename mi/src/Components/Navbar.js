import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Marvel from "./Marvel";

export default function Navbar() {
  const [back, setback] = useState('');
  let getmarvel = () => {
    setback('red')
  };

  let marvel =
    "https://www.freepnglogos.com/uploads/marvel-logo-png/new-marvel-studios-logo-debuted-marvelstudios-3.png";
  let milogo =
    "https://www.freepnglogos.com/uploads/xiaomi-png/xiaomi-logo-png-transparent-xiaomi-logo-images-mi-logo-2.png";
  return (
    <div>
      <motion.div className="navback">
        <Link to="/" className="navitems">
          <img src={milogo} alt="" id="milogo" />
        </Link>
        <Link to="/Store" className="navitems">Store</Link>
        <Link to="/Marvel" className="navitems" onClick={getmarvel}>
          <img src={marvel} alt="" id="marvellogo" />
        </Link>
        <Link className="navitems">Music-Accsesories</Link>
        <Link className="navitems">About</Link>
      </motion.div>
    </div>
  );
}
