import React from 'react';
import { useState, useEffect } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Home() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
        // get the currency symbol from the url
        // these two lines get the params object from the url (address bar), 
        // and then we save into a variable called symbol for us to use later
        const params = useParams();
        console.log(params);
        const symbol = params.symbol;
        // use the apiKey and symbol variables to make our url
        const url = `https://rickandmortyapi.com/api/character/`;
    
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
            getRick();
        }, []);
    
        // loaded function shows up when the data has been fetched
        const loaded = () => {
            return (
               <>
    {/* <div className="box"> {rick.results.map(m => {return ( 
    <>
    <div className="box2"><h1>{m.id}</h1>
    <h3>{m.name}</h3>
    <img src = {m.image} alt={m.name}/>
    <h4>{m.status}</h4></div>
     </>)})} 
     </div> */}


        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={1000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={false}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
          rewind
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={2}
          swipeable
        >
            {rick.results.map(m => {return (
                <>
                    
                    <div className="box2">
                    <Link to={`/${m.id}`}>
                    <h2><img src = {m.image} alt={m.name}/></h2>
                    </Link>
                    <h1>{m.id}</h1>
                    <h3>{m.name}</h3>
                  
                    </div>
                </>
            )})}
        </Carousel>


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