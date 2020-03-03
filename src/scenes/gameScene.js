const GameScene = new Phaser.Class({
  Extends: Phaser.Scene,

  initialize: function gameScene() {
    Phaser.Scene.call(this, { key: "GameScene" });
  },
  preload() {
    this.load.image("sky", "assets/corona_up.png");
    this.load.image("ground", "assets/platform.png");
    this.load.image("star", "assets/star.png");
    this.load.image("bomb", "assets/bomb.png");
    this.load.spritesheet("dude", "assets/dude.png", {
      frameWidth: 32,
      frameHeight: 48
    });
  },
  create() {
    this.add.image(400, 300, 'sky');
  }
});

exports.default = GameScene;
