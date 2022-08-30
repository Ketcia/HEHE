import { Switch, Route } from "react-router-dom";
import React from "react"
import {Home, Sim, Nao}from "pages";


const Routes = () => {
  return (
    <Switch>

      <Route path="/sim" component={Sim}/>
      <Route path="/nao" component={Nao}/>
      <Route path="/" component={Home}/>
      
    </Switch>
  );
};

export default Routes;