let spaceship;

function setup() {
  createCanvas(400, 400);
  spaceship = loadImage("./assets/player_plane.png");
  // spaceship = spaceship.get(0, 0, 64, 64);
  console.log(spaceship);

}

function draw() {
  background(220);
  image(spaceship, 0, 0, 100, 100);
}
