/* global Phaser */

// Copyright (c) 2022 Claire Bedrossian All rights reserved
//
// Created by: Claire Bedrossian
// Created on: Nov 2022
// This is Phaser3 configuration file

import SplashScene from "./splashScene.js";
import TitleScene from "./titleScene.js";
import MenuScene from "./menuScene.js";

//The game scene
const splashScene = new SplashScene();
const titleScene = new TitleScene();
const menuScene = new MenuScene();

const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  // This Is The Current Background Colour
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    //I Made This Fit The Centre Of The Page
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};
const game = new Phaser.Game(config);
// load scenes
// NOTE: remember any "key" is global and CAN NOT be reused
game.scene.add("splashScene", splashScene);
game.scene.add("titleScene", titleScene);
game.scene.add("menuScene", menuScene);

// start title
game.scene.start("splashScene");
