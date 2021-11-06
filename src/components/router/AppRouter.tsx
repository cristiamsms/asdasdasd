import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { LoginScreen } from "../auth/LoginScreen";
import { MainScreen } from "../main/MainScreen";

export const AppRouter =() => {
  return (
    <Router>
      <div>
        
        <Switch>
         
         <Route exact path="/login" component={LoginScreen} />
         <Route exact path="/" component={ MainScreen } />
         <Redirect to="/" />

        </Switch>
      </div>
    </Router>
  );
}