import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import "./styles.css"
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Header from "./Components/Header"
import Information from "./Components/Information"
import SimpleSelect from "./Components/SelectCountry"
import {CountryContextProvider} from "./Context/CountryContext"
import {CovidContextProvider} from "./Context/CovidContext"
import BarGraph from "./Chart/BarChart"

export default function SimpleContainer() {
  return (
    <CountryContextProvider>
      <CovidContextProvider>
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
    <Header />
    <Information />
    <SimpleSelect />
    <BarGraph />
      </Container>
    </React.Fragment>
    </CovidContextProvider>
    </CountryContextProvider>
  );
}
