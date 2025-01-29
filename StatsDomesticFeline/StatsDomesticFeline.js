/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class StatsDomesticFeline extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Stats", "./StatsDomesticFeline/costumes/Stats.svg", {
        x: 242.173875,
        y: 181.541295,
      }),
    ];

    this.sounds = [new Sound("Meow", "./StatsDomesticFeline/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "stats_feline" },
        this.whenIReceiveStatsFeline
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

  *whenIReceiveStatsFeline() {
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
