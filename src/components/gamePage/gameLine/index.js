import React from 'react';
import style from './gameLine.module.css'
import GameTile from './gameTile'


const GameLine = ({tiles}) => {
    return (
        <div className={style.line}>
            {
                tiles.map(tile => {
                    return <GameTile type={tile}/>
                })

            }
        </div>
    );
};

export default GameLine;