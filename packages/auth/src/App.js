import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

const App = ({ history, onSignIn }) => {
  return(
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/auth/signin">
              <SignIn onSignIn={onSignIn} />            
            </Route>
            <Route exact path="/auth/signup">
              <SignUp onSignIn={onSignIn} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  ) 
}

export default App;