import React, { Component } from 'react';
import Compteur from './Compteur';
import GestionMort from './GestionMort';


const compteur = {
    userVie:{
        vie:1
    }
}

class Clavier extends Component {

    

    state={
        lettre:'',
        length: this.props.length,
        compteur
    }

    createLettre = () => {
        const { addLettre, pseudo, length} = this.props

        //Formater la lettre à un objet
        const lettre ={
            pseudo,
            lettre: this.state.lettre
        }

        addLettre(lettre)

        //Reset
        this.setState({lettre: '', length})
    }

    /**
     * Méthode qui va permettre le submit sur l'input
     */
    handleSubmit = event => {
        event.preventDefault()
        //Envoyer l'objet lettre au moment du Submit
        this.createLettre()
        
        console.log('Submit')
    }

    handleChange = event => {
        const lettre = event.target.value //Stocker le message
        this.setState({lettre})
    }

    /**
     * Methode qui va permettre de soumettre avec entrée
     */
    handleKeyUp = event => {
        if(event.key === 'Enter') {
            this.createLettre();
        }
    }


    /**
     * Méthode qui va soustraire le compteur de -1 à chaque lettre soumise
     */
    gestionLife = (num) => {
        const compteur = {...this.state.compteur}
        compteur.userVie.vie -= num 
        this.setState({compteur})

        console.log({compteur})
    }





    render(){


        return(

            <div className='letterBox'>
                <form className='letter'
                      onSubmit={this.handleSubmit}>

                    <input
                    value={this.state.lettre} 
                    onChange={this.handleChange}
                    onKeyUp={this.handleKeyUp}
                    placeholder='Tapez votre lettre'
                    type='text'
                    maxLength={this.state.length}
                    required/>

                    <Compteur
                        compteurMoinsUn={() => this.gestionLife(1)}/>

                </form>

                <form className='popupRestart'>
                    <GestionMort
                      vie={compteur.userVie.vie}/>
                </form>

            </div>

        )
    }

}

export default Clavier