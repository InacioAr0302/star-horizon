const SPACESHIP_VELOCYT = 4;

let spaceship;
let positionSpaceshipX = 100;
let positionSpaceshipY = 300;

function preload() {
  spaceship = loadImage("./assets/player_plane.png");
}

function setup() {
  createCanvas(innerWidth, innerHeight);
  noSmooth();
  spaceship = spaceship.get(0, 0, 64, 64);
}

function draw() {
  background(220);
  image(spaceship, positionSpaceshipX, positionSpaceshipY, 100, 100);
  if (keyCode === UP_ARROW) {
    positionSpaceshipY -= SPACESHIP_VELOCYT;
  } else if (keyCode === DOWN_ARROW) {
    positionSpaceshipY += SPACESHIP_VELOCYT;
  }
}

function keyReleased() {
  keyCode = -1;
}
