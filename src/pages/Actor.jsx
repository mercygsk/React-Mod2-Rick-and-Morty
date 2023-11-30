import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Actor() {

  const params = useParams();
  console.log(params);
  const actorId = params.character;

  
  const url = `https://rickandmortyapi.com/api/character/${actorId}`
  const [actor, setActor] = useState("null");

  const getActor = async () => {
    try {
        console.log(url)
        const response = await fetch(url);
        const data = await response.json();
        setActor(data);
    } catch (e) {
        console.error(e);
    }
}

useEffect(() => {
  getActor();
}, []);

const loaded = () => {
  return (
      <div className='box2'>
          <h1>Name: {actor.name}</h1>
          <h2>Status: {actor.status}</h2>
          <h2>Species: {actor.species}</h2>
          <h2>Gender: {actor.gender}</h2>
          <img src = {actor.image} alt={actor.name}/>
          <div> <Location {...actor.location}/></div>
          <p>Hello, my name is {actor.name}, and I'm from species {actor.species} and originated from <Location {...actor.origin}/> blah blah blah blah blah blah blah blah bla bla </p>
      </div>
  )
}

  // function for when data doesn't exist yet
  const loading = () => {
    return <h1>Loading...</h1>
}

function Location({name, url}) {
  return (
    <span>{name}</span>
  );
}

  return (
  actor ? loaded() : loading()
  )
}

export default Actor