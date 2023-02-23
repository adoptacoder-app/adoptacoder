import React from 'react';
import "./atom-coderSnippet.css";
import { Icon } from '@iconify/react';
import { Button } from 'react-bootstrap';


function CoderSnippet({img, firstName, lastName, area, experience, github}) {

    return (
    <div className='coderSnippet-container'>
        <img src={img} className="coderSnippet-photo" alt="coder img"></img>
        <div className='coderSnippet-info'>
            <h3 className="coderSnippet-name">{firstName + " " + lastName}</h3>
            <h4 className="coderSnippet-area">{area}</h4>
            <h4>{experience}</h4>
            <a href={github}>
                <Button variant="light" className="rounded-pill">
                    <Icon icon="mdi:github" color="white" width="30" />
                    GitHub
                </Button>
            </a>
        </div>
    </div>
  )
}

export default CoderSnippet