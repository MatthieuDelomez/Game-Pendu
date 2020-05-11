import React, { Component } from 'react';

class Clavier extends Component {


    render(){


        return(
            <div className='letterBox'>
                <form className='letter'>
                    <input 
                    placeholder='Tapez votre lettre'
                    type='text'
                    maxLength='1'
                    required/>

                    <button type='submit'>Soumettre votre lettre</button>
                </form>

            </div>

        )
    }

}

export default Clavier