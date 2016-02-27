import RainbowText from 'objects/RainbowText';
import GameState from 'states/GameState';

class InitialState extends Phaser.State {

    preload(){
        this.game.load.image( 'Splash', '../assets/Splash01.jpg');
    }
    create() {
        let center = { x: this.game.world.centerX, y: this.game.world.centerY }
        //let text = new RainbowText(this.game, center.x, center.y, "- phaser -\nwith a sprinkle of\nES6 dust!");
        //text.anchor.set(0.5);
        var splashSprite = this.game.add.sprite(center.x, center.y, 'Splash');
        splashSprite.anchor.set(0.5);
    }

}

export default InitialState;
