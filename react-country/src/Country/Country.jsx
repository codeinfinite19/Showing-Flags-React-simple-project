//Eikahne array ke dekhabo 
import React, { useState } from 'react';
import "./Country.css"

const Country = ({ country, handleVisitedCountries,  handleVisitedFlags }) => { 


    
    const [visited, setVisited] = useState(false);


    
   const handleVisited = ()=>{
      //1 st system

   // setVisited(true);


    // 2nd system
//    if(visited){
//     setVisited(false);
//    }else{
//     setVisited(true)
//    }

       // 3rd system

        //setVisited(visited? false : true);

        // 4 th system by toggle
        setVisited(!visited);
        handleVisitedCountries(country);

    
    
   }

    return (
        <div className={ `country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name:{country.name.common} </h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {
                
                country.area.area > 30000 ? "Big country": "Small Country"

                }</p>

                <button onClick={handleVisited} > {
                
                visited ? "Visited": "Not Visited"
                
                } </button>

                <button onClick={ ()=>{ handleVisitedFlags(country.flags.flags.png) }} >Add Visited Flag</button>

        </div>
    );
};

export default Country;