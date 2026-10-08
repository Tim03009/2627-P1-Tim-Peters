let screen = 'start';
let currentQuestionIndex = 0;

const questions = [
  {
    question: 'Wie won de eerste Ballon dor ooit?',
    answers: ['Stanley Matthews', 'R9', 'Pelé', 'Raymond Kopa'],
    correctAnswer: 0,
  },
  {
    question: 'Wie won de Champions League in 2018?',
    answers: ['Barcelona', 'Real Madrid', 'FC Bayern Munchen', 'Liverpool'],
    correctAnswer: 1,
  },
  {
    question: 'Hoelang speelde Messi bij FC Barcelona in het eerste elftal?',
    answers: ['16 jaar', '17 jaar', '15 jaar', '18 jaar'],
    correctAnswer: 1,
  },
  {
    question: 'Welke speler is de enige die in drie verschillende decennia in de Champions League heeft gescoord?',
    answers: ['Karim Benzema', 'Robert Lewandowski', 'Lionel Messi', 'Cristiano Ronaldo'],
    correctAnswer: 3,
  },
  {
    question: 'Welke club heeft de meeste Europa League-titels gewonnen?',
    answers: ['Sevilla', 'Juventus', 'Inter Milan', 'Liverpool'],
    correctAnswer: 0,
  },
];
let buttonX = [70, 430, 70, 430];
let buttonY = [350, 350, 440, 440];

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);

  noStroke();

  fill('black');
  rect(0, 0, 800, 200);

  fill('red');
  rect(0, 200, 800, 400);

  fill('white');
  textAlign(CENTER, CENTER);
  textSize(40);
  text('Voetbal quiz', 400, 120);

  if (screen === 'start') {
    fill('white');
    rect(290, 385, 220, 70, 12);

    fill('red');
    textSize(26);
    text('START QUIZ', 400, 420);

    fill('white');
    textSize(20);
    text('Klik op START QUIZ om te beginnen', 400, 510);
  } else if (screen === 'question') {
    const currentQuestion = questions[currentQuestionIndex];

    fill('white');
    textSize(26);
    text(currentQuestion.question, 400, 270);

    for (let i = 0; i < currentQuestion.answers.length; i++) {
      fill('white');
      rect(buttonX[i], buttonY[i], 300, 70, 10);

      fill('red');
      textSize(24);
      text(currentQuestion.answers[i], buttonX[i] + 150, buttonY[i] + 35);
    }
  } else if (screen === 'next') {
    fill('white');
    textSize(28);
    text('Goed antwoord!', 400, 320);

    fill('white');
    rect(290, 385, 220, 70, 12);
    fill('red');
    textSize(22);
    text('VOLGENDE VRAAG', 400, 420);
  } else if (screen === 'wrong') {
    fill('white');
    textSize(28);
    text('Helaas, fout antwoord!', 400, 320);

    fill('white');
    rect(290, 385, 220, 70, 12);
    fill('red');
    textSize(26);
    text('RESET', 400, 420);
  } else if (screen === 'finished') {
    fill('white');
    textSize(28);
    text('Goed gedaan! Je bent klaar.', 400, 320);

    fill('white');
    rect(290, 385, 220, 70, 12);
    fill('red');
    textSize(26);
    text('RESET', 400, 420);
  }
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex >= questions.length) {
    screen = 'finished';
  } else {
    screen = 'question';
  }
}

function resetQuiz() {
  currentQuestionIndex = 0;
  screen = 'start';
}

function mousePressed() {
  if (screen === 'start') {
    if (mouseX > 290 && mouseX < 510 && mouseY > 385 && mouseY < 455) {
      screen = 'question';
    }
    return;
  }

  if (screen === 'question') {
    const currentQuestion = questions[currentQuestionIndex];

    for (let i = 0; i < currentQuestion.answers.length; i++) {
      if (
        mouseX > buttonX[i] &&
        mouseX < buttonX[i] + 300 &&
        mouseY > buttonY[i] &&
        mouseY < buttonY[i] + 70
      ) {
        if (i === currentQuestion.correctAnswer) {
          if (currentQuestionIndex < questions.length - 1) {
            screen = 'next';
          } else {
            screen = 'finished';
          }
        } else {
          screen = 'wrong';
        }
        return;
      }
    }
    return;
  }

  if (mouseX > 290 && mouseX < 510 && mouseY > 385 && mouseY < 455) {
    if (screen === 'next') {
      nextQuestion();
    } else if (screen === 'wrong' || screen === 'finished') {
      resetQuiz();
    }
  }
}
