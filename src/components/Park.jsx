import React from "react";

function Square(props) {
  return (
    <button className="square">
      <b>{props.value}</b>
    </button>
  );
}

class Park extends React.Component {
  renderSquare(symbol) {
    return <Square value={symbol} />;
  }

  getBusSymbol(direction) {
    if (direction === "NORTH") return "^";
    else if (direction === "EAST") return ">";
    else if (direction === "SOUTH") return "v";
    else if (direction === "WEST") return "<";
    return "";
  }

  renderARow(y) {
    const places = [];
    for (let i = 0; i < 5; i++) {
      let symbol = " ";
      const bus = this.props.buses.find(x => {
        return x.x === i && x.y === y;
      });
      if (bus) {
        symbol = this.getBusSymbol(bus.facing);
      }
      places.push(this.renderSquare(symbol));
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
}

export default Park;
