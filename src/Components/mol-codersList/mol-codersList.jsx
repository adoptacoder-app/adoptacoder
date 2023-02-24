import React from 'react';
import { useState, useEffect } from 'react';
import GenericCard from '../atom-card/atom-card';
import "./mol-codersList.css";

function CodersList() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch('https://63f6400d59c944921f706c26.mockapi.io/api/user')
          .then(response => response.json())
          .then(data => setData(data))
          .catch(error => console.error(error));
      }, []);
      console.log(data);

  return (
    <article className="coderList-container" >
        {data.slice(0,10).map(item => (
        <GenericCard 
            key={item.id} 
            img={item.avatar}
            name={item.firstName} 
            bio={item.bio}
            id={item.id}>
              {item.name}
        </GenericCard>
      ))}
    </article>
  )
}

export default CodersList