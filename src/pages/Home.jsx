import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Home() {

        // make a variable to store our api key
        // const apiKey = "6582CF5C-344E-43D9-AB37-B52032C92770";
        // get the currency symbol from the url
        // these two lines get the params object from the url (address bar), 
        // and then we save into a variable called symbol for us to use later
        const params = useParams();
        console.log(params);
        const symbol = params.symbol;
        // use the apiKey and symbol variables to make our url
        const url = `https://rickandmortyapi.com/api/character`;
    
        // state to hold the coin data
        const [rick, setRick] = useState(null);
    
        // function to fetch coin data
        const getRick = async () => {
            try {
                console.log(url)
                const response = await fetch(url);
                const data = await response.json();
                setRick(data);
            } catch (e) {
                console.error(e);
            }
        }
    
        // useEffect to run getCoin when component mounts
        useEffect(() => {
            getRick(url);
        }, []);
    
        // loaded function shows up when the data has been fetched
        const loaded = () => {
            return (
               <>
               {/* <div>
                <h1>Name: {rick.results[0].name}</h1>
     <h2>Status: {rick.results[0].status}</h2>
     <h2>Species: {rick.results[0].species}</h2>
     <h2>Gender: {rick.results[0].gender}</h2>
    <br/>
    <img src={rick.results[0].image} alt={rick.results[0].name} /> 
    </div> */}

    <div> {rick.results.map(m => {return ( 
    <>
    <h1>{m.id}</h1>
    <h3>{m.name}</h3>
    <img src = {m.image} alt={m.name}/>
    <h4>{m.status}</h4>
     </>)})} 
     </div>

     <div>

     </div>

    </>
   
    )
            }
        // function for when data doesn't exist yet
        const loading = () => {
            return <h1>Loading...</h1>
        }
    
        // if coin has data - so if coin is not null
    
      return (
       
        rick ? loaded() : loading()
        
      )
    }
    
    


export default Home