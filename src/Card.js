import React, { useState, useEffect } from "react";
import cardData from "./cardData";
import "./card.css";



function Card(props) {
    
    const [ clickedCards, setClickedCards ] = useState([2]);


    const shuffle = (arr) => {
        var j, x, index;
        for (index = arr.length - 1; index > 0; index--) {
            j = Math.floor(Math.random() * (index + 1));
            x = arr[index];
            arr[index] = arr[j];
            arr[j] = x;
        }
        console.log(arr)
        return arr;
    }

    const gameOver = (text, color) => {
        document.querySelector('.cards-container').classList.toggle('animation');
           document.querySelector('.game-controller').style = "display: flex;";
           document.querySelector('.game-controller-text').textContent = text;
           document.querySelector('.game-controller-text').style = `color: ${color};`;
           document.querySelector('.game-controller-button').textContent = "Try Again?"

    }

    const checkForPoint = (id) => {
       if(!clickedCards.includes(id)) {
           props.incrementScore();
           setClickedCards([...clickedCards, id])
           if(props.scoreboard === 18) {
            props.checkBestScore();
            props.resetScore();
            setClickedCards([]);
            gameOver(`CONGRATULATIONS! You've completed the Game!`, 'green');
 
        }
       }else {
           props.checkBestScore();
           props.resetScore();
           setClickedCards([]);
           gameOver(`GAME OVER! You Lost!`, 'red');
           
       }
       

    }   
    let cardsArray = cardData.map((card) => {
        return (
            <div onClick={() => checkForPoint(card.id)} className="card" style={{backgroundImage: `url(${card.img}`, backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
                 <h1>{card.text}</h1>
             </div>
         )
        })
        
        useEffect(() => {
            shuffle(cardData)
          });

    

return(
    <div className="cards-container">
        {cardsArray}

    </div>
)

}

export default Card