/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Modified by: Katie
// Created on: June 2022
// This file contains the game scene

// this establishes the splash scene through the use of the class function
class GameScene extends Phaser.Scene {

  //create an enemy reaching for the milk 
  createEnemy() {
    //this generates a random number from 1 to 1920 to determine at which x coordinate the enemy will spawn.
    const enemyXLocation = Math.floor(Math.random() * 1920) + 1;
    
    //this generates a random number from 1 to 50 for the x velocity of the enemy who is reaching for milk from the milkman
    let enemyXVelocity = Math.round(Math.random() * 50) + 1;
    
    //this will make the number negative in 50% of outcomes.
    enemyXVelocity *= Math.round(Math.random()) ? 1 : -1;
    
    //this creates a single enemy who is reaching for the milk, with the use of physics.
    const oneEnemy = this.physics.add.sprite(enemyXLocation, -100, 'enemy').setScale(0.5)
    
    //this adds velocity to the enemy who is reaching out for the milk. The value of the velocity is 200.
    oneEnemy.body.velocity.y = 200
    oneEnemy.body.velocity.x = enemyXVelocity
    this.enemyGroup.add(oneEnemy)
  }
  
  constructor () {
    //this runs the phaser scene code first.
    super({ key: 'gameScene' })
    
    //this initializes the game scene background image
    this.background = null
    
    //this initializes the variable that will hold the milkman.
    this.milkman = null
    
    //this initializes the variable that will make sure that the user can only fire one projectile per press of the spacebar, so as not to make the game too easy. 
    this.fireProjectile = false

    //this initializes the variable that will hold the user's score
    this.score = 0

    //this initializes the variable that will hold the value of the text that will show up on the screen
    this.scoreText = null

    //this initializes the variable that will hold the value of the score text's style
    this.scoreTextStyle = { font: '65px Arial', fill: '#33658A', align: 'center'}
  }
  //this initializes the scene, in other words gets it ready to go.
  init (data) {
    // this sets the background color of the main camera.
    this.cameras.main.setBackgroundColor('#ffffff')

    //this initializes the variable that holds the game over text.
    this.gameOverText = null

    //this initializes the variable that contains the style for the game over text.
    this.gameOverTextStyle = { font: '65px Arial', fill: '#FFFFFF', align: 'center'}
  }
  
  preload () {
    // this displays to the console what scene the program is currently running (typically for debugging purposes)
    console.log('Game Scene') 
    
    // this loads the image for the background image
    this.load.image('milkmanBackground', 'images/milkmanBackground.jpg')
    
    //this loads the milkman sprite
    this.load.image('milkman', 'images/milkman.png')
    
    //this loads the milk bottle projectile sprite
    this.load.image('milkJug', 'images/milk_jug.png')
    
    //this will load in the sprite of the people reaching out for the milk, which serves as the enemy.
    this.load.image('enemy', 'images/person_milk_reaching.png')
    
    //this loads the audio file for the milk jug projectile being thrown/"fired"
    this.load.audio('wooshJug', 'sounds/jug-thrown.wav')

    //this loads the audio file for the enemy being hit and destroyed by the milk jug
    this.load.audio('intenseBeeping', 'sounds/intense_beeping.wav')
    //this loads the audio file for the shriek of the milkman when he collides with the enemy
    this.load.audio('milkmanShriek', 'sounds/milkman_shriek.wav')
  }

  create (data) {
    //this places the background image in the scene and sets it to 0, 0.
    this.background = this.add.image(0, 0, 'milkmanBackground').setScale(3.0)
    
    //this sets the origin of the background image to the top left hand side of the screen. 
    this.background.setOrigin(0, 0)

    //this places the score text on the screen
    this.scoreText = this.add.text(10, 10, 'Score: ' + this.score.toString(), this.scoreTextStyle)
    
    //this places the sprite on the screen and adds physics to the sprite
    this.milkman = this.physics.add.sprite(1920 / 2, 1080 - 100, 'milkman').setScale(0.2)
    
    //this creates a group for the milk jug projectiles
    this.projectileGroup = this.physics.add.group()
    
    //this creates a group for the enemy people who are trying to get the milk from the milkman.
    this.enemyGroup = this.add.group()
    
    //this creates an enemy
    this.createEnemy()
    
    //this senses collision between the person looking for milk and the milk jug
    this.physics.add.collider(this.projectileGroup, this.enemyGroup, function (projectileCollide, enemyCollide) {
      //this destroys the enemy and the projectile which have collided.
      enemyCollide.destroy()
      projectileCollide.destroy()

      //this will play an intense beeping noise when the enemy is hit and destroyed with the milk
      this.sound.play('intenseBeeping')

      //this will add one point to the score
      this.score = this.score + 1
      this.scoreText.setText('Score: ' + this.score.toString())

     //this will recreate / respawn two enemies for every one enemy which had been destroyed
      this.createEnemy()
      this.createEnemy()
    }.bind(this))

    //this detects the collision between the milkman and the enemy people trying to grab the milk from the milkman.
    this.physics.add.collider(this.milkman, this.enemyGroup, function (milkmanCollide, enemyCollide) {
      //this plays the sound of the milkman shrieking
      this.sound.play('milkmanShriek')
      
      //this stops the physics of the game, so the enemies stop appearing
      this.physics.pause()
      
      //this destroys the milkman and the enemy
      milkmanCollide.destroy
      enemyCollide.destroy
      
      //this displays the game over text and sets it to the middle of the screen with the style defined earlier.
      this.gameOverText = this.add.text(1920 / 2, 1080 / 2, 'Oh No! The milkman has been Touched. You did not win. \nThe game is now over.\nClick these very cool words to try again.', this.gameOverTextStyle).setOrigin(0.5)

      //this sets the score to 0.
      this.score = 0
      
      //this makes the word text interactive, which means the user can press the text like a button.
      this.gameOverText.setInteractive({ useHandCursor: true })
      
      //if the text is pressed, it starts the game again, effectively rebooting the game scene.
      this.gameOverText.on('pointerdown', () => this.scene.start('gameScene'))
    }.bind(this))
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
        //this plays the sound of the jug being thrown when the projectile appears
        this.sound.play('wooshJug')
      }
    }
    //this checks if the space key is not being pressed. 
    if (keySpaceObj.isUp === true) {
      //this sets the fire projectile variable back to false so that it can be fired again whenever the user presses and releases the space bar, so it is not just a single instance allowed.
      this.fireProjectile = false
    }
    //this picks out each individual child element (i.e one single projectile) out of the projectile group 
    this.projectileGroup.children.each(function (item) {
      //this decreases the y value of the item (which is each individual projectile). This moves the projectile towards the top of the screen, as the origin (0,0), is at the top of the screen.
      item.y = item.y - 10
      //this checks to see if the projectile's y location is beyond the screen and if so, it destroys the projectole so it does not take up any more memory than strictly necessary. 
      if (item.y < 0) {
        item.destroy()
      }
    })
  }
}

export default GameScene