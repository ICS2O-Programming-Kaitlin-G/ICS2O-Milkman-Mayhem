/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Modified by: Katie
// Created on: June 2022
// This file contains the splash scene

// this establishes the splash scene through the use of the class function
class SplashScene extends Phaser.Scene {
  constructor () {
    //this runs the phaser scene code first.
    super({ key: 'splashScene' })
  }
  //this initializes the scene, in other words gets it ready to go.
  init (data) {
    // this sets the background color of the main camera.
    this.cameras.main.setBackgroundColor('#ffffff')
  }
  
  preload () {
    // this displays to the console what scene the program is currently running (typically for debugging purposes)
    console.log('Splash Scene')
    // loading in the file for the splash scene
    this.load.image('splashSceneBackground','./assets/splashSceneImage.png')
  }
 
  create (data) {
    // this adds the background image for the splash scene to 0,0. 
    this.splashSceneBackgroundImage = this.add.sprite(0,0, 'splashSceneBackground')
    // this places the image on the middle of the screen.
    this.splashSceneBackgroundImage.x = 1920 / 2
    this.splashSceneBackgroundImage.y = 1080 / 2
  }
  
  update (time, delta) {
    //if statement that will determine the amount of time that the splash scene will remain on the screen
    if (time > 4000)
      //this switches the scene from the splash scene to the title scene.
    this.scene.switch('titleScene')
  }
}

export default SplashScene