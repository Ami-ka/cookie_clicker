import React, { useContext } from "react";
import { Theme } from "../App";


function ToogleTheme() {
    const { toogleTheme } = useContext(Theme)

    return (
        <label className="switch">
            <input type="checkbox" onClick={toogleTheme} />
            <span className="slider">
            </span>
        </label>
    )
}
export default ToogleTheme;