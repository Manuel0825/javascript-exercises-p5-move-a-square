let SquareX = 200; // Posición inicial en el eje X
let SquareY = 200; // Posición inicial en el eje Y
let squareSide = 50; // Tamaño del cuadrado
let Width = 50; // Ancho del canvas
let Height = 50; // Alto del canvas

function setup() {
    createCanvas(400, 400); // Crea un lienzo de 400x400 píxeles
  }
  
  function draw() {
    background(220); // white background. 
    fill(255, 0, 0);
    rect(SquareX, SquareY, Width, Height);
  }

  