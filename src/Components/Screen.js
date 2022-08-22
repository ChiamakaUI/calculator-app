import React, { useContext } from "react";
import { ThemeContext } from "../App";

const Screen = ({ value, result }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme}-screen screen`}>
      <p>{result}</p>
      <h3>{value}</h3>
    </div>
  );
};

export default Screen;
