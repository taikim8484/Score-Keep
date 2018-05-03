import React, { Component } from "react";

import TitleBar from "./TitleBar";
import PlayerList from "./PlayerList";
import AddPlayer from "./AddPlayer";

class App extends Component {
  render() {
    const { players } = this.props;
    return (
      <div>
        <TitleBar title="Welcome to Score Keeper" />
        <div className="wrapper">
          <AddPlayer />
          <PlayerList players={players} />
        </div>
      </div>
    );
  }
}

export default App;
