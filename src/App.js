import { useState, createContext } from "react";
import Calculator from "./Components/Calculator";
import Header from "./Components/Header";
import "./Components/Style.css";

export const ThemeContext = createContext()
function App() {
  const [theme, setTheme] = useState("theme-1");

  const setThemeOne = () => {
    document.body.style.backgroundColor = "hsl(222, 26%, 31%)";
    setTheme("theme-1");
  };

  const setThemeTwo = () => {
    document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
    setTheme("theme-2");
  };
  const setThemeThree = () => {
    document.body.style.backgroundColor = "hsl(268, 75%, 9%)";
    setTheme("theme-3");
  };

  return (
    <div>
      <ThemeContext.Provider value={{theme}}>
      <Header
        themeOne={setThemeOne}
        themeTwo={setThemeTwo}
        themeThree={setThemeThree}
        currentTheme={theme}
      />
      {/* <Calculator theme={theme} /> */}
      <Calculator />
      </ThemeContext.Provider>
      
    </div>
  );
}

export default App;
