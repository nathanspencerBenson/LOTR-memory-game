import React, { useState } from "react";
import "./app.css";
import Header from "./Header";
import GameController from "./GameController";
import Card from "./Card";

function App() {

  const [scoreboard, setScoreboard] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const incrementScore = () => {
    setScoreboard(scoreboard + 1)
  }

  const resetScore = () => {
    setScoreboard(0);
  }

  const checkBestScore = () => {
    if(scoreboard > bestScore) {
      setBestScore(scoreboard)
    }

  }


  return (
    <div className="App">
      <Header bestScore={bestScore} scoreboard={scoreboard} />
      <GameController />
      <Card scoreboard={scoreboard} incrementScore={incrementScore} resetScore={resetScore} checkBestScore={checkBestScore}/>
    </div>
  );
}

export default App;
