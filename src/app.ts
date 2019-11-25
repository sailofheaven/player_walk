import { Application, Loader, LoaderResource } from 'pixi.js';
import { AppConfig } from 'constants/types';
import Player from 'modules/Entity/player';
import { WIDTH, HEIGHT } from './constants';

export default class App extends Application {
  static instance: Application;
  constructor(config?: Partial<AppConfig>) {
    super(config);

    this.loader.add('player', 'assets/player.json').load(this.onLoad);

    App.instance = this;
  }

  onLoad = (_loader: Loader, resources: Partial<Record<string, LoaderResource>>) => {
    const anim = new Player(resources.player!.spritesheet.animations.walk);
    anim.x = WIDTH / 2;
    anim.y = HEIGHT / 2;

    this.stage.addChild(anim);
  };
}
