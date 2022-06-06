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
  // this displays to the console what scene the program is currently running (typically for debugging purposes)
  preload () {
    console.log('Splash Scene')
  }

  create (data) {
  }

  update (time, delta) {
  }
}

export default SplashScene