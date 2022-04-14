import React from 'react';
import style from './gameTile.module.css'


const GameTile = ({type}) => {
    let selectedDiv = type === 0 ? <div className={style.space}/> : type === 1 ?
        <div className={style.wall}/> : type === 2 ? <div className={style.space}/> : type === 3 ?
            <div className={style.gateSpace}><div className={style.gate}></div></div> : <div className={style.space}/>
    return (
        selectedDiv
    );
};

export default GameTile;