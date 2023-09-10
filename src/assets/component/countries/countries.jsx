import { useEffect } from "react"
import { useState } from "react"
import Country from "../country/country"
import './countries.css'

export default function Countries() {
    const [countries, setcountries] = useState([])

    const [visitedCountry, setvisitedCountry] = useState([])

    const handleVisitedCountry = (country) => {
        console.log('i have visit this counter')
        const myvisitedCountry = [...visitedCountry, country]
        setvisitedCountry(myvisitedCountry)
        // console.log(country)

    }
    // console.log(visitedCountry)
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setcountries(data))
    }, [])

    //show flag of visiting
    const [visitedflag, setvisitedflag] = useState([])

    const hindlevisitedflag = (flag) => {
        const newflag = [...visitedflag, flag]
        setvisitedflag(newflag)
        //    console.log(visitedflag)
    }
    return (
        <div>
            <h3>Country:{countries.length}</h3>
            <h4>Visited Country:{visitedCountry.length}</h4>
            <ul>
                {
                    visitedCountry.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }
            </ul>
          <div>
          {
                visitedflag.map((flag, index) => <img className="flag" src={flag} key={index} alt="" ></img>)
            }
          </div>
            <div className="contries">
                {
                    countries.map(country =>
                        <Country key={country.cca3} handleVisitedCountry={handleVisitedCountry} hindlevisitedflag={hindlevisitedflag} country={country}></Country>)
                }
            </div>
        </div>
    )
}