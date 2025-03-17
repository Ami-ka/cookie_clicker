import React from "react";
import { useContext } from "react";
import IdleTable from "./Idle";
import { Count, Theme } from "../pages/Home";
function Counter() {
    const { count, setCount } = useContext(Count);
    const { theme } = useContext(Theme);
    function clickHandler() {
        setCount(prevCount => (prevCount + 1));
    }
    return (
        <div className = "container">
            <h1 className={"h1" + theme}>count:{count}</h1>
            <button id="clickbutton" onClick={clickHandler}></button>
            <IdleTable clickHandler = {clickHandler}></IdleTable>

        </div>
    );
}
export default Counter;
