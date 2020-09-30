import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/Home";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route
          component={() => <div>Page was not found! Out of information!</div>}
        />
      </Switch>
    );
  }
}

export default App;
