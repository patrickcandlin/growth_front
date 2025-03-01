import React from 'react';
import kyle_goofball from "./../images/kyle_goofball.png";

export default function YouWin(props) {
    const { points, seconds } = props
    if(seconds < 15 && points >= 10){
        props.stopTimer()

        return(
            <div className="you-win">
                <h3>You Whacked that Coberly!!!</h3>
                <img className="goofball-coberly" alt="goofball coberly" src={kyle_goofball} />
                <button className="play-again" onClick={() => props.play()}>Play Again!</button>
            </div>
        )
    }
        else {
            return(null)
        } 

} 