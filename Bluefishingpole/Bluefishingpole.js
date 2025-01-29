/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bluefishingpole extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Bluefishingpole/costumes/costume1.svg", {
        x: 240,
        y: 180,
      }),
      new Costume("costume2", "./Bluefishingpole/costumes/costume2.svg", {
        x: 256.5,
        y: 198,
      }),
    ];

    this.sounds = [new Sound("pop", "./Bluefishingpole/sounds/pop.wav")];

    this.triggers = [];
  }
}
