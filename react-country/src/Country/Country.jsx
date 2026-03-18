//Eikahne array ke dekhabo 
import React from 'react';

const Country = ({ country }) => {

   const handleVisited = ()=>{
    console.log("btn is cliked");
   }

    return (
        <div>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name:{country.name.common} </h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {
                
                country.area.area > 30000 ? "Big country": "Small Country"

                }</p>

                <button onClick={handleVisited} >Not visited</button>

        </div>
    );
};

export default Country;