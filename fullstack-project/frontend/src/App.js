import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {FrontPage} from "./components/screens";

const App = () =>{
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={FrontPage}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
