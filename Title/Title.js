/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Title extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Title/costumes/costume1.svg", {
        x: 242.44558610000746,
        y: 191.75098129362982,
      }),
    ];

    this.sounds = [new Sound("pop", "./Title/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.moveBehind();
    this.goto(0, 0);
    this.visible = true;
    yield* this.wait(0.001);
    this.moveAhead();
    this.effects.ghost = 0;
  }

  *whenthisspriteclicked() {
    this.broadcast("hide");
    for (let i = 0; i < 25; i++) {
      this.effects.ghost += 4;
      yield* this.wait(0.04);
      yield;
    }
    this.visible = false;
    this.broadcast("hide");
    this.moveBehind();
  }
}
