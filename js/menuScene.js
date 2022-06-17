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
    //this initializes the variable that holds the start button
    this.startButton = null
    //this initializes the variable that holds the instructions button
    this.instructionsButton = null
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
    this.load.image('menuSceneBackground', 'images/menu_background.png')
    //this loads the start button image
    this.load.image('startButton', 'images/milk_button.png')
    //this loads the instruction button image
    this.load.image('instructionsButton', 'images/instructions_button.png')
  }

  create (data) {
    //this places the background image on the screen and sets the scale. 
    this.menuSceneBackgroundImage = this.add.sprite(0, 0, 'menuSceneBackground').setScale(1.5)
    //this places the background image at the center of the screen.
    this.menuSceneBackgroundImage.x = 1920 / 2
    this.menuSceneBackgroundImage.y = 1080 / 2
    //this places the menu button in the scene at the center of the screen
    this.startButton = this.add.sprite(1920 / 2, (1080 / 2) + 100, 'startButton').setScale(0.45)
    //this places the instructions button in the scene.
    this.instructionsButton = this.add.sprite((1920 / 2) - 450, (1080 / 2) - 200, 'instructionsButton').setScale(0.2)
    //this adds the interactive property to the button, which allows us to click on it and use it like an actual button and not just an image.
    this.startButton.setInteractive({ useHandCursor: true })
    //this adds the same interactive property to the instructions scene button
    this.instructionsButton.setInteractive({ useHandCursor: true })
    //this traps the event of the button being clicked and tells the program to run the function.
    this.startButton.on('pointerdown', () => this.clickButton() )
    //this traps the event of the instructions button being clicked and it informs the program that it is time to run the corresponding function
    this.instructionsButton.on('pointerdown', () => this.instructionsClickButton() )
  }

  update (time, delta) {
  }

  //this is the function that the start button runs when the button is clicked
  clickButton () {
    this.scene.start('gameScene')
  }

  //this is the function the instructions button executes.
  instructionsClickButton () {
    this.scene.start('instructionsScene')
  }
}

export default MenuScene