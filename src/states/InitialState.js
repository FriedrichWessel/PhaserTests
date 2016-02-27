class InitialState extends Phaser.State {

    preload(){
        this.game.load.image( 'Splash', '../assets/Splash01.jpg');
    }
    create() {
        let center = { x: this.game.world.centerX, y: this.game.world.centerY };
        var splashSprite = this.game.add.sprite(center.x, center.y, 'Splash');
        splashSprite.anchor.set(0.5);
    }


}
export default InitialState;
