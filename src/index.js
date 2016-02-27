import GameState from 'states/GameState';
import {singleton} from 'needlepoint';

@singleton
export default class Game extends Phaser.Game {

	constructor() {
		super(950, 500, Phaser.AUTO, 'content', null);
		this.state.add('GameState', GameState, false);
		this.state.start('GameState');
	}

}

new Game();