
import React from 'react'

export default function ButtonPlayer({playstate,clickplay}) {
    return (
        <div className='buttoncontainer'>
           <div className="player-button" onClick={clickplay}>
    <h3 className="button-text">{playstate?'STOP':'PLAY'}</h3>
            </div>    
        </div>
    )
}
