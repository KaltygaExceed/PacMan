import {modelMap} from "../utils/gameMap"

let hs = localStorage.getItem('highscore') ? localStorage.getItem('highscore') : 0;

let map = modelMap.map((line, yIndex) => {
   return line.map((tile, xIndex) => {
        let visited = !(tile === 0 || tile === 2 || tile === 5)
        let canVisit = tile === 0 || tile === 2 || tile === 5
        return {
            x: xIndex,
            y: yIndex,
            type: tile,
            canVisit: canVisit,
            visited: visited,
            isPacManHere: false
        }
    })
})

export const initialState = {
    gameMap : map,
    score: 0,
    highscore: hs
}
