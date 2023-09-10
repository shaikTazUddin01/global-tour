import { useState } from 'react';
import './country.css';

const Country = ({country,handleVisitedCountry,hindlevisitedflag}) => {
    const[visited,setvisited]=useState(false)
    function hindleVisited(){
        setvisited(!visited)
    }
    // console.log(handleVisitedCountry)
    
    const {name,flags,population,cca3}=country
    return (
        <div className={`box ${visited && `visited`}`}>
           <h4 style={{color: visited ? 'purple' : 'red'}}>Name:{name?.common}</h4> 
           <h5>Offical Name:{name?.official}</h5>
           <img src={flags.png} alt="" className='img'/>
           <h4>population:{population} jon</h4>
           <h4>Code:{cca3}</h4>
           <button className='btn' onClick={()=>handleVisitedCountry(country)}>mark Visited</button>
           <br />
           <br />
           <button className='btn' onClick={()=>hindlevisitedflag(flags.png)}>Flag</button>
           <button className='btn' onClick={hindleVisited}>{visited?'visited':"going"}</button>
           {visited ? "i am visited this country" : "i want to visited this country"}
        </div>
    );
};

export default Country;