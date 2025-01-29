/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Cursor extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Cursor/costumes/costume1.svg", {
        x: 1.6860987351239487,
        y: 5.528455223529448,
      }),
    ];

    this.sounds = [
      new Sound("pop", "./Cursor/sounds/pop.wav"),
      new Sound("Coin", "./Cursor/sounds/Coin.wav"),
      new Sound("Coin2", "./Cursor/sounds/Coin2.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "ANY" }, this.whenIReceiveAny),
      new Trigger(
        Trigger.BROADCAST,
        { name: "book it!" },
        this.whenIReceiveBookIt
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "book it! 2" },
        this.whenIReceiveBookIt2
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    while (true) {
      this.goto(this.mouse.x, this.mouse.y);
      this.moveAhead();
      yield;
    }
  }

  *whenIReceiveAny() {
    yield* this.startSound("Coin2");
  }

  *whenIReceiveBookIt() {
    yield* this.startSound("Coin2");
  }

  *whenIReceiveBookIt2() {
    yield* this.startSound("Coin2");
  }
}
