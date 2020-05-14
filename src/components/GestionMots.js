import React, { Component } from 'react'


class GestionMots extends Component {
    

    render() {
        return(
                <button onClick={this.props.afficherMot}>Générer votre mot</button>
        )
    }
}

export default GestionMots