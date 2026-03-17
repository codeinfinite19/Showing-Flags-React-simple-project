import React from 'react';
import Countries from './Countries';
import { Suspense } from 'react';
import './App.css'


const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())

const App = () => {
  return (
    <div>
      <Suspense fallback={ <p>Shahed Vhi Aktu Wait koren...</p> } >

      <Countries countriesPromise={countriesPromise} ></Countries>
      </Suspense>

    
    </div>
  );
};

export default App;