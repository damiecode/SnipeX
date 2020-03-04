/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import 'phaser';

function preload() {
  this.load.image('bug1', '../../assets/images/bug_1.png');
  this.load.image('bug2', '../../assets/images/bug_2.png');
  this.load.image('bug3', '../../assets/images/bug_3.png');
  this.load.image('platform', '../../assets/images/platform.png');
  this.load.image('dude', '../../assets/images/codey.png');
  this.load.image('bugPellet', '../../assets/images/bugPellet.png');
  this.load.image('bugRepellent', '../../assets/images/bugRepellent.png');
  this.load.image('background', '../../assets/images/corona_up.png');
}

const gameState = {};

function create() {
  gameState.active = true;
  this.input.on('pointerup', () => {
    if (gameState.active === false) {
      this.scene.restart();
    }
  });
  const platforms = this.physics.add.staticGroup();
  platforms
    .create(225, 490, 'platform')
    .setScale(1, 0.3)
    .refreshBody();
  gameState.scoreText = this.add.text(175, 482, 'Bugs Left: 24', {
    fontSize: '15px',
    fill: '#000000',
  });

  gameState.player = this.physics.add.sprite(220, 450, 'dude').setScale(0.7);

  gameState.player.setCollideWorldBounds(true);
  this.physics.add.collider(gameState.player, platforms);
  gameState.cursors = this.input.keyboard.createCursorKeys();

  gameState.enemies = this.physics.add.group();

  for (let yVal = 1; yVal < 4; yVal += 1) {
    for (let xVal = 1; xVal < 9; xVal += 1) {
      gameState.enemies
        .create('50 * xVal', '50 * yVal', 'bug1')
        .setScale(0.6)
        .setGravityY(-200);
    }
  }
}

function update() {
  if (gameState.active) {
    if (gameState.cursors.left.isDown) {
      gameState.player.setVelocityX(-160);
    } else if (gameState.cursors.right.isDown) {
      gameState.player.setVelocityX(160);
    } else {
      gameState.player.setVelocityX(0);
    }

    // if (Phaser.Input.Keyboard.JustDown(gameState.cursors.space)) {

    // }
  }
}

const config = {
  type: Phaser.AUTO,
  width: 450,
  height: 500,
  backgroundColor: '19ade9',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
      enableBody: true,
    },
  },
  scene: {
    preload,
    create,
    update,
  },
};

// eslint-disable-next-line no-undef
const game = new Phaser.Game(config);
