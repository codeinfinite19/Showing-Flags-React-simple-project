import React, { use, useState } from 'react';
import Country from './Country/Country';
import "./Countries.css"

const Countries = ({countriesPromise}) => {

    const countries = use(countriesPromise);
   // console.log(countries);

   // console.log(countries.population.population);

   //count the country name that visited

   const [visitedCountries, setVisitedCountries] = useState([]);

   const handleVisitedCountries = (country) =>{
    console.log("handle is clicked",country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
    

   }
    
    return (
        <div>
            <h1>This is country..: {countries.countries.length}</h1>
            <h3>Total country Visited:{visitedCountries.length} </h3>

            <div className='countries'>

                 {
                countries.countries.map(country => 
                <Country
                key={country.cca3.cca3} 
                country={country}

                handleVisitedCountries = {handleVisitedCountries}

                ></Country>)
            }

            </div>
           
        </div>
    );

};

export default Countries;