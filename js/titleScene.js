/* Global Phaser */

// Copyright (c) 2022 Claire Bedrossian All rights reserved
//
// Created by: Claire Bedrossian
// Created on: Nov 2022
// This is the Title Scene!

/**
 * Class Is In Title Scene.
 */
class TitleScene extends Phaser.Scene {
  /**
   * This Method Is The Constructor.
   */

  constructor() {
    super({ key: "titleScene" });

    this.titleSceneBackgroundImage = null

  }
  /**
   * Can be defined on your own scenes.
   * Method called by Scene Manager when scene starts,
   * before preload() & create().
   */
  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff");
  }
  /**
   * Can be defined on your own scenes.
   * Use it to load scenes.
   */
  preload() {
    console.log("Title Scene");
    this.load.image('titleSceneBackground', 'assets/aliens_screen_image.jpg')
  }

  /**
   * Can be defined on your own scenes.
   * Use it to make your game objects.
   */
  create(data) {
    this.titleSceneBackgroundImage = this.add.sprite(0, 0, 'titleSceneBackground').setScale(2.75)
    this.titleSceneBackgroundImage.x = 1920 / 2;
    this.titleSceneBackgroundImage.y = 1080 / 2;
  }

  /**
   * Should be overridden by your scenes.
   * Method gets called once per game step while scene is running.
   * @param {number} time - The Current Time
   * @param {number} delta - The delta time in ms since the last frame.
   */
  update(time, delta) {
    //pass
  }
}

export default TitleScene;
