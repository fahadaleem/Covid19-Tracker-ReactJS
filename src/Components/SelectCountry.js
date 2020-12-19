import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { CountryContext } from "../Context/CountryContext"
import {CovidContext} from "../Context/CovidContext"

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 440,
    textAlign: "left"
  },

  select: {
    width: "550px", 
    fontFamily:"Josefin Sans"
  }
,
  setFontFamily:{
    fontFamily:"Josefin Sans"
  }
}));

export default function SimpleSelect() {
  const classes = useStyles();


  let { countries } = useContext(CountryContext);

  // Add Global in the select option
  countries.unshift({name:"Global"});
  const {country, setChoosenCountry} = useContext(CovidContext)


  const handleChange = (event) => {
    setChoosenCountry(event.target.value);
  };



  return (
    <div style={{ textAlign: "center" }}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label" className={classes.setFontFamily}>Choose Country</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={country}
          onChange={handleChange}
          className={classes.select}
        >
          {
            countries.map((cur, ind) => {
              return <MenuItem value={cur.name} key={ind} className={classes.setFontFamily}>{cur.name}</MenuItem>
            })
          }

        </Select>
      </FormControl>
    </div>
  );
}
