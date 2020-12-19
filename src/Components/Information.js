import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {CovidContext} from "../Context/CovidContext"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  paper:{
    backgroundColor:"white",
    width:"250px",
    height:"230px",
    margin:"20px 20px",
    padding:"20px"
    },
  confirmedPaper:
  {
    borderBottom:"10px solid #7D7DF0",
  },
  deathPaper:{
    borderBottom:"10px solid #FF7F7F"
  },
  recoveredPaper:{
    borderBottom:"10px solid #7DF07D"
  },
 
}));

export default function SimplePaper() {
  const classes = useStyles();
  const {covidData} = useContext(CovidContext);



  const getDate = (lastUpdate)=>{
    const date = new Date(lastUpdate);
    
    const days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const formattedDate = `${days[date.getDay()]} ${date.getDate()}, ${date.getFullYear()}`;

    return formattedDate;

  }

  if(covidData===undefined)
  {
    return <h1>Fetching Data</h1>
  }
else{

  let {deaths, confirmed, recovered, lastUpdate} = covidData;

  const lastUpdateDate = lastUpdate.slice(0,10);
  const date = getDate(lastUpdateDate);

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={`${classes.paper} ${classes.confirmedPaper}`} >
         <h2 className="title">Confirmed Cases</h2>
         <h1 className="cases-counts">{confirmed.value.toLocaleString()}</h1>
         <h3>{date}</h3>
         <p className="info">Number of active cases in Covid-19</p>
        </Paper>
     
      <Paper elevation={3} className={`${classes.paper} ${classes.recoveredPaper}`} >
      <h2 className="title">Recovered Cases</h2>
         <h1 className="cases-counts">{recovered.value.toLocaleString()}</h1>
         <h3>{date}</h3>
         <p className="info">Number of recovered cases in Covid-19</p>
         </Paper>
         <Paper elevation={3} className={`${classes.paper} ${classes.deathPaper}`} >
      <h2 className="title">Deaths</h2>
         <h1 className="cases-counts">{deaths.value.toLocaleString()}</h1>
         <h3>{date}</h3>
         <p className="info">Number of deaths in Covid-19</p></Paper>
    </div>
  );
}
}