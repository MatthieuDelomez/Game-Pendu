import React, {Component} from 'react';
import './App.css';
import Clavier from './components/Clavier';
import LettreSubmit from './components/LettreSubmit';
import mots from './donnees/mots';
import GestionMots from './components/GestionMots';
import Card from './components/Card';




class App extends Component {

    /**
     * Création du state
     */
    state = {
      lettres: {}, //Objet vide
      pseudo: this.props.match.params.pseudo, // Gestion du pseudo dans le state grâce à react router
      mots: {}
    }

    /**
     * Ajouter une lettre au state
     */
    addLettre = lettre => {

      //Copie du state
      const lettres = {...this.state.lettres}

      //Gestion de la clé unique
      lettres[`lettre-${Date.now()}`] = lettre

      //Mise a jour du state
      this.setState({lettres})
    }

    handleShowMort = () => {
      const isMort = !this.state.isMort;
      this.setState({isMort});
    }

    afficherMot = () => this.setState({mots})



  render(){

    const cards = Object
                        .keys(this.state.mots)
                        .map(key => <Card detail={this.state.mots[key]}></Card>)

    const lettres = Object
                          .keys(this.state.lettres)
                          .map(key => (
                            <LettreSubmit
                              key={key}
                              lettre={this.state.lettres[key].lettre}
                              pseudo={this.state.lettres[key].pseudo}/>
                          ))

    return(



      <div className='box'>
        <div>
          <div className='lettres'>
            <div className='lettre'>
              {lettres}
            </div>
          </div>
        </div>
        
        <Clavier
          length={1}
          addLettre={this.addLettre}
          pseudo={this.state.pseudo}>
        </Clavier>

        <div className='cards'>
          {cards}
        </div>

      <div className='affichageMot'>
        <GestionMots
          afficherMot={this.afficherMot}>
        </GestionMots>
        </div>

      </div>
    )
  }
}



export default App;
