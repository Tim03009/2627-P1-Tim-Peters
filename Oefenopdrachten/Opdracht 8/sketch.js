function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);

  tekenHuis(200, 300, 100);
  tekenHuis(75, 300, 100);
  tekenHuis(325, 300, 100);
 

}

function tekenHuis(x, y, grootte) {
  fill('purple');
  triangle(x, y, x + grootte / 2, y - grootte, x + grootte, y);

  fill('blue');
  rect(x, y, grootte, grootte);

  fill('black')
  rect(x + 10, y, grootte/4, grootte)
}
