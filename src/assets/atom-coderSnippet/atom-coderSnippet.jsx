import React from 'react';
import "./atom-coderSnippet.css";


function CoderSnippet({img, firstName, lastName, area, experience}) {

    return (
    <div className='coderSnippet-container'>
        <img src={img} className="coderSnippet-photo" alt="coder img"></img>
        <div className='coderSnippet-info'>
            <h1 className="coderSnippet-name">{firstName + " " + lastName}</h1>
            <h2>{area}</h2>
            <h3>{experience}</h3>
        </div>
    </div>
  )
}

export default CoderSnippet