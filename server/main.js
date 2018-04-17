import { Meteor } from "meteor/meteor";

import { Players } from "../imports/api/player";

Meteor.startup(() => {
  let user = {
    name: "Andrew",
    sayHi: () => {
      console.log(this);
    }
  };
  user.sayHi();
});
