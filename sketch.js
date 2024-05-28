const SPACESHIP_VELOCITY = 7;
const BACKGROUND_VELOCITY = 20;

let spaceship;
let bgImage;
let bgimageX = 0;
let positionSpaceshipX = 100;
let positionSpaceshipY = 300;

function preload() {
  bgImage = loadImage("./assets/Stars.jpeg");
  spaceship = loadImage("./assets/player_plane.png");
}

function setup() {
  createCanvas(innerWidth, innerHeight);
  noSmooth();
  spaceship = spaceship.get(0, 0, 64, 64);
}

function draw() {
  image(bgImage, bgimageX % width, 0, width, height);
  image(bgImage, (bgimageX % width) + width, 0, width, height);

  image(spaceship, positionSpaceshipX, positionSpaceshipY, 100, 100);
  if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
    positionSpaceshipY -= SPACESHIP_VELOCITY;
  } else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
    positionSpaceshipY += SPACESHIP_VELOCITY;
  }
  bgimageX -= BACKGROUND_VELOCITY;
}
