import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
