namespace SpriteKind {
    export const enemy2 = SpriteKind.create()
    export const playerproj = SpriteKind.create()
    export const brick = SpriteKind.create()
}
/**
 * there are 2 extra projectiles that go straight down fsr.
 */
/**
 * I want the zombies to drop this sprite when killed.
 * 
 * Then I want the "gems" to allow the player to level up.
 */
/**
 * brick defined as projectile does kill enemy but the enemy projectile also kills them.
 * 
 * brick should only hurt zombies and not the player.
 * 
 * needs work
 */
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.startEffect(effects.halo, 1000)
    destroyEnemy(enemy22)
    destroyEnemy(myEnemy)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (true) {
        destroyEnemy(myEnemy)
    }
    if (true) {
        destroyEnemy(enemy22)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (true) {
        info.changeLifeBy(-1)
    }
})
function shootBrick (brick: Sprite) {
    brick = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . e e . . 
        . . . . . . . . . . . . e e . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, 50)
    brick = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . e e . . 
        . . . . . . . . . . . . e e . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, -50)
    brick = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . e e . . . . . . . . . . 
        . . . . e e . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, -50, -50)
    brick = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e . . . . . . . . . 
        . . . . . e e . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, -50, 50)
    brick.setFlag(SpriteFlag.DestroyOnWall, true)
}
function destroyEnemy (deadEnemy: Sprite) {
    projectile1 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 . . . . . . . . . . 
        . . . . 2 2 2 . . . . . . . . . 
        . . . . . 2 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, deadEnemy, 0, 50)
    sprites.destroy(deadEnemy, effects.fire, 500)
    deadEnemy.follow(mySprite, 50)
    if (myEnemy == deadEnemy) {
        myEnemy = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 7 7 7 7 . . . . . 
            . . . . . . . 2 7 2 7 . . . . . 
            . . . . . . . 7 7 7 7 . . . . . 
            . . . . 7 7 7 5 5 5 5 . . . . . 
            . . . . . . . 5 5 5 5 . . . . . 
            . . . . . 7 5 5 5 5 5 . . . . . 
            . . . . . . . 5 5 5 5 . . . . . 
            . . . . . . . 6 . . 6 . . . . . 
            . . . . . . . 6 . . 6 . . . . . 
            . . . . . . . 7 . . 6 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        spawnEnemy(myEnemy)
    }
    if (enemy22 == deadEnemy) {
        enemy22 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 7 7 7 7 . . . . . . 
            . . . . . . 7 2 7 2 . . . . . . 
            . . . . . . 7 7 7 7 . . . . . . 
            . . . . . . 5 5 5 5 7 7 . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . . 5 5 5 5 5 7 . . . . 
            . . . . . . 8 . . 8 . . . . . . 
            . . . . . . 8 . . 7 . . . . . . 
            . . . . . . 7 . . 7 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        spawnEnemy(enemy22)
    }
}
info.onLifeZero(function () {
    sprites.destroy(mySprite)
    mySprite.startEffect(effects.fountain)
    if (true) {
        game.gameOver(true)
    }
})
// Enemy respawn
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    info.changeScoreBy(1)
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, enemy22, 50, 50)
    projectile2.follow(mySprite, 50)
    projectile1.follow(mySprite, 50)
    projectile1 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 . . . . . . . . . . 
        . . . . 2 2 2 . . . . . . . . . 
        . . . . . 2 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, myEnemy, 0, 50)
})
function spawnEnemy (theEnemy: Sprite) {
    theEnemy.setPosition(randint(1, 60), randint(0, 120))
    theEnemy.follow(mySprite, 55)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (true) {
        info.changeLifeBy(-1)
    }
})
let projectile2: Sprite = null
let projectile1: Sprite = null
let brick: Sprite = null
let myEnemy: Sprite = null
let enemy22: Sprite = null
let mySprite: Sprite = null
game.splash("SurvIver.oi")
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . a a a a a a . . . . 
    . . . . . . a 6 1 1 6 a . . . . 
    . . . . . . a a a a a a . . . . 
    . . . . . . . c c c c . . . . . 
    . . . . . . a c c c c a . . . . 
    . . . . . . . c c c c . . . . . 
    . . . . . . . c c c c . . . . . 
    . . . . . . . 7 . . 7 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
enemy22 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . . . 7 2 7 2 . . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . . . 5 5 5 5 7 7 . . . . 
    . . . . . . 5 5 5 5 . . . . . . 
    . . . . . . 5 5 5 5 5 7 . . . . 
    . . . . . . 8 . . 8 . . . . . . 
    . . . . . . 8 . . 7 . . . . . . 
    . . . . . . 7 . . 7 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
myEnemy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 7 7 7 7 . . . . . 
    . . . . . . . 2 7 2 7 . . . . . 
    . . . . . . . 7 7 7 7 . . . . . 
    . . . . 7 7 7 5 5 5 5 . . . . . 
    . . . . . . . 5 5 5 5 . . . . . 
    . . . . . 7 5 5 5 5 5 . . . . . 
    . . . . . . . 5 5 5 5 . . . . . 
    . . . . . . . 6 . . 6 . . . . . 
    . . . . . . . 6 . . 6 . . . . . 
    . . . . . . . 7 . . 6 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
spawnEnemy(enemy22)
spawnEnemy(myEnemy)
