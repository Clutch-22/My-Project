/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Goose extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Screen Shot 2020-12-16 at 12",
        "./Goose/costumes/Screen Shot 2020-12-16 at 12.svg",
        { x: 26.157049999999998, y: 18.979355000000027 }
      ),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-112, -83);
    this.moveAhead();
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.broadcast("stats_goose");
  }
}
