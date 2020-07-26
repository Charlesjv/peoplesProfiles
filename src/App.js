import React from "react";
import { User } from "./users/pages/User";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/user" exact>
            <User />
          </Route>
          <Redirect to="/"></Redirect>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
