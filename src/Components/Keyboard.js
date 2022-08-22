import React, { useContext } from "react";
import Keys from "./Keys";
import { ThemeContext } from "../App";

const Keyboard = () => {
  const { theme } = useContext(ThemeContext);
  const keys = [
    7,
    8,
    9,
    "DEL",
    4,
    5,
    6,
    "+",
    1,
    2,
    3,
    "-",
    ".",
    0,
    "/",
    "x",
    "RESET",
    "=",
  ];

  return (
    <div className={`${theme}-keyboard keyboard`}>
      {keys.map((key) => (
        <Keys key={key} keyValue={key} />
      ))}
    </div>
  );
};

export default Keyboard;
