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
    //this initializes the variable that will make sure that the user can only fire one projectile per press of the spacebar, so as not to make the game too easy. 
    this.fireProjectile = false
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
    //this loads the milk bottle projectile sprite
    this.load.image('milkJug', 'assets/milk_jug.png')
  }

  create (data) {
    //this places the background image in the scene and sets it to 0, 0.
    this.background = this.add.image(0, 0, 'milkmanBackground').setScale(3.0)
    //this sets the origin of the background image to the top left hand side of the screen. 
    this.background.setOrigin(0, 0)
    //this places the sprite on the screen and adds physics to the sprite
    this.milkman = this.physics.add.sprite(1920 / 2, 1080 - 100, 'milkman').setScale(0.2)
    //this creates a group for the milk jug projectiles
    this.projectileGroup = this.physics.add.group()
  }
  //this update code will attempt to run approximately 60 times a second (predetermined by phaser)
  update (time, delta) {
    //this initializes a variable to contain the data when the left key is pressed.
    const keyLeftObj = this.input.keyboard.addKey('LEFT')
    //this initializes a variable to contain the data when the right key is pressed. 
    const keyRightObj = this.input.keyboard.addKey('RIGHT')
    //this initializes a variable to contain the data when the space bar, which fires the projectiles, is pressed.
    const keySpaceObj = this.input.keyboard.addKey('SPACE')
    //this checks if the key has been pressed and moves the spaceship to the left if so. 
    if (keyLeftObj.isDown === true) {
      this.milkman.x = this.milkman.x - 10
      //this checks if the sprite is too far left, resulting in the sprite being off the screen, and if so, brings it back to the edge of the screen.
      if (this.milkman.x < 0) {
      this.milkman.x = 0
      }
    }
    //this checks if the right key has been pressed and moves the spaceship to the right if so. 
    if (keyRightObj.isDown === true) {
      this.milkman.x = this.milkman.x + 10
      //this checks if the sprite is too far right, resulting in the sprite being off the screen, and if so, brings it back to the edge of the screen
      if (this.milkman.x > 1920) {
        this.milkman.x = 1920
      }
    }
    //this checks if the space bar has been pressed; if so, it creates one instance of the group variable created above, so only one appears, essentially just firing the projectile.
    if (keySpaceObj.isDown === true) {
      //this checks to see if the fire projectile variable that only allows the user to fire one projectile per press of the spacebar is either true or false.
      if (this.fireProjectile === false) {
        //tis sets the variable to true
        this.fireProjectile = true
       //this makes a new instance of the projectile and sets it to the milkman's location at the time of firing. the sprite has the physics property.
      const aNewProjectile = this.physics.add.sprite(this.milkman.x, this.milkman.y, 'milkJug').setScale(0.13)
      //this adds the new instance of the projectile just created above to the group.
      this.projectileGroup.add(aNewProjectile) 
      }
    }
    //this checks if the space key is not being pressed. 
    if (keySpaceObj.isUp === true) {
      //this sets the fire projectile variable back to false so that it can be fired again whenever the user presses and releases the space bar, so it is not just a single instance allowed.
      this.fireProjectile = false
    }
  }
}

export default GameScene