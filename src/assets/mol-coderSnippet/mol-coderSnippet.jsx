import React from 'react';
import { useState, useEffect } from 'react';
import "./mol-coderSnippet.css";

function CoderSnippet() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://63f6400d59c944921f706c26.mockapi.io/api/user')
          .then(response => response.json())
          .then(data => setData(data))
          .catch(error => console.error(error));
      }, []);


    return (
    <div className='coderSnippet-container'>
        <img src={data.avatar} className="coderSnippet-photo" alt="coder img"></img>
        <h1>{data.firstName + data.lastName}</h1>
        <h2>Backend Dev</h2>
        <h3>Junior Developer</h3>
    </div>
  )
}

export default CoderSnippet