import React, { Component } from "react";
import Player from "./Player";
class PlayerList extends Component {
  render() {
    const { players } = this.props;
    return !players.length ? (<div className="item"><p className="item__message">Add player first</p></div>) : players.map(player => <Player key={player._id} player={player} />);
  }
}

export default PlayerList;
