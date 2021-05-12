import React from "react";
import "./gameController.css"

const GameController = () => {

    return(
        <div className="game-controller">
            <div className="game-controller-container">
                <p className="game-controller-text">Memory has long been a favorite game for all generations< br/>
                    It requires observation, concentration and a good memory to win.< br/>
                    Get points by clicking on an image but don't click on any more than once! <br/>
                    GOOD LUCK!
                </p>
                <button className="game-controller-button" onClick={(e) => {
                    document.querySelector('.cards-container').classList.toggle('animation');
                    document.querySelector('.game-controller').style = "display: none;";

                }}>Start Game</button>
            </div>
        </div>
    )

}


export default GameController;