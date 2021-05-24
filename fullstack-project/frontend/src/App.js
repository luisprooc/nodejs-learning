import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {FrontPage,AboutPage,TechnologiesPage, SingleTechnology,ResultsPage} from "./components/screens";
import Nav from "./components/Nav";

const App = () =>{
  return(
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={FrontPage}/>
        <Route exact path="/about" component={AboutPage}/>
        <Route exact path="/api/technologies" render={()=> <TechnologiesPage />}/>
        <Route exact path="/api/technology/:id" render={({match})=> <SingleTechnology id={match.params.id}/>}/>
        <Route exact path="/api/technology/search/:name" render={({match})=> <ResultsPage name={match.params.name}/>}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
