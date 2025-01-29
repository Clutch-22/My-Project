/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bear extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Bear/costumes/costume1.svg", {
        x: 26.157049999999998,
        y: 18.979385000000036,
      }),
    ];

    this.sounds = [new Sound("pop", "./Bear/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.moveAhead();
    this.goto(-112, 66);
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.broadcast("stats_ursid");
  }
}
