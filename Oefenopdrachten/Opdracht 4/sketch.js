function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  //In de draw:
  if (keyIsPressed === true) {
    console.log('er word een toets ingedrukt namelijk: ' + keyCode)
    circle(100, 150, 30)
    if (keyCode === ENTER) {
      //ENTER wordt ingehouden
      console.log('hoi')
      rect(50, 50, 50, 50)

  

    }
  }
  //Checkt enkel of er een toets wordt ingedrukt OP DAT MOMENT
  rect(50, 250, 50, 125);
  circle(75, 270, 30);
  circle(75, 310, 30);
  circle(75, 350, 30);

}






