const preload = () => {
  this.load.image("bug1", "../../assets/images/bug_1.png");
  this.load.image("bug1", "../../assets/images/bug_2.png");
  this.load.image("bug1", "../../assets/images/bug_3.png");
  this.load.image("bug1", "../../assets/images/platform.png");
  this.load.image("bug1", "../../assets/images/dude.png");
  this.load.image("bug1", "../../assets/images/bugPellet.png");
  this.load.image("bug1", "../../assets/images/bugRepellent.png");
  this.load.image("bug1", "../../assets/images/corona_up.png");
};

const create = () => {
  gameState.active = true;
  this.input.on("pointerup", () => {
    if (gameState.active === false) {
      this.scene.restart();
    }
  });
  const platforms = this.physics.add.staticGroup();
  platforms
    .create(225, 490, "platform")
    .setScale(1, 0.3)
    .refreshBody();
  gameState.scoreText = this.add.text(175, 482, "Bugs Left: 24", {
    fontSize: "15px",
    fill: "#000000"
  });

  gameState.player = this.physics.add.sprite(225, 450, "dude").setScale(0.7);

  gameState.player.setCollideWorldBounds(true);
  this.physics.add.collider(gameState.player, platforms);
  gameState.cursors = this.input.keyboard.createCursorKeys();
};

const update = () => {};
