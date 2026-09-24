
let turn = 0;
let gameOver = false;

let v1 = 'gray';
let v2 = 'gray';
let v3 = 'gray';
let v4 = 'gray';
let v5 = 'gray';
let v6 = 'gray';
let v7 = 'gray';
let v8 = 'gray';
let v9 = 'gray';

function resetBoard() {
  v1 = 'gray';
  v2 = 'gray';
  v3 = 'gray';
  v4 = 'gray';
  v5 = 'gray';
  v6 = 'gray';
  v7 = 'gray';
  v8 = 'gray';
  v9 = 'gray';
  turn = 0;
  gameOver = false;
}

function checkWinner(color) {
  if (v1 === color && v2 === color && v3 === color) return true;
  if (v4 === color && v5 === color && v6 === color) return true;
  if (v7 === color && v8 === color && v9 === color) return true;

  if (v1 === color && v4 === color && v7 === color) return true;
  if (v2 === color && v5 === color && v8 === color) return true;
  if (v3 === color && v6 === color && v9 === color) return true;

  if (v1 === color && v5 === color && v9 === color) return true;
  if (v3 === color && v5 === color && v7 === color) return true;

  return false;
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  fill('red');
  rect(0, 0, 200, 400);

  fill('blue');
  rect(200, 0, 200, 400);

  fill('black');
  rect(30, 30, 330, 330, 20);

  fill(v1);
  rect(40, 40, 100, 100, 15);

  fill(v2);
  rect(145, 40, 100, 100, 15);

  fill(v3);
  rect(250, 40, 100, 100, 15);

  fill(v4);
  rect(40, 145, 100, 100, 15);

  fill(v5);
  rect(145, 145, 100, 100, 15);

  fill(v6);
  rect(250, 145, 100, 100, 15);

  fill(v7);
  rect(40, 250, 100, 100, 15);

  fill(v8);
  rect(145, 250, 100, 100, 15);

  fill(v9);
  rect(250, 250, 100, 100, 15);

  if (checkWinner('blue')) {
    fill(255);
    textSize(20);
    text('blue wins', 150, 40);
  } else if (checkWinner('red')) {
    fill(255);
    textSize(20);
    text('red wins', 150, 40);
  } else if (turn >= 9) {
    fill(255);
    textSize(20);
    text('draw', 170, 40);
  }
}

function mouseClicked() {
  // Als het spel afgelopen is, doe niets meer
  if (gameOver) return;

  if (mouseX > 40 && mouseX < 140 && mouseY > 40 && mouseY < 140) {
    if (v1 === 'gray') {
      if (turn % 2 === 0) {
        v1 = 'red';
      } else {
        v1 = 'blue';
      }
      turn = turn + 1;
    }
  }

  if (mouseX > 145 && mouseX < 245 && mouseY > 40 && mouseY < 140) {
    if (v2 === 'gray') {
      if (turn % 2 === 0) {
        v2 = 'red';
      } else {
        v2 = 'blue';
      }
      turn = turn + 1;
    }
  }

  if (mouseX > 250 && mouseX < 350 && mouseY > 40 && mouseY < 140) {
    if (v3 === 'gray') {
      if (turn % 2 === 0) {
        v3 = 'red';
      } else {
        v3 = 'blue';
      }
      turn = turn + 1;
    }
  }

  if (mouseX > 40 && mouseX < 140 && mouseY > 145 && mouseY < 245) {
    if (v4 === 'gray') {
      if (turn % 2 === 0) {
        v4 = 'red';
      } else {
        v4 = 'blue';
      }
      turn = turn + 1;
    }
  }

  if (mouseX > 145 && mouseX < 245 && mouseY > 145 && mouseY < 245) {
    if (v5 === 'gray') {
      if (turn % 2 === 0) {
        v5 = 'red';
      } else {
        v5 = 'blue';
      }
      turn = turn + 1;
    }
  }

  if (mouseX > 250 && mouseX < 350 && mouseY > 145 && mouseY < 245) {
    if (v6 === 'gray') {
      if (turn % 2 === 0) {
        v6 = 'red';
      } else {
        v6 = 'blue';
      }
      turn = turn + 1;
    }
  }

  if (mouseX > 40 && mouseX < 140 && mouseY > 250 && mouseY < 350) {
    if (v7 === 'gray') {
      if (turn % 2 === 0) {
        v7 = 'red';
      } else {
        v7 = 'blue';
      }
      turn = turn + 1;
    }
  }

  if (mouseX > 145 && mouseX < 245 && mouseY > 250 && mouseY < 350) {
    if (v8 === 'gray') {
      if (turn % 2 === 0) {
        v8 = 'red';
      } else {
        v8 = 'blue';
      }
      turn = turn + 1;
    }
  }

  if (mouseX > 250 && mouseX < 350 && mouseY > 250 && mouseY < 350) {
  if (v9 === 'gray') {
  if (turn % 2 === 0) {
  v9 = 'red';
  } else {
  v9 = 'blue';
  }
   turn = turn + 1;
  }
  }

  if (checkWinner('red')) {
    gameOver = true;
    setTimeout(resetBoard, 1000);
    return;
  }

  if (checkWinner('blue')) {
    gameOver = true;
    setTimeout(resetBoard, 1000);
    return;
  }

  if (turn >= 9) {
    gameOver = true;
    setTimeout(resetBoard, 1000);
  }
}

