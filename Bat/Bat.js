/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bat extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Screen Shot 2020-12-16 at 11",
        "./Bat/costumes/Screen Shot 2020-12-16 at 11.svg",
        { x: 24.83818500000004, y: 18.022414999999967 }
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
    this.goto(-172, -34);
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.broadcast("stats_bat");
  }
}
