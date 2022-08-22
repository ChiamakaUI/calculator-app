import React, { useState } from "react";

const Header = ({ themeOne, themeTwo, themeThree, currentTheme }) => {
  const [activeBtn, setActiveBtn] = useState("theme-1-btn");
  return (
    <div className={`header ${currentTheme}`}>
      <h3>calc</h3>
      <div className={`header_theme ${currentTheme}`}>
        <h6>Theme</h6>
        <div>
          <p style={{ marginLeft: "5px" }}>
            <span> 1</span>
            <span> 2</span>
            <span> 3</span>
          </p>
          <div className="theme-control-btn">
            <button
              className={activeBtn === "theme-1-btn" ? "active" : ""}
              onClick={() => {
                themeOne();
                setActiveBtn("theme-1-btn");
              }}
            ></button>
            <button
              className={activeBtn === "theme-2-btn" ? "active" : ""}
              onClick={() => {
                themeTwo();
                setActiveBtn("theme-2-btn");
              }}
            ></button>
            <button
              className={activeBtn === "theme-3-btn" ? "active" : ""}
              onClick={() => {
                themeThree();
                setActiveBtn("theme-3-btn");
              }}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
