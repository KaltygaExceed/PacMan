import React from 'react';
import style from './gameTile.module.css'


const GameTile = ({tile}) => {
    let selectedDiv = tile.type === 0 ?
        <div className={style.space}>{tile.isPacManHere === true ? <div className={style.pacman}/> : tile.visited === false ? <div className={style.dot}/> : null}</div> : tile.type === 1 ?
            <div className={style.wall}/> : tile.type === 2 ?
                <div className={style.space}>{tile.isPacManHere === true ? <div className={style.pacman}/> : tile.visited === false ? <div className={style.bigDot}/> : null}</div> : tile.type === 3 ?
                    <div className={style.enemySpace}>
                        <div className={style.gate}/>
                    </div> : tile.type === 4 ? <div className={style.space}/> : <div className={style.space}>{tile.isPacManHere === true ? <div className={style.pacman}/> : null}</div>
    return (
        selectedDiv
    );
};

export default GameTile;