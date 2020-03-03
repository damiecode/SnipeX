export default function animations(scene) {
  let config = {
    key: "ground",
    frames: scene.anims.generateFrameNumbers("ground", {
      start: 14,
      end: 14,
      first: 14
    })
  };
  scene.anims.create(config);

  config = {
    key: "ground",
    frames: scene.anims.generateFrameNumbers("ground", {
      start: 43,
      end: 43,
      first: 43
    })
  };
  scene.anims.create(config);

  config = {
    key: "left",
    frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1
  };
  scene.anims.create(config);

  config = {
    key: "turn",
    frames: [{ key: "dude", frame: 4 }],
    frameRate: 20
  };
  scene.anims.create(config);

  config = {
    key: "right",
    frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
    frameRate: 10,
    repeat: -1
  };
  scene.anims.create(config);

  config = {
    key: "bird",
    frames: scene.anims.generateFrameNames("dude-sprites", {
      prefix: "dude/dude",
      end: 1
    }),
    frameRate: 5,
    repeat: -1,
    repeatDelay: 0
  };

  scene.anims.create(config);

  config = {
    key: "coin",
    frames: scene.anims.generateFrameNames("dude-sprites", {
      prefix: "coin/spin",
      start: 1,
      end: 4
    }),
    frameRate: 30,
    repeat: -1,
    repeatDelay: 0
  };
  scene.anims.create(config);

  config = {
    key: "1up",
    frames: [
      {
        frame: "powerup/1up",
        key: "dude-sprites"
      }
    ]
  };
  scene.anims.create(config);

  config = {
    key: "star",
    frames: scene.anims.generateFrameNames("dude-sprites", {
      prefix: "star",
      start: 1,
      end: 4
    }),
    frameRate: 30,
    repeat: -1,
    repeatDelay: 0
  };
  scene.anims.create(config);
  
  config = {
    key: "dpad",
    frames: [
      {
        frame: "controller/dpad",
        key: "dude-sprites"
      }
    ]
  };
  scene.anims.create(config);

  config = {
    key: "button",
    frames: [
      {
        frame: "controller/button",
        key: "dude-sprites"
      }
    ]
  };
  scene.anims.create(config);
}
