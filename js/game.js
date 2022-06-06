/* global Phaser */

/* this constant creates a dictionary, a set of basic parameters for the game */
const config = {
  /* this declares the type of the game as a phaser game, and defines the method of which this game will use it to the auto method of Phaser */
  type: Phaser.AUTO,
  /* this sets the height and the width of the window of the game to the standard size and resolution of a 1080p screen.*/
  width: 1920,
  height: 1080,
  /* this sets the background color of the game */
  backgroundColor: 0x5f6e7a
}

/* 
const game = new Phaser.Game(config)