/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved 
//
// Created by: Mr. Coxall
// Modified by: Katie
// Created on: June 2022
// This is the Phaser3 configuration file

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
      debug: true
    }
  },
  // this sets the background color of the game
  backgroundColor: 0x5f6e7a,
  scale: {
    // this ensures the game scene will always fit the full screen.
    mode: Phaser.Scale.FIT,
    //this places it in the middle of the page
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}

const game = new Phaser.Game(config) 