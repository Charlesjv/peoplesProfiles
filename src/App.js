import React from "react";
import { User } from "./users/pages/User";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import MainNavigation from "./shared/components/Navigation/MainNavigation";

function App() {
  return (
    <div className="App">
      <Router>
        <MainNavigation />
        <main>
          <Switch>
            <Route path="/user" exact>
              <User />
            </Route>
            <Redirect to="/"></Redirect>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
