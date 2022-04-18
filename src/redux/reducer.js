import {initialState} from "./initialState"
import {DEPLOY_PACMAN, MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT, MOVE_UP, START_GAME} from "./actions/types"


export const reducer = (
  state = initialState,
  action
) => {
  const newState = {...state}
  switch (action.type) {
    case START_GAME:
      return newState
    case DEPLOY_PACMAN:
      newState.gameMap[17][13].isPacManHere = true
      newState.currentLocation = {y: 17, x: 13}
      return newState
    case MOVE_UP:
      let yLocationUp = newState.currentLocation.y - 1
      if (newState.gameMap[yLocationUp][newState.currentLocation.x].canVisit === true) {
        newState.gameMap[newState.currentLocation.y][newState.currentLocation.x].isPacManHere = false
        newState.currentLocation = {x: newState.currentLocation.x, y: yLocationUp}
        newState.gameMap[yLocationUp][newState.currentLocation.x].isPacManHere = true
        if (newState.gameMap[yLocationUp][newState.currentLocation.x].visited === false) {
          newState.gameMap[yLocationUp][newState.currentLocation.x].visited = true
          newState.score = newState.score += 100
        }
      }
      return newState
    case MOVE_DOWN:
      let yLocationDown = newState.currentLocation.y + 1
      if (newState.gameMap[yLocationDown][newState.currentLocation.x].canVisit === true) {
        newState.gameMap[newState.currentLocation.y][newState.currentLocation.x].isPacManHere = false
        newState.currentLocation = {x: newState.currentLocation.x, y: yLocationDown}
        newState.gameMap[yLocationDown][newState.currentLocation.x].isPacManHere = true
        if (newState.gameMap[yLocationDown][newState.currentLocation.x].visited === false) {
          newState.gameMap[yLocationDown][newState.currentLocation.x].visited = true
          newState.score = newState.score += 100
        }
      }
      return newState
    case MOVE_LEFT:
      let xLocationLeft = newState.currentLocation.x - 1 >= 0 ? newState.currentLocation.x - 1 : 27
      if (newState.gameMap[newState.currentLocation.y][xLocationLeft].canVisit === true) {
        newState.gameMap[newState.currentLocation.y][newState.currentLocation.x].isPacManHere = false
        newState.currentLocation = {x: xLocationLeft, y: newState.currentLocation.y}
        newState.gameMap[newState.currentLocation.y][xLocationLeft].isPacManHere = true
        if (newState.gameMap[newState.currentLocation.y][xLocationLeft].visited === false) {
          newState.gameMap[newState.currentLocation.y][xLocationLeft].visited = true
          newState.score = newState.score += 100
        }
      }
      return newState
    case MOVE_RIGHT:
      let xLocationRight = newState.currentLocation.x + 1 <= 27 ? newState.currentLocation.x + 1 : 0
      if (newState.gameMap[newState.currentLocation.y][xLocationRight].canVisit === true) {
        newState.gameMap[newState.currentLocation.y][newState.currentLocation.x].isPacManHere = false
        newState.currentLocation = {x: xLocationRight, y: newState.currentLocation.y}
        newState.gameMap[newState.currentLocation.y][xLocationRight].isPacManHere = true
        if (newState.gameMap[newState.currentLocation.y][xLocationRight].visited === false) {
          newState.gameMap[newState.currentLocation.y][xLocationRight].visited = true
          newState.score = newState.score += 100
        }
      }
      return newState
  }
};
