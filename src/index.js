//import Game from 'Game.js';
//import SystemLoader from 'SystemLoader.js'
import {container} from 'needlepoint';
import {Test2} from 'Test2.js';
import {Test1} from 'Test1.js'

container.resolve(Test1);
var test2 = container.resolve(Test2);
//var systemLoader = container.resolve(SystemLoader);
//systemLoader.startGame();