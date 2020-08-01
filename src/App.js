import React from "react";
import { User } from "./users/pages/User";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
import NewPlace from "./places/pages/NewPlace";
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "./users/pages/Auth";

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
            <Route path="/:userId/places" exact>
              <UserPlaces />
            </Route>
            <Route path="/places/new" exact>
              <NewPlace />
            </Route>

            <Route path="/places/:placeId" exact>
              <UpdatePlace />
            </Route>
            <Route path="/auth" exact>
              <Auth></Auth>
            </Route>
            <Redirect to="/"></Redirect>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
