import InitialState from 'states/InitialState.js';
import {dependencies, singleton} from 'needlepoint';

@dependencies(Game)
class GameState extends Phaser.State {

	preload(){
		//this.game.load.script('Initial', 'states/InitialState.js');
	}
	create() {
		let center = { x: this.game.world.centerX, y: this.game.world.centerY };

		this.game.state.add('Initial', InitialState);
		this.game.state.start('Initial');
	}

}
export default GameState;
