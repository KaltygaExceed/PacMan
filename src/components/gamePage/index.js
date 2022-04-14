import React from 'react';
import style from "./gamePage.module.css"
import GameLine from "./gameLine"
import {gameMap} from "../../utils/gameMap"

const GamePage = () => {
    return (
        <div className={style.mainContainer}>
            <div className={style.score}>
                game score <p className={style.scoreText}>00000</p>
            </div>
            <div className={style.gameMap}>
                {
                    gameMap.map(line => {
                        return <GameLine tiles={line}/>
                    })
                }
            </div>
            <div className={style.score}>
                high score  <p className={style.scoreText}>00000</p>
            </div>
        </div>
    );
};

export default GamePage;