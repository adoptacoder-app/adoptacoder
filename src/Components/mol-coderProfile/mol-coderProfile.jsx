import React, { useState, useEffect } from 'react';
import CoderSnippet from '../atom-coderSnippet/atom-coderSnippet';
import "./mol-coderProfile.css";
import { useParams } from 'react-router-dom';
import TechIcons from '../atom-techIcons/atom-techIcons';

function CoderProfile() {
  const { id } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(`https://63f6400d59c944921f706c26.mockapi.io/api/user/${id}`)
      .then(response => response.json())
      .then(data => setItem(data))
      .catch(error => console.error(error));
  }, [id]);


  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className='coderProfile-container'>
      <CoderSnippet 
        img={item.avatar} 
        firstName={item.firstName} 
        lastName={item.lastName} 
        area={item.backEnd ? "Backend Developer" : item.frontEnd ? "Frontend developer" : "Full Stack Developer"} 
        experience={item.junior ? "Junior Developer" : item.senior ? "Senior Developer" : "Mid Developer"}
        github={item.github}
      />
      <TechIcons 
        html={item.html} 
        css={item.css} 
        javascript={item.javaScript} 
        react={item.react} 
        angular={item.angular}
        vue={item.vue} 
        python={item.python} 
        php={item.php} 
        laravel={item.laravel} 
        sql={item.sql} 
        />
    </div>
  );
}

export default CoderProfile;