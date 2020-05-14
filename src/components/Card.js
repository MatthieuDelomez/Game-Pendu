import React, { Component } from 'react'
import reactStringReplace from 'react-string-replace'
/*
reactStringReplace(detail.nom, /(\d+)/g, (match, i) => (
    <span key={i} style={{ color: 'red' }}>{match}</span>

*/
const Card = ({detail}) => {

    return(
        reactStringReplace(detail.nom, /(Ordinateur)/g, () => <span>_ _ _</span>)




    )
    
}

export default Card