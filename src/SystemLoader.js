import InitialState from 'states/InitialState.js';
import {Game} from 'Game.js';


@dependencies(Game)
export default class SystemLoader {

	constructor(game){
		this.game = game;
	}

	startGame() {
		this.game.state.add('Initial', InitialState);
		this.game.state.start('Initial');
	}

}




