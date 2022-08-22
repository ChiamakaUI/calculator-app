import React, { useState, createContext } from "react";
import Keyboard from "./Keyboard";
import Screen from "./Screen";

export const FuncContext = createContext()
const Calculator = () => {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState([]);
  const [displayResult, setDisplayResult] = useState(0);

  const getUserInput = (e) => {
    const input = e.target.innerText;
    let res = 0;

    if (input === "RESET") {
      setUserInput(" ");
      return;
    }
    if (input === "DEL") {
      setUserInput((prev) => prev.slice(0, -1));
      return;
    }
    if (input === "+" || input === "-" || input === "/" || input === "x") {
      setResult((prev) => {
        if (!prev) return;
        if (prev.length === 3) return;
        return [...prev, userInput, input];
      });
      setUserInput(" ");
      return;
    }
    if (input === "=") {
      setResult((prev) => {
        res = computeResult([...prev, userInput]);
        return [...prev, userInput];
      });

      setTimeout(() => {
        setDisplayResult(res);
      }, 0);
      return;
    }

    setUserInput((prev) => prev + input);
  };

  const computeResult = (val) => {
    const [a, b, c] = val;
    const A = Number(a),
      C = Number(c);
    let res = 0;
    if (b === "+") res = A + C;
    if (b === "-") res = A - C;
    if (b === "/") res = A / C;
    if (b === "x") res = A * C;

    return res;
  };

  return (
    <div className="calculator">
      <Screen
        value={displayResult === 0 ? userInput : displayResult}
        result={result}
      />
      <FuncContext.Provider value={{getUserInput}}>
      <Keyboard clickFunction={getUserInput} />
      </FuncContext.Provider>
    </div>
  );
};

export default Calculator;
