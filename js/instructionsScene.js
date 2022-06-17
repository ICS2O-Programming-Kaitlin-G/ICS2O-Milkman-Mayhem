/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Modified by: Katie
// Created on: June 2022
// This file contains the menu scene

// this establishes the instructions scene through the use of the class function
class InstructionsScene extends Phaser.Scene {
  constructor () {
    //this runs the phaser scene code first.
    super({ key: 'instructionsScene' })

    //this initializes the instructions scene background image variable
    this.instructionsSceneBackgroundImage = null
    //this initializes the variable that holds the return to menu button
    this.backButton = null
  }
  //this initializes the scene, in other words gets it ready to go.
  init (data) {
    // this sets the background color of the main camera.
    this.cameras.main.setBackgroundColor('#ffffff')
  }
  
  preload () {
    // this displays to the console what scene the program is currently running (typically for debugging purposes)
    console.log('Instructions Scene')
    //this loads the instructions scene background 
    this.load.image('instructionsSceneBackground', 'images/instructionsSceneBackgroundImage.jpg')
    // this loads the back to the menu scene button
    this.load.image('backButton', 'images/back_button.png')
  }

  create (data) {
    //this places the background image on the screen and sets the scale. 
    this.instructionsSceneBackgroundImage = this.add.sprite(0, 0, 'instructionsSceneBackground').setScale(4)
    //this places the back button on the screen and sets the scale.
    this.backButton
    //this places the background image at the center of the screen.
    this.instructionsSceneBackgroundImage.x = 1920 / 2
    this.instructionsSceneBackgroundImage.y = 1080 / 2
    //this places the return button in the scene at the top left of the screen
    this.backButton = this.add.sprite(100, 100, 'backButton').setScale(0.2)
    //this adds the interactive property to the button, which allows us to click on it and use it like an actual button and not just an image.
    this.backButton.setInteractive({ useHandCursor: true })
    //this traps the event of the button being clicked and tells the program to run the function.
    this.backButton.on('pointerdown', () => this.clickButton() )
  }

  update (time, delta) {
  }

  clickButton () {
    this.scene.start('menuScene')
  }
}

export default InstructionsScene