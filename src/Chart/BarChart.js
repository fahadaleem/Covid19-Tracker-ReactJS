import React, {useContext} from 'react';
import {Bar} from 'react-chartjs-2';
import {CovidContext} from "../Context/CovidContext"



const BarGraphStyles  = {
    height:"400px", 
}

const BarGraph = ()=>{

const {covidData, country} = useContext(CovidContext);

if(covidData===undefined)
{
    return <h1>Loading...</h1>
}


let {deaths, confirmed, recovered} = covidData;

const data = {
    labels: ['Confirmed','Recovered','Deaths'],
    datasets: [
      {
        backgroundColor: ['#7D7DF0', '#7DF07D', '#FF7F7F'],
        data: [confirmed.value, recovered.value, deaths.value],
        fontFamily:'Josefin Sans'
      }
    ], 
    
  };
    return (
        <div style={BarGraphStyles}>
        <h2 style={{textAlign:"center"}}>Graph of Covid Cases in {country}</h2>
        <Bar
          data={data}
          width={100}
          height={50}
          options={{legend:{display:false}}}
          
        />
      </div>
    )
};


export default BarGraph;