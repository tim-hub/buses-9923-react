import React from "react";
import Park from "./Park";
import { the_park } from "../util/park";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      facing: "NORTH",
      engine: the_park,
      buses: [],
      show_report: true
    };
  }
  setBuses() {
    this.setState({buses:the_park.buses});
  }
  render() {
    return (
      <div>
        <Park buses={this.state.buses} />
        <hr />
        <div className="board-row">
          <select
            className="command"
            value={this.state.x}
            onChange={event => {
              this.setState({ x: parseInt(event.target.value, 10) });
            }}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <select
            className="command"
            value={this.state.y}
            onChange={event => {
              this.setState({ y: parseInt(event.target.value, 10) });
            }}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <select
            className="command"
            value={this.state.facing}
            onChange={event => {
              this.setState({ facing: event.target.value });
            }}
          >
            <option value="NORTH">NORTH</option>
            <option value="EAST">EAST</option>
            <option value="SOUTH">SOUTH</option>
            <option value="WEST">WEST</option>
          </select>
          <button
            className="command"
            onClick={() => {
              this.state.engine.place(
                this.state.x,
                this.state.y,
                this.state.facing
              );
              this.setBuses();
            }}
          >
            Place
          </button>
        </div>
        <hr />
        <div className="board-row">
          <button
            className="command"
            onClick={() => {
              this.state.engine.move();
              this.setBuses();
            }}
          >
            Move
          </button>
          <button
            className="command"
            onClick={() => {
              this.state.engine.left();
              this.setBuses();
            }}
          >
            Turn Left
          </button>
          <button
            className="command"
            onClick={() => {
              this.state.engine.right();
              this.setBuses();
            }}
          >
            Turn Right
          </button>
          <button
            className="command"
            disabled = {!this.state.show_report}
            onClick={() => {
              alert('Do not need to click `Report` button, because result is displayed in UI after data changing.');
              this.setState({show_report: false});
            }}
          >
            Report
          </button>
        </div>
      </div>
    );
  }
}

export default Dashboard;
