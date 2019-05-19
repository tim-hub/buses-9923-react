import React from "react";

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
    this.state = { buses: props.buses };
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
    console.log(this.state.buses);
    const places = [];
    for (let i = 0; i < 5; i++) {
      let symbol = " ";
      const bus = this.state.buses.find(x => {
        return x.x === i && x.y === y;
      });
      if (bus) {
        console.log("found");
        symbol = this.getSymbol(bus.facing);
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
  // shouldComponentUpdate(nextProps, nextState) {
  //   return true;
  // }
}

export default Park;
