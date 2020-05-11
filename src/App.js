import React, {Component} from 'react';
import './App.css';
import Clavier from './components/Clavier';
import LettreSubmit from './components/LettreSubmit';

class App extends Component {



  render(){

    return(
      <div className='box'>
        <div>
          <div className='lettres'>
            <LettreSubmit/> 
            <LettreSubmit/> 
          </div>
        </div>
        <Clavier/>
      </div>
    )
  }
}



export default App;
