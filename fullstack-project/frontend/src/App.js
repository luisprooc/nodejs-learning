import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import {FrontPage,AboutPage,TechnologiesPage, SingleTechnology} from "./components/screens";

const App = () =>{
  return(
    <BrowserRouter>
        <Route exact path="/" component={FrontPage}/>
        <Route exact path="/about" component={AboutPage}/>
        <Route exact path="/api/technologies" render={()=> <TechnologiesPage />}/>
        <Route exact path="/api/technology/:id" render={()=> <SingleTechnology />}/>
    </BrowserRouter>
  )
}

export default App;
