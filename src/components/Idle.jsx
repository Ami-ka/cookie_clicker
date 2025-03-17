import React from "react";
import { Count } from "../App";
import { useContext } from "react";


function Idle(props) {
    const { count, setCount } = useContext(Count);
    const isDisabled = count > 10;
    
    function minerHandler() {
        let intervalId = setInterval(props.clickHandler, 1000);
        setCount(count - 10)
    }

    return (        
        <button  onClick={minerHandler} disabled={!isDisabled}>cookie miner cost 10$</button>
    );
}


export default Idle;       