import {initialState} from "./initialState"
import {DEPLOY_PACMAN, START_GAME} from "./actions/types"
import {gameMap} from "../utils/gameMap";

export const reducer = (
    state = initialState,
    action
) => {
    const newState = {...state}
    // switch (action.type) {
    //     case START_GAME:
    //         return {
    //             ...state
    //         }
    //     case DEPLOY_PACMAN:
    //         return
    //             newState.gameMap[18][13].isPacManHere = true
    //             // gameMap: state.gameMap[18][13].isPacManHere = true
    //
    //
    //         // console.log("prikol", state.gameMap[18][13] )
    //
    // }
    switch (action.type) {
        case START_GAME:
            return newState;
        case DEPLOY_PACMAN:
            newState.gameMap[17][13].isPacManHere = true
            return newState;
    }
};
