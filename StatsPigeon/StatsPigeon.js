/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class StatsPigeon extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Stats", "./StatsPigeon/costumes/Stats.svg", {
        x: 242.173875,
        y: 183.541165,
      }),
    ];

    this.sounds = [new Sound("Meow", "./StatsPigeon/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "stats_pigeon" },
        this.whenIReceiveStatsPigeon
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "book it! 2" },
        this.whenIReceiveBookIt2
      ),
    ];
  }

  *whenGreenFlagClicked() {
    yield* this.greenFlag();
  }

  *whenthisspriteclicked() {
    yield* this.statFade();
  }

  *whenIReceiveStatsPigeon() {
    yield* this.statInitiate();
  }

  *statInitiate() {
    this.moveAhead();
    this.broadcast("ANY");
    this.visible = true;
    this.effects.ghost = 100;
    for (let i = 0; i < 25; i++) {
      this.effects.ghost -= 4;
      yield* this.wait(0.04);
      yield;
    }
    this.moveAhead();
  }

  *greenFlag() {
    this.visible = false;
    this.moveBehind();
    this.goto(0, 0);
  }

  *statFade() {
    this.broadcast("book it!");
    this.moveBehind();
    this.visible = false;
    this.effects.ghost = 0;
  }

  *whenIReceiveBookIt2() {
    yield* this.statFade();
  }
}
