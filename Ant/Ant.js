/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Ant extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Screen Shot 2020-12-16 at 2",
        "./Ant/costumes/Screen Shot 2020-12-16 at 2.svg",
        { x: 26.157050000000027, y: 18.979375000000005 }
      ),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-112, 116);
    this.moveAhead();
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.broadcast("stats_ant");
  }
}
