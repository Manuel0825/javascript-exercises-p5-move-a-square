let SquareX = 200; // Initial X position
let SquareY = 200; // Initial Y position
const squareSide = 50; // Square size
const canvasWidth = 400; // Canvas width
const canvasHeight = 400; // Canvas height
const step = 5; // Step size for movement

function setup() {
  createCanvas(canvasWidth, canvasHeight); // Create a canvas
}

function draw() {
  background(25); // Black background
  fill(255, 0, 0);
  rect(SquareX, SquareY, squareSide, squareSide); // Draw the square
  moveSquare();
}




      