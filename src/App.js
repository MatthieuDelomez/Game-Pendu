import React, {Component} from 'react';
import './App.css';
import Clavier from './components/Clavier';
import LettreSubmit from './components/LettreSubmit';



class App extends Component {

    /**
     * Création du state
     */
    state = {
      lettres: {}, //Objet vide
      pseudo: this.props.match.params.pseudo, // Gestion du pseudo dans le state grâce à react router
      
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

    


  render(){



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

    


      </div>
    )
  }
}



export default App;
