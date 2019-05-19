import React from "react";
import Dashboard from "./Dashboard";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app">
        <h1>A Bus Park</h1>
        <b>Try Give Some Commands To Run!</b>

        <Dashboard />
      </div>
    );
  }
}

export default App;
