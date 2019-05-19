import React from "react";
import Park from "./Park";
import Dashboard from "./Dashboard";
import { the_park } from "../util/park";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app">
        <h1>A Bus Park</h1>
        <h2>Try Give Some Commands To Run!</h2>
        <Park squares={[]} onClick={i => console.log("x")} />
        <hr />
        <Dashboard commands={the_park} />
      </div>
    );
  }
}

export default App;
