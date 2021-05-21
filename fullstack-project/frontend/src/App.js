import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import {FrontPage,AboutPage} from "./components/screens";

const App = () =>{
  return(
    <BrowserRouter>
        <Route exact path="/" component={FrontPage}/>
        <Route exact path="/about" component={AboutPage}/>
    </BrowserRouter>
  )
}

export default App;
