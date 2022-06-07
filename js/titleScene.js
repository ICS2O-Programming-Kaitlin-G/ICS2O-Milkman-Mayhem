/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Modified by: Katie
// Created on: June 2022
// This file contains the title scene

// this establishes the splash scene through the use of the class function
class TitleScene extends Phaser.Scene {
  constructor () {
    //this runs the phaser scene code first.
    super({ key: 'titleScene' })
    // this sets the title screen background image & title screen text variables to null.
    this.titleSceneBackgroundImage = null
    this.titleSceneText = null
    // this sets the style for the text displayed on the screen.
    this.titleSceneTextStyle = { font: '50px Times', fill: '#001427', align: 'center' }
  }
  //this initializes the scene, in other words gets it ready to go.
  init (data) {
    // this sets the background color of the main camera.
    this.cameras.main.setBackgroundColor('#ffffff')
  }
  
  preload () {
    // this displays to the console what scene the program is currently running (typically for debugging purposes)
    console.log('Title Scene')
    this.load.image('titleSceneBackground', './assets/milkmanMayhemImage.jpg')
   }

  create (data) {
    //this adds the background image to the sprite and setting it to 0,0.
    this.titleSceneBackgroundImage = this.add.sprite(0, 0, 'titleSceneBackground').setScale(0.90)
    //this orients the background image to the center of the screen.
    this.titleSceneBackgroundImage.x = 1920 / 2
    this.titleSceneBackgroundImage.y = 1080 / 2
    //this adds the text to the screen along with defining what the text looks like.
    this.titleSceneText = this.add.text(1920 / 2, (1080 / 2) + 350, 'The People Need Their Milk', this.titleSceneTextStyle).setOrigin(0.5)
  }

  update (time, delta) {
  }
}

export default TitleScene