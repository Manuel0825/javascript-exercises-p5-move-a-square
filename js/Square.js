/*function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    // Tecla izquierda   
    SquareX -= 10;  //rect(200 - 10, 200, 50, 50); // moves it 10 pixel to the L
  } else if (keyCode === RIGHT_ARROW) {
    // Tecla derecha
    SquareX += 10; //rect(200 + 10, 200, 50, 50); // moves it 10 pixel to the R
  } else if (keyCode === UP_ARROW) {
    // Tecla arriba
    SquareY -= 10;//rect(200, 200 - 10, 50, 50); // moves it 10 pixel up 
  } else if (keyCode === DOWN_ARROW) {
    // Tecla abajo
    SquareY += 10;  //rect(200, 200 + 10, 50, 50); // moves it 10 pixel down
  }
}*/




function moveSquare() {
  if (keyIsDown(LEFT_ARROW) && SquareX - step >= 0) {
    SquareX -= step; // Move left
  }
  if (keyIsDown(RIGHT_ARROW) && SquareX + squareSide + step <= canvasWidth) {
    SquareX += step; // Move right
  }
  if (keyIsDown(UP_ARROW) && SquareY - step >= 0) {
    SquareY -= step; // Move up
  }
  if (keyIsDown(DOWN_ARROW) && SquareY + squareSide + step <= canvasHeight) {
    SquareY += step; // Move down
  }
}


