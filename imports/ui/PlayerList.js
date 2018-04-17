import React, { Component } from "react";
import Player from "./Player";
class PlayerList extends Component {
  render() {
    const { players } = this.props;
    return players.map(player => <Player key={player._id} player={player} />);
  }
}

export default PlayerList;
