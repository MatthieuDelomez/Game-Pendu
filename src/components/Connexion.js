import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class Connexion extends Component {

    state = {
        pseudo:'',
        goToGame: false //Variable qui va gérer la redirection une fois le pseudo rentré
    }

    /**
     * Event qui va prendre en compte l'enregistrement du pseudo
     */
    handleChange = event => {
        const pseudo = event.target.value
        this.setState({pseudo})
    }

    handleSubmit = event => {
        event.preventDefault(); //Anulation de l'événement par default
        this.setState({goToGame:true})//On set le goToGame à true pour être redirigé une fois le formulaire validé
    }


    render(){
        //Redirection vers la page App.js une fois le pseudo rentré (goToGame:true)
        if(this.state.goToGame) {
            return <Redirect push to={`/pseudo/${this.state.pseudo}`}></Redirect> //push = garder la page en historique
        }

     return(

            <div className='pseudoBox'>
                <form className='connexion' onSubmit={this.handleSubmit}> 

                    <input 
                    value={this.state.pseudo} //Valeur de notre input
                    onChange={this.handleChange} //changement du pseudo en fonction de l'event
                    placeholder='Tapez votre Pseudo'
                    type='text'
                    required/>

                    <button type='submit'>Let's Play</button>
                </form>

            </div>

        )
    }

}

export default Connexion