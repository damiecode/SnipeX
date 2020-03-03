const BootScene = new Phaser.Class({
 
  Extends: Phaser.Scene,

  initialize:

  function BootScene ()
  {
      Phaser.Scene.call(this, { key: 'BootScene' });
  },

  preload: function ()
  {
      // load the resources here
  },

  create: function ()
  {
      this.scene.start('GameScene');
  }
});
