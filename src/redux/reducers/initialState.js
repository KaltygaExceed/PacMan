import {gameMap} from "../../utils/gameMap"

let hs = localStorage.getItem('highscore') ? localStorage.getItem('highscore') : 0;

export const initialState = {
    gameMap : gameMap,
    score: 0,
    highscore: hs
}