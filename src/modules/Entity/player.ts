import * as PIXI from 'pixi.js';

export default class Player extends PIXI.AnimatedSprite {
  private speed = 0.2;

  constructor(textures: PIXI.Texture[] | PIXI.AnimatedSprite.FrameObject[], autoUpdate?: boolean) {
    super(textures, autoUpdate);

    this.interactive = true;
    this.animationSpeed = this.speed;
    this.anchor.set(0.5);

    this.on('click', this.onClick)
      .on('mouseover', this.onOver)
      .on('mouseout', this.onOut);

    this.play();
  }

  onClick = () => {
    this.playing ? this.stop() : this.play();
  };

  onOver = () => (this.animationSpeed = this.speed * 2);

  onOut = () => (this.animationSpeed = this.speed);
}
