import React, { Component } from "react";
import Navbar from "./componand/Navbar";
import News from "./componand/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <News
                key="general"
                country="in"
                pageSize={5}
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <News
                key="business"
                country="in"
                pageSize={5}
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                key="entertainment"
                country="in"
                pageSize={5}
                category="entertainment"
              />
            </Route>
            <Route exact path="/science">
              <News
                key="science"
                country="in"
                pageSize={5}
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <News key="sports" country="in" pageSize={5} category="sports" />
            </Route>
            <Route exact path="/health">
              <News key="health" country="in" pageSize={5} category="health" />
            </Route>
            <Route exact path="/technology">
              <News
                key="technology"
                country="in"
                pageSize={5}
                category="technology"
              />
            </Route>
            <Route exact path="/about">
              <News key="about" country="in" pageSize={5} category="about" />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}
