import { React, useContext } from "react";
import Counter from "../components/Counter";
import { Theme } from "../App";

function Home() {
  const { theme } = useContext(Theme)
  
  return (
    <div className={"App" + theme}>
      <Counter />
    </div>
  );
}

export default Home;
