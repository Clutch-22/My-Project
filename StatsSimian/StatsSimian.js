/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class StatsSimian extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Stats", "./StatsSimian/costumes/Stats.svg", {
        x: 242.17388499999998,
        y: 182.541275,
      }),
    ];

    this.sounds = [new Sound("Meow", "./StatsSimian/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "stats_simian" },
        this.whenIReceiveStatsSimian
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
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

  *whenIReceiveStatsSimian() {
    yield* this.statInitiate();
  }

  *whenthisspriteclicked() {
    yield* this.statFade();
  }

  *greenFlag() {
    this.visible = false;
    this.moveBehind();
    this.goto(0, 0);
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
