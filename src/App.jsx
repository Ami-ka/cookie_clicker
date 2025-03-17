import "./style/App.css";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import {Route, Routes} from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import ToogleTheme from "./components/ToogleTheme";

function App() {
  

  return (
    <BrowserRouter>

      <Header />
      <ToogleTheme/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/about" element = {<About/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

