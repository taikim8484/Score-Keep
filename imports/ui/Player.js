import React, { Component } from "react";
import { Players } from "../api/player";

class Player extends Component {
  handleRemove = _id => {
    Players.remove({ _id });
  };
  handleIncrease = _id => {
    const { score } = Players.findOne({ _id });
    Players.update({ _id }, { $set: { score: score + 1 } });
  };
  handleDecrease = _id => {
    const { score } = Players.findOne({ _id });
    score > 0 && Players.update({ _id }, { $set: { score: score - 1 } });
  };
  render() {
    const { player } = this.props;
    return (
      <div className="item">
        Player {player.name} has {player.score} points
        <button className="button button--round" onClick={() => this.handleDecrease(player._id)}> - </button>
        <button className="button button--round" onClick={() => this.handleIncrease(player._id)}> + </button>
        <button className="button button--round" onClick={() => this.handleRemove(player._id)}> X </button>
      </div>
    );
  }
}

export default Player;
