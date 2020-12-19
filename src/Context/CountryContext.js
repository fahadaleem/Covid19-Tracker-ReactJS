import React, { createContext, useEffect, useState } from "react"
import axios from "axios"

export const CountryContext = createContext();


export const CountryContextProvider = (props) => {


    // countries states
    let [countries, setCountries] = useState([])

    // fetch countries
    const getCountries = () => {
        axios.get("https://covid19.mathdro.id/api/countries")
            .then(response => {
                setCountries([...response.data.countries])
            })
            .catch(error => console.log(error));
    }


    useEffect(() => {
        getCountries();
    }, [])


    return (

        <CountryContext.Provider value={{ countries }}>
            {props.children}
        </CountryContext.Provider>

    )
}