import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import Layout from "../layout/Layout";
import Home from "../views/Home/Home";
import CharacterDetails from "../views/CharacterDetails/CharacterDetails";
import NotFound from "../components/NotFound/NotFound";

function App() {
  return (
    <div className="app__container">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route
              exact
              path="/characters/:charId"
              component={CharacterDetails}
            ></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
