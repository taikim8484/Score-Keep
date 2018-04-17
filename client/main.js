import React from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import { Players } from "../imports/api/player";
import { Tracker } from "meteor/tracker";

import TitleBar from "../imports/ui/TitleBar";
import PlayerList from "../imports/ui/PlayerList";
import AddPlayer from "../imports/ui/AddPlayer";

Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find().fetch();
    let jsx = (
      <div>
        <TitleBar title="Welcome to Score Keeper" />
        <AddPlayer />
        <PlayerList players={players} />
      </div>
    );
    ReactDOM.render(jsx, document.getElementById("app"));
  });
});
