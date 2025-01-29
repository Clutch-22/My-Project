/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class TierList extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Tier_list", "./TierList/costumes/Tier_list.svg", {
        x: 240,
        y: 135,
      }),
    ];

    this.sounds = [new Sound("pop", "./TierList/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.moveBehind();
    this.goto(0, 10);
    this.size = 135;
  }
}
