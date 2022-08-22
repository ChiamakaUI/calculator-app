import React, { useContext }  from "react";
import {FuncContext} from './Calculator'

const Keys = ({ keyValue }) => {
  const { getUserInput } = useContext(FuncContext);
  let className;
  if (keyValue === "DEL") {
    className = "del-btn";
  }
  if (keyValue === "RESET") {
    className = "reset-btn";
  }
  if (keyValue === "=") {
    className = "equals-btn";
  }

  return (
    <button onClick={getUserInput} className={className}>
      {keyValue}
    </button>
  );
};

export default Keys;
