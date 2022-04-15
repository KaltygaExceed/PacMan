import React from 'react';
import style from './gameTile.module.css'


const GameTile = ({type}) => {
    let selectedDiv = type === 0 ?
        <div className={style.space}>{type === 0 && <div className={style.dot}/>}</div> : type === 1 ?
            <div className={style.wall}/> : type === 2 ?
                <div className={style.space}>{type === 2 && <div className={style.bigDot}/>}</div> : type === 3 ?
                    <div className={style.enemySpace}>
                        <div className={style.gate}/>
                    </div> : type === 4 ? <div className={style.space}/> : <div className={style.space}/>
    return (
        selectedDiv
    );
};

export default GameTile;