function setup() {
  createCanvas(800, 800);
}

// name
function draw() {
  background(220);
  textSize(32);
  fill('black');
  text('Tim Peters', 13, 30);

// flag
stroke(0)
fill('white');
rect(50, 60, 100, 55);
fill('red');
circle(100, 87,25);

// chessboard
stroke(0);
fill('white');
rect(50, 150, 63, 60);
fill('black');
rect(51, 150, 18, 18)
rect(51, 190, 18, 18)
rect(93, 150, 18, 18)
rect(93, 190, 18, 18)
rect(72, 170, 18, 18)

// huis
stroke(0);
strokeWeight(2);
fill(280, 50, 50, 1)
rect(57, 280, 50, 50)
fill(280, 57, 280, 1)
triangle(82, 260, 50, 280, 112, 280)

// stop light

fill('gray');
rect(252, 20, 30, 70);
rect(257, 90, 20, 30);
fill('red')
circle(267, 33, 17)
fill('orange')
circle(267, 54, 17)
fill('lightgreen')
circle(267, 75, 17)
   
// dobbelsteen
stroke(1);
strokeWeight(2)
fill('white');
square(215, 165, 100, 10);
fill('black')
circle(242, 190, 20)
circle(265, 212, 20)
circle(290, 236, 20)

// mario
noStroke();
fill('red')
rect(350, 350, 60,10)
rect(340, 360, 100,10)
rect(340, 420, 20,10)
rect(360, 420, 50,10)
rect(330, 430, 30,10)
rect(370, 430, 20,10)
rect(400, 430, 30,10)
rect(320, 440, 40,10)
rect(400, 440, 40,10)
rect(340, 450, 10,10)
rect(410, 450, 10,10)

fill('blue')
rect(360, 420, 10,10)
rect(360, 430, 10,10)
rect(390, 430, 10,10)
rect(360, 440, 40,10)
rect(350, 450, 10,10)
rect(370, 450, 20,10)
rect(400, 450, 10,10)
rect(350, 460, 60,10)
rect(340, 470, 80,10)
rect(340, 480, 30,10)
rect(390, 480, 30,10)


fill('brown')
rect(340, 370, 30,10)
rect(330, 380, 10,10)
rect(350, 380, 10,10)
rect(330, 390, 10,10)
rect(350, 390, 20,10)
rect(330, 400, 20,10)
rect(330, 490, 30,10)
rect(400, 490, 30,10)
rect(320, 500, 40,10)
rect(400, 500, 40,10)

fill('#E8BEAC')
rect(370, 370, 30,10)
rect(340, 380, 10,10)
rect(360, 380, 40,10)
rect(410, 380, 30,10)
rect(340, 390, 10,10)
rect(370, 390, 40,10)
rect(420, 390, 30,10)
rect(350, 400, 50,10)
rect(350, 410, 80,10)
rect(320, 450, 20,10)
rect(420, 450, 20,10)
rect(320, 460, 30,10)
rect(410, 460, 30,10)
rect(320, 470, 20,10)
rect(420, 470, 20,10)

fill('black')
rect(400, 370, 10,10)
rect(400, 380, 10,10)
rect(410, 390, 10,10)
rect(400, 400, 40,10)

fill('gold')
rect(360, 450, 10,10)
rect(390, 450, 10,10)


// 8

fill('black')
rect(130, 460, 80, 20)
rect(130, 480, 10, 10)
rect(200, 480, 10, 10)
rect(150, 520, 10, 10)
rect(180, 520, 10, 10)
rect(150, 530, 40, 10)

fill('#E8BEAC')
rect(140, 480, 60, 10)
rect(130, 490, 80, 10)
rect(130, 500, 10, 10)
rect(160, 500, 20, 10)
rect(200, 500, 10, 10)
rect(130, 510, 30, 10)
rect(180, 510, 30, 10)
rect(130, 520, 20, 10)
rect(160, 520, 20, 10)
rect(190, 520, 20, 10)
rect(130, 530, 20, 10)
rect(190, 530, 20, 10)

fill('white')
rect(140, 500, 10, 10)
rect(190, 500, 10, 10)

fill('blue')
rect(150, 500, 10, 10)
rect(180, 500, 10, 10)

fill('brown')
rect(160, 510, 20, 10)








}
