import React, { useRef, useState, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import "./Slider.css";

export default function Slider(props) {
  let { width, count, length1 } = props;
  let [btnvisible, setbtnvisible] = useState(1);
  let [btndisible, setbtndisible] = useState(false);
  let [btn2visible, setbtn2visible] = useState(0);
  let [disable2, setdisable2] = useState(true);
  let [run, setrun] = useState(0);

  const goright = () => {
    setrun(run-=width)
    setbtn2visible(1)
    setdisable2(false)
    if (run == -(length1-count)*width) {
      setbtndisible(true)
      setbtnvisible(0)
    }
  };
  const goleft = () => {
    setrun(run+=width)
    setbtnvisible(1)
    setbtndisible(false)
    if (run == 0) {
      setdisable2(true)
      setbtn2visible(0)
    }
  };
  return (
    <>
      <motion.div
      id="flex"
        animate={{
          translateX: run,
        }}
      >
        {props.children}
      </motion.div>
      <div>
        <motion.button
          animate={{
            opacity: btnvisible,
          }}
          id="right"
          onClick={goright}
          disabled={btndisible}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="feather feather-chevron-right"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </motion.button>
        <motion.button
          disabled={disable2}
          animate={{
            opacity: btn2visible,
          }}
          id="left"
          onClick={goleft}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="feather feather-chevron-left"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </motion.button>
      </div>
    </>
  );
}
