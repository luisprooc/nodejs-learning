import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import {FrontPage,AboutPage,TechnologiesPage} from "./components/screens";

const App = () =>{
  return(
    <BrowserRouter>
        <Route exact path="/" component={FrontPage}/>
        <Route exact path="/about" component={AboutPage}/>
        <Route exact path="/api/technologies" render={()=> <TechnologiesPage />}/>
    </BrowserRouter>
  )
}

export default App;
