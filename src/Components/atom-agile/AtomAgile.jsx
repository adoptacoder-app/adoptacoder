import React from 'react';
import "./atomAgile.css";

export default function AtomAgile({agile, gitflow, tdd}){
    console.log(agile);
    return (
        <div className="bioDiv">
        <h2>Algo más</h2>
            <div className="somethingElse">
                {agile ? (<p>Tengo experiencia en Agile.</p>) : null}
                {gitflow ? (<p>Sé trabajar con GIT</p>) : null}
                {tdd ? (<p>Puedo hacer tests</p>) : null}
            </div>
        </div>
        )
}

