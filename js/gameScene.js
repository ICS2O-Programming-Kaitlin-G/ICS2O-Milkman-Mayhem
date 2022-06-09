/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Modified by: Katie
// Created on: June 2022
// This file contains the game scene

// this establishes the splash scene through the use of the class function
class GameScene extends Phaser.Scene {
  constructor () {
    //this runs the phaser scene code first.
    super({ key: 'gameScene' })
    //this initializes the game scene background image
    this.background = null
    //this initializes the variable that will hold the milkman.
    this.milkman = null
  }
  //this initializes the scene, in other words gets it ready to go.
  init (data) {
    // this sets the background color of the main camera.
    this.cameras.main.setBackgroundColor('#ffffff')
  }
  
  preload () {
    // this displays to the console what scene the program is currently running (typically for debugging purposes)
    console.log('Game Scene') 
    // this loads the image for the background image
    this.load.image('milkmanBackground', 'assets/milkmanBackground.jpg')
    //this loads the milkman sprite
    this.load.image('milkman', 'assets/milkman.png')
  }

  create (data) {
    //this places the background image in the scene and sets it to 0, 0.
    this.background = this.add.image(0, 0, 'milkmanBackground').setScale(3.0)
    //this sets the origin of the background image to the top left hand side of the screen. 
    this.background.setOrigin(0, 0)
    //this places the sprite on the screen and adds physics to the sprite
    this.milkman = this.physics.add.sprite(1920 / 2, 1080 - 100, 'milkman')
  }

  update (time, delta) {
  }
}

export default GameScene