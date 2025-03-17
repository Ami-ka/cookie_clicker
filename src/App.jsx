import "./style/App.css";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import ToogleTheme from "./components/ToogleTheme";
import { useState, createContext } from "react";

function App() {
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
        <BrowserRouter>
          <Header />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>

          <ToogleTheme />
        </BrowserRouter>
      </Theme.Provider>
    </Count.Provider>
  );
}

export default App;
export const Theme = createContext();
export const Count = createContext();
