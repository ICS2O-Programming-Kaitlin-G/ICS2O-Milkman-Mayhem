/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved 
//
// Created by: Mr. Coxall
// Modified by: Katie
// Created on: June 2022
// This is the Phaser3 configuration file

// import the splash scene from the splash scene file
import SplashScene from './splashScene.js'

//import the title scene from the title scene file
import TitleScene from './titleScene.js'

//import the menu scene from the title scene file
import MenuScene from './menuScene.js'

//import the game scene from the title scene file
import GameScene from './gameScene.js'

//import the intructions scene from the title scene file
import InstructionsScene from './instructionsScene.js'

//Splash scene
const splashScene = new SplashScene()

//Title scene
const titleScene = new TitleScene()

//Menu scene
const menuScene = new MenuScene()

//Game scene
const gameScene = new GameScene()

//Instructions scene
const instructionsScene = new InstructionsScene()

// this constant creates a dictionary, a set of basic parameters for the game: it is the game scene.
const config = {
  // this declares the type of the game as a phaser game, and defines the method of which this game will use it to the auto method of Phaser
  type: Phaser.AUTO,
  // this sets the height and the width of the window of the game to the standard size and resolution of a 1080p screen.
  width: 1920,
  height: 1080,
  // this tells Phaser to use physics, more specifically arcade physics, to ensure smooth gameplay.
  physics: {
    default: 'arcade',
    arcade:{
      debug: false
    }
  },
  // this sets the background color of the game
  backgroundColor: 0xffffff,
  scale: {
    // this ensures the game scene will always fit the full screen.
    mode: Phaser.Scale.FIT,
    //this places it in the middle of the page
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}

const game = new Phaser.Game(config)

//load scenes
//please note that any "key" is global and cannot be reused. it must be totally unique from any other reference or variable inside of your code. 
game.scene.add('splashScene', splashScene)
game.scene.add('titleScene', titleScene)
game.scene.add('menuScene', menuScene)
game.scene.add('gameScene', gameScene)
game.scene.add('instructionsScene', instructionsScene)

// start scene
game.scene.start('splashScene')