import { useState, useEffect } from "react";
import React from 'react';
import { useParams } from "react-router-dom";


function Characters() {
  const url = `https://rickandmortyapi.com/api/character?page=2`;

  const [morty, setMorty] = useState(null);
  const getMorty = async () => {
    try {
        console.log(url)
        const response = await fetch(url);
        const data = await response.json();
        setMorty(data);
    } catch (e) {
        console.error(e);
    }
}
  // useEffect to run getCoin when component mounts
  useEffect(() => {
    getMorty();
}, []);
const loaded = () => {
  return (
  <> <div className="p">
    <div> {morty.results.map(M => {return (
     <div className="page2"><h1>ID:{M.id}  </h1>
     <h1>Name:{M.name} </h1>
     <h2>Status:{M.status} </h2>
     <h2>Species:{M.species}</h2>
     <h3>Gender:{M.gender}</h3>
     <h3>Origin : {M.origin.name} </h3>
   
     <h4>Location :{M.location.name}</h4>
     <h4><img src = {M.image} alt={M.name}/></h4></div>


    
    )})}</div></div> </>
  )
}
const loading = () => {
  return <h1>Loading...</h1>
}
return (
  morty ? loaded() : loading()
)
}
export default Characters