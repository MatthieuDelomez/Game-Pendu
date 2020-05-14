import React, { Fragment } from 'react';
import PopUpEngGame from './PopUpEngGame'


const GestionMort = ({vie}) => {

    if(vie === 0 || vie < 0) {
        return(
            <div className='fin'>
            <h2>You Are Dead !</h2>
            <PopUpEngGame/>
            </div>
        )
    } else {
        return(
            <h2>Welcome In Darksoul !</h2>
        )
    }
}

        



export default GestionMort;