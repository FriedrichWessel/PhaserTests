import Game from 'Game.js';
import SystemLoader from 'SystemLoader.js'
import {container} from 'needlepoint';

var systemLoader = container.resolve(SystemLoader);
systemLoader.startGame();