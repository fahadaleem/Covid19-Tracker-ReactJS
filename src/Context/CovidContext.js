import React, { createContext, useContext, useState, useEffect } from "react"
import axios from "axios"

export const CovidContext = createContext();

export const CovidContextProvider = (props) => {

    const [country, setChoosenCountry] = useState('Global');

    const [covidData, setCovidData] = useState();

    // Fetch Covid Data

    async function fetchData() {

        let response;

        if (country === "Global") {
            response = await axios.get(`https://covid19.mathdro.id/api`);

        }
        else {
            response = await axios.get(`https://covid19.mathdro.id/api/countries/${country}`);
        }
        setCovidData(response.data);



    }

    useEffect(() => fetchData(), [country]);

    // if (covidData === null) {
    //     return <h1>Loading here</h1>
    // }



    return (
        <CovidContext.Provider value={{ country, setChoosenCountry, covidData }}>
            {props.children}
        </CovidContext.Provider>
    )
}