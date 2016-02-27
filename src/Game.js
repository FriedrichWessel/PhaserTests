import {singleton} from 'needlepoint';

@singleton
export default class Game extends Phaser.Game {

    constructor() {
        super(950, 500, Phaser.AUTO, 'content', null);
    }

}

