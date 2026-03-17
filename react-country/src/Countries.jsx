import React, { use } from 'react';
import Country from './Country/Country';

const Countries = ({countriesPromise}) => {

    const countries = use(countriesPromise);
    console.log(countries);
    
    return (
        <div>
            <h1>This is country..: {countries.countries.length}</h1>
            {
                countries.countries.map(country => <Country
                key={country.cca3} country={country}

                ></Country>)
            }
        </div>
    );

};

export default Countries;