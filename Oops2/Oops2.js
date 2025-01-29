/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Oops2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Oops2/costumes/costume1.svg", {
        x: 295.5000000000001,
        y: 185,
      }),
    ];

    this.sounds = [new Sound("pop", "./Oops2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "ANY" }, this.whenIReceiveAny),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "book it!" },
        this.whenIReceiveBookIt
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(0, 0);
    this.moveBehind();
    this.effects.ghost = 0;
  }

  *whenIReceiveAny() {
    this.visible = true;
    this.moveAhead();
    this.moveBehind(1);
    this.effects.ghost = 100;
    for (let i = 0; i < 25; i++) {
      yield* this.wait(0.04);
      this.effects.ghost -= 4;
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.broadcast("book it! 2");
    this.moveBehind();
    this.visible = false;
    this.effects.ghost = 0;
  }

  *whenIReceiveBookIt() {
    this.visible = false;
    this.moveBehind();
  }
}
