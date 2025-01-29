/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ScreenShot20210402At2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Screen Shot 2021-04-02 at 2",
        "./ScreenShot20210402At2/costumes/Screen Shot 2021-04-02 at 2.png",
        { x: 480, y: 360 }
      ),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "hide" }, this.whenIReceiveHide),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.moveAhead();
    yield* this.wait(0.00001);
    this.goto(0, 0);
    this.visible = true;
  }

  *whenIReceiveHide() {
    this.visible = false;
  }
}
