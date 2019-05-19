import React from "react";
import { the_park } from "../util/park";

function Square(props) {
  return (
    <button className="square">
      <b>{props.value}</b>
    </button>
  );
}

class Park extends React.Component {
  constructor(props) {
    super(props);
    this.state = { buses: the_park.buses };
  }
  renderSquare(symbol) {
    return <Square value={symbol} />;
  }

  getSymbol(direction) {
    if (direction === "NORTH") return "^";
    else if (direction === "EAST") return ">";
    else if (direction === "SOUTH") return "v";
    else if (direction === "WEST") return "<";
    return "";
  }

  renderARow(y) {
    const places = [];
    console.log(this.state.buses);

    for (let i = 0; i < 5; i++) {
      console.log(i + ` ` + y);

      const containing = false;
      containing = this.state.buses.map(bus => {
        if (bus.x === i && bus.y === y) {
          places.push(this.renderSquare(this.getSymbol(bus.facing)));
          return true;
        }
      });
      if (containing !== true) {
        places.push(this.renderSquare("*"));
      }
    }
    return places;
  }

  render() {
    return (
      <div>
        <div className="board-row">{this.renderARow(4)}</div>
        <div className="board-row">{this.renderARow(3)}</div>
        <div className="board-row">{this.renderARow(2)}</div>
        <div className="board-row">{this.renderARow(1)}</div>
        <div className="board-row">{this.renderARow(0)}</div>
      </div>
    );
  }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
}

export default Park;
