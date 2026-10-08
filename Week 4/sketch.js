let xPosities = [];
let yPosities = [];
let groottes = [];
let vormen = [];
let vormKleuren = [];
let kleuren = [];
let xSnelheden = [];
let ySnelheden = [];

function setup() {
  createCanvas(880, 660);
  rectMode(CENTER);

  // Kleurschema
  kleuren = [
    "#ff0082",
    "#4b00ff",
    "#00dca5",
    "#ff9100",
    "#2de600"
  ];

  // Aantal vormen
  let aantalVormen = int(random(12, 21));

  // Maak de chaos
  for (let vormNummer = 0; vormNummer < aantalVormen; vormNummer++) {
    let nieuweXPositie = random(0, width);
    let nieuweYPositie = random(0, height);
    let nieuweGrootte = random(50, 200);
    let nieuweVorm = random(["vierkant", "cirkel"]);
    let nieuweKleur = random(kleuren);

    xPosities.push(nieuweXPositie);
    yPosities.push(nieuweYPositie);
    groottes.push(nieuweGrootte);
    vormen.push(nieuweVorm);
    vormKleuren.push(nieuweKleur);
    xSnelheden.push(0);
    ySnelheden.push(0);
  }
}

function draw() {
  background(125);

  for (let vormNummer = 0; vormNummer < xPosities.length; vormNummer++) {
    xPosities[vormNummer] = xPosities[vormNummer] + xSnelheden[vormNummer];
    yPosities[vormNummer] = yPosities[vormNummer] + ySnelheden[vormNummer];

    // Wrap aan de rand
    if (xPosities[vormNummer] > width) {
      xPosities[vormNummer] = 0;
    }
    if (xPosities[vormNummer] < 0) {
      xPosities[vormNummer] = width;
    }
    if (yPosities[vormNummer] > height) {
      yPosities[vormNummer] = 0;
    }
    if (yPosities[vormNummer] < 0) {
      yPosities[vormNummer] = height;
    }

    fill(vormKleuren[vormNummer]);
    stroke(15);
    strokeWeight(6);

    if (vormen[vormNummer] === "vierkant") {
      rect(xPosities[vormNummer], yPosities[vormNummer], groottes[vormNummer], groottes[vormNummer]);
    } else {
      ellipse(xPosities[vormNummer], yPosities[vormNummer], groottes[vormNummer], groottes[vormNummer]);
    }
  }
}

function keyPressed() {
  // Enter = nieuwe flow
  if (keyCode === ENTER) {
    for (let vormNummer = 0; vormNummer < xPosities.length; vormNummer++) {
      xPosities[vormNummer] = random(width);
      yPosities[vormNummer] = random(height);
      xSnelheden[vormNummer] = random(-3, 3);
      ySnelheden[vormNummer] = random(-3, 3);
    }
  }
}