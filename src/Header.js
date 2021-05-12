import React from "react";
import "./header.css";


function Header (props) {

    console.log(props)

    return (
        <header>
            <div className="header-image"></div>
            <div className="header-container-text">
                <h1>LOTR Memory Card Game</h1>
                <p>How well do you know the characters from Middle Earth?</p>
            </div>
            <div className="scoreboard">
                <h1>Best Score: {props.bestScore}</h1>
                <h1>Current Score: {props.scoreboard}</h1>

            </div>
        </header>
    )

}

export default Header