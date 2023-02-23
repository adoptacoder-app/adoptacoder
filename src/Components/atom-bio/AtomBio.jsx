import React from "react";
import "./atomBio.css"; 



export default function AtomBio({bio}) {
   
    return (
            <div className="bioDiv">
            <h2>Sobre mí</h2>
            <div className="bioTxt"><p>{bio}</p></div>
            </div>
            )
    };