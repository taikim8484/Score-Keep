import React, { Component } from "react";
import { Players } from "../api/player";
class AddPlayer extends Component {
  handleSubmit = e => {
    const playerName = e.target.playerName.value;
    e.preventDefault();

    playerName && Players.insert({ name: playerName, score: 0 });

    e.target.playerName.value = "";
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="playerName" placeholder="Player Name" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default AddPlayer;
