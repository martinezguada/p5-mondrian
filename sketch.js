function setup() {
  createCanvas(501, 500);
  angleMode(DEGREES);
  background(220);
  translate(-100, 240);
  rotate(-45);

  push();
  translate(80, 160);
  rotate(-95);
  strokeCap(PROJECT); // linea cuadrado
  strokeWeight(6);
  line(-63, 0, 45, 130);
  pop();

  // triangulos
  noStroke();
  fill(255, 218, 5); // amarillo
  triangle(220, 215, 342, 96, 96, 96);

  fill(20, 90, 147); //azul
  triangle(352, 346, 405, 408, 280, 423);

  fill(20, 90, 147); //azul2 para cortar bordes
  triangle(278, 424, 404, 397, 404, 424);

  fill(300, 80, 30); // naranja
  triangle(110, 325, 76, 300, 80, 356);

  //cuadrado principal
  noFill();
  stroke(0);
  strokeWeight(3);
  rect(70, 90, 340, 340);

  //lineas
  strokeCap(PROJECT); // linea arriba
  strokeWeight(6);
  line(365, 100, 400, 135);
  strokeCap(PROJECT); // linea medio
  strokeWeight(6);
  line(99, 100, 402, 400);
  strokeCap(PROJECT); // linea abajo
  strokeWeight(6);
  line(80, 299, 198, 420);
  strokeCap(PROJECT); // linea derecha
  strokeWeight(6);
  line(400, 295, 280, 420);
  strokeCap(PROJECT); // linea izquierda
  strokeWeight(6);
  line(85, 355, 340, 99);

  // cuadrado
  noStroke();
  fill(0);
  push();
  translate(190, 190);
  rotate(45);
  fill(0);
  rect(-50, 0, 90, 90);
  pop();
}
