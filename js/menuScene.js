/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Modified by: Katie
// Created on: June 2022
// This file contains the menu scene

// this establishes the splash scene through the use of the class function
class MenuScene extends Phaser.Scene {
  constructor () {
    //this runs the phaser scene code first.
    super({ key: 'menuScene' })

    //this initializes the menuSceneBackgroundImage variable
    this.menuSceneBackgroundImage = null
    //this initializes the variable that holds the button
    this.startButton = null
  }
  //this initializes the scene, in other words gets it ready to go.
  init (data) {
    // this sets the background color of the main camera.
    this.cameras.main.setBackgroundColor('#ffffff')
  }
  
  preload () {
    // this displays to the console what scene the program is currently running (typically for debugging purposes)
    console.log('Menu Scene')
    //this loads the menu scene background image
    this.load.image('menuSceneBackground', 'assets/menu_background.png')
    //this loads the button image
    this.load.image('startButton', 'assets/milk_button.png')
  }

  create (data) {
    //this places the background image on the screen and sets the scale. 
    this.menuSceneBackgroundImage = this.add.sprite(0, 0, 'menuSceneBackground').setScale(1.5)
    //this places the background image at the center of the screen.
    this.menuSceneBackgroundImage.x = 1920 / 2
    this.menuSceneBackgroundImage.y = 1080 / 2
    //this places the menu button in the scene at the center of the screen
    this.startButton = this.add.sprite(1920 / 2, (1080 / 2) + 100, 'startButton').setScale(0.45)
    //this adds the interactive property to the button, which allows us to click on it and use it like an actual button and not just an image.
    this.startButton.setInteractive({ useHandCursor: true })
    //this traps the event of the button being clicked and tells the program to run the function.
    this.startButton.on('pointerdown', () => this.clickButton() )
  }

  update (time, delta) {
  }

  clickButton () {
    this.scene.start('gameScene')
  }
}

export default MenuScene