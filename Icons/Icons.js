/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Icons extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("STATS", "./Icons/costumes/STATS.svg", {
        x: 107.70423499999998,
        y: 67.37048,
      }),
      new Costume("Icon", "./Icons/costumes/Icon.svg", {
        x: 103.49355,
        y: 97.66059,
      }),
      new Costume("Respawn Icon", "./Icons/costumes/Respawn Icon.svg", {
        x: 132.900355,
        y: 93.91059,
      }),
      new Costume("Respawn Icon2", "./Icons/costumes/Respawn Icon2.svg", {
        x: 132.900355,
        y: 93.91059,
      }),
      new Costume("Player Icon", "./Icons/costumes/Player Icon.svg", {
        x: 142.82473500000003,
        y: 68.05923,
      }),
      new Costume("Party Icon", "./Icons/costumes/Party Icon.svg", {
        x: 142.82474499999998,
        y: 93.91059,
      }),
      new Costume("INT Icon", "./Icons/costumes/INT Icon.svg", {
        x: 106.12755746326746,
        y: 93.91059,
      }),
      new Costume("costume1", "./Icons/costumes/costume1.svg", {
        x: 241.141695,
        y: 181.03411499999999,
      }),
      new Costume("costume2", "./Icons/costumes/costume2.svg", {
        x: 242.75,
        y: 184.25,
      }),
      new Costume("costume3", "./Icons/costumes/costume3.svg", { x: 0, y: 0 }),
    ];

    this.sounds = [new Sound("pop", "./Icons/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
