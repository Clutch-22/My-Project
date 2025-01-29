/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Tardigrade extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Screen Shot 2020-12-16 at 11",
        "./Tardigrade/costumes/Screen Shot 2020-12-16 at 11.svg",
        { x: 26.157049999999998, y: 18.97938500000015 }
      ),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.moveAhead();
    this.goto(188, -134);
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.broadcast("stats_tardigrade");
  }
}
