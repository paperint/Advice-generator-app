import React from "react";
import DividerDesktop from "../images/pattern-divider-desktop.svg";
import DividerMobile from "../images/pattern-divider-mobile.svg";
import Dice from "../images/icon-dice.svg";
import axios from "axios";
import { useState, useEffect } from "react";

function Homepage() {
  const [state, setState] = useState([]);

  const getAdvice = async () => {
    try {
      const advice = await axios.get("https://api.adviceslip.com/advice");
      setState(advice.data.slip);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen p-6 bg-DarkBlue">
      <div className="relative flex flex-col items-center justify-center max-w-md gap-6 p-6 mx-auto bg-DarkGrayishBlue rounded-xl">
        <div>
          <h1 className="tracking-[.5rem] text-NeonGreen">ADVICE#{state.id}</h1>
        </div>
        <div>
          <p className="text-2xl font-extrabold text-center text-LightCyan">
            {state.advice}
          </p>
        </div>
        <div className="mb-10 translate-y-4">
          <picture>
            <source media="(min-width:690px)" srcset={DividerDesktop} />
            <img src={DividerMobile} alt="" />
          </picture>
        </div>
        <div className="absolute w-full text-center -bottom-7">
          <button
            onClick={() => getAdvice()}
            className="p-4 rounded-full bg-NeonGreen"
          >
            <img src={Dice} alt="random" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
