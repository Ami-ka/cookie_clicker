import React from "react";
import Counter from "../components/Counter";
import { useState,createContext } from "react";

function Home() {
  const [count, setCount] = useState(0);
  const countValue = { count, setCount };

  const [theme, setTheme] = useState("-light");
  const toogleTheme = () => {
    theme === "-light" ? setTheme("-black") : setTheme("-light");
  };
  const themeValue = { theme, toogleTheme };
  return (
    <Count.Provider value={countValue}>
      <Theme.Provider value={themeValue}>
        <div className={"App" + theme}>
          <Counter />
        </div>
      </Theme.Provider>
    </Count.Provider>
  );
}

export default Home;
export const Theme = createContext();
export const Count = createContext();
