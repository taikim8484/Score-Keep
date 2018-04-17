import React, { Component } from "react";
import { Players } from "../api/player";

class Player extends Component {
  handleRemove = _id => {
    Players.remove({ _id });
  };
  handleIncrease = _id => {
    const { score } = Players.findOne({ _id });
    Players.update({ _id }, { score: score + 1 });
  };
  handleDecrease = _id => {
    const { score } = Players.findOne({ _id });
    score > 0 && Players.update({ _id }, { score: score - 1 });
  };
  render() {
    const { player } = this.props;
    return (
      <p key={player._id}>
        Player {player.name} has {player.score} points
        <button onClick={() => this.handleDecrease(player._id)}> - 1 </button>
        <button onClick={() => this.handleIncrease(player._id)}> + 1 </button>
        <button onClick={() => this.handleRemove(player._id)}> X </button>
      </p>
    );
  }
}

export default Player;
