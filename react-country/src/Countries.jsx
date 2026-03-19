import React, { use, useState } from 'react';
import Country from './Country/Country';
import "./Countries.css"

const Countries = ({countriesPromise}) => {

    const countries = use(countriesPromise);
   // console.log(countries);

   // console.log(countries.population.population);

  
  
  
   //count the country name that visited

   const [visitedCountries, setVisitedCountries] = useState([]);
 
    const [visitedFlags, setVisitedFlags] = useState([])


   const handleVisitedCountries = (country) =>{
    console.log("handle is clicked",country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);


   }



   const handleVisitedFlags = (flag)=>{
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags)
    }

    
    return (
        <div>
            <h1>This is country..: {countries.countries.length}</h1>
            <h3>Total country Visited:{visitedCountries.length} </h3>
            <p>Total flag: {visitedFlags.length}</p>


           
            <ol>
                {
                    visitedCountries.map(country => 
                        <li
                            key={country.cca3.cca3}
                        >
                            {
                                country.name.common
                            }
                        </li>
                    )

                }

            </ol>

            <div>
                {
                    visitedFlags.map(flag =><img src={flag} alt="" /> )
                }
            </div>

            <div className='countries'>

                 {
                countries.countries.map(country => 
                <Country
                key={country.cca3.cca3} 
                country={country}

                handleVisitedCountries = {handleVisitedCountries}

                 handleVisitedFlags= { handleVisitedFlags}
                

                ></Country>)
            }

            </div>
           
        </div>
    );

};

export default Countries;