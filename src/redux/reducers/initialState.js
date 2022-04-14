let hs = localStorage.getItem('highscore') ? localStorage.getItem('highscore') : 0;

export const initialState = {
    gameMap : 1,
    score: 0,
    highscore: hs
}