function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(230, 239, 235);

  // Muur en vloer
  noStroke();
  fill(230, 239, 235);
  rect(0, 0, 800, 400);
  fill(190, 160, 125);
  rect(0, 400, 800, 200);

 
  fill(245, 235, 215);
  rect(0, 390, 800, 15);

  // Raam
  fill(255);
  rect(80, 70, 190, 150);
  fill(160, 215, 230);
  rect(90, 80, 170, 130);
  stroke(255);
  strokeWeight(6);
  line(175, 80, 175, 210);
  line(90, 145, 260, 145);

  // Vloerlijnen
  stroke(150, 120, 90);
  strokeWeight(2);
  line(0, 470, 800, 470);
  line(0, 540, 800, 540);
  
  // schilderij
  fill('black')
  rect(400, 80, 100, 100)
}
