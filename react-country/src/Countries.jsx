import React, { use } from 'react';
import Country from './Country/Country';
import "./Countries.css"

const Countries = ({countriesPromise}) => {

    const countries = use(countriesPromise);
    console.log(countries);

   // console.log(countries.population.population);
    
    return (
        <div>
            <h1>This is country..: {countries.countries.length}</h1>

            <div className='countries'>

                 {
                countries.countries.map(country => 
                <Country
                key={country.cca3.cca3} 
                country={country}

                ></Country>)
            }

            </div>
           
        </div>
    );

};

export default Countries;