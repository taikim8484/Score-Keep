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
      <div className="item">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="playerName" placeholder="Player Name" />
          <button className="button" type="submit">Add player</button>
        </form>
      </div>
    );
  }
}

export default AddPlayer;
