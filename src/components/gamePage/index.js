import React, {useEffect, useState} from 'react';
import style from "./gamePage.module.css"
import GameLine from "./gameLine"
import {useDispatch, useSelector} from "react-redux";
import {deployPacman, moveDown, moveLeft, moveRight, moveUp} from "../../redux/actions/actions";



const GamePage = () => {
  const dispatch = useDispatch()
  const {gameMap, score} = useSelector((state) => state)


  useEffect(() => {
    dispatch(deployPacman())
    const body = document.querySelector("body")
    body.addEventListener('keydown', event => {
      switch (event.key) {
        case "ArrowUp":
          dispatch(moveUp())
          break
        case "ArrowDown":
          dispatch(moveDown())
          break
        case "ArrowLeft":
          dispatch(moveLeft())
          break
        case "ArrowRight":
          dispatch(moveRight())
          break
      }
    })
  }, [])

  return (
    <div className={style.mainContainer}>

        <div className={style.score}>
          game score <p className={style.scoreText}>{score}</p>
        </div>
        <div className={style.map}>
          {gameMap.map((line, index) => <GameLine tiles={line} key={index}/>)}
        </div>
        <div className={style.score}>
          high score <p className={style.scoreText}>00000</p>
        </div>

    </div>
  );
};

export default GamePage;