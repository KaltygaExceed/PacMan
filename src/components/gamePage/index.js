import React, {useEffect, useState} from 'react';
import style from "./gamePage.module.css"
import GameLine from "./gameLine"
// import {gameMap} from "../../utils/gameMap"
import {useDispatch, useSelector} from "react-redux";
import {deployPacman} from "../../redux/actions/actions";
import Pacman from "../units/pacman";


const GamePage = () => {
  const dispatch = useDispatch()
  const {gameMap} = useSelector((state) => state)
  useEffect(() => {
    const body = document.querySelector("body")
    body.addEventListener('keydown', (event) => {
      console.log(event.code)
      if (event.code === "KeyW" || event.code === "ArrowUp") setPosition((oldPosition) => {
        const newPosition = oldPosition
        newPosition[1] = newPosition[1] - 1
        return newPosition
      })
    })
    //todo remove eventlistener

    // return body.removeEventListener("keydown")
  },[])


  useEffect(()=> {
      dispatch(deployPacman())
  })

  const [position, setPosition] = useState([17, 13])
  // console.log(gameMap)

  return (
    <div className={style.mainContainer}>
      <div className={style.gameContainer}>
        <div className={style.score}>
          game score <p className={style.scoreText}>00000</p>
        </div>
        <div className={style.map}>
          {gameMap.map(line =>  <GameLine tiles={line}/>)}
          <Pacman position={position} />
        </div>
        <div className={style.score}>
          high score  <p className={style.scoreText}>00000</p>
        </div>
      </div>
    </div>
  );
};

export default GamePage;