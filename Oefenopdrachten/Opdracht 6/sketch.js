function setup() {
  createCanvas(380, 350);
}







function draw() {
  background(220);
  let kleuren = ['red', 'green', 'blue', 'purple', 'yellow'];

let y = 20
let x = 15

for(let i = 0; i < kleuren.length; i++) {
  fill(kleuren[i])
  text(kleuren[i], x, y)
  
 y = y + 20

}

y = 150

let first = kleuren.shift()
kleuren.push(first);

for(let i = 0; i < kleuren.length; i++) {
  fill(kleuren[i])
  text(kleuren[i], x, y)
  
 y = y + 20

}




}