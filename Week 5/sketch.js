let screen = 'start';
let currentQuestionIndex = 0;
let score = 0;

const questions = [
  {
    question: 'Wie won de eerste Ballon dor ooit?',
    answers: ['Stanley Matthews', 'R9', 'Pelé', 'Raymond Kopa'],
    correctAnswer: 'Stanley Matthews',
  },
  {
    question: 'Wie won de Champions League in 2018?',
    answers: ['Barcelona', 'Real Madrid', 'FC Bayern Munchen', 'Liverpool'],
    correctAnswer: 'Real Madrid',
  },
  {
    question: 'Hoelang speelde Messi bij FC Barcelona in het eerste elftal?',
    answers: ['16 jaar', '17 jaar', '15 jaar', '18 jaar'],
    correctAnswer: '17 jaar',
  },
  {
    question: 'Welke speler is de enige die in drie verschillende decennia in de Champions League heeft gescoord?',
    answers: ['Karim Benzema', 'Robert Lewandowski', 'Lionel Messi', 'Cristiano Ronaldo'],
    correctAnswer: 'Cristiano Ronaldo',
  },
  {
    question: 'Welke club heeft de meeste Europa League-titels gewonnen?',
    answers: ['Sevilla', 'Juventus', 'Inter Milan', 'Liverpool'],
    correctAnswer: 'Sevilla',
  },
  {
    question: 'welke speler de meeste Champions League-titels heeft gewonnen?',
    answers: ['Luka Modrić', 'Karim Benzema', 'Toni Kroos', 'Francisco Gento'],
    correctAnswer: 'Francisco Gento',
  },
  {
    question: 'Welk land won de aller eerste world cup?',
    answers: ['Argentinië', 'Brazilië', 'Uruguay', 'Nederland'],
    correctAnswer: 'Uruguay',
  },
  {
   question: 'Welke club uit de eredivisie heeft meerdere Champions League titels? ',
    answers: ['FC Utrecht', 'Feyenoord', 'PSV', 'Ajax'],
    correctAnswer: 'Ajax',
  },
  {
   question: 'In welk jaar won FC Utrecht voor het eerst de KNVB Beker?',
    answers: ['1978', '1985', '1992', '1987'],
    correctAnswer: '1985',
  },
  {
   question: 'Wie was de allereerste trainer van FC Utrecht toen de club in 1970 werd opgericht?',
    answers: ['Bert Jacobs', 'Ron Jans', 'Ron Jans', 'Han Berger'],
    correctAnswer: 'Bert Jacobs',
  }
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
    text(currentQuestion.question, 40, 220, 720, 100);

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
    textSize(22);
    text('VOLGENDE VRAAG', 400, 420);
  } else if (screen === 'finished') {
    fill('white');
    textSize(28);
    text('Goed gedaan! Je bent klaar.', 400, 320);

    fill('white');
    textSize(26);
    text(`Je hebt ${score} van de ${questions.length} goed!`, 400, 365);

    fill('white');
    rect(290, 385, 220, 70, 12);
    fill('red');
    textSize(26);
    text('RESET', 400, 420);
  }
}

function nextQuestion() {
  currentQuestionIndex += 1;
  screen = currentQuestionIndex >= questions.length ? 'finished' : 'question';
}

function resetQuiz() {
  currentQuestionIndex = 0;
  score = 0;
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
        if (currentQuestion.answers[i] === currentQuestion.correctAnswer) {
          score += 1;
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
    if (screen === 'next' || screen === 'wrong') {
      nextQuestion();
    } else if (screen === 'finished') {
      resetQuiz();
    }
  }
}
