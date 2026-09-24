let auto1 = 0
auto1+= -150
let auto2 = 0 
auto2+= -150
let cloud1 = 0
let zon = 0

let licht = 0 
let stoplichtkleur = 0 




function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);
  noStroke(0)
  cloud1+= 1
  zon+= 1

  fill('grey');
  rect(0, 400, 800, 200)
 

  fill('lightblue')
  rect(0, 0, 800, 400);
 
  //strepen
  fill('white');
  rect(0, 485, 100, 20);
  rect(120, 485, 100, 20);
  rect(240, 485, 100, 20);
  rect(360, 485, 100, 20);
  rect(480, 485, 100, 20);
  rect(600, 485, 100, 20);
  rect(720, 485, 100, 20);

  //zon
   fill('yellow')
   circle(zon, 75, 50)

  // bergen
  fill('darkgrey');
  triangle(500, 400, 10, 400, 200, 50);
  fill('lightgrey');
  triangle(500, 400, 80, 400, 200, 50);
  fill('darkgrey');
   triangle(720, 400, 230, 400, 400, 80);

   // bomen
   fill('brown');
   rect(30, 330, 15, 70);
   rect(130, 340, 15, 60);
   rect(350, 340, 15, 60);
   rect(500, 340, 15, 60);
   rect(675, 360, 15, 40);
   
   

  fill('green');
   ellipse(37, 310, 70,80)
   ellipse(137, 320, 70,80)
   ellipse(358, 320, 60,80)
   ellipse(508, 320, 60,90)
   ellipse(683, 330, 50,80)


   fill('grey')
   //stoplicht
   rect(575, 335, 25, 65)
   rect(567, 275, 40, 80)
  

   fill('black')
   circle(587, 290, 20)
   circle(587, 315, 20)
   circle(587, 340, 20)


     fill('black')
   circle(587, 290, 20)
   if (stoplichtkleur == 1) {
     fill('red')
    circle(587, 290, 20)
    
   }

  fill('orange')
  circle(587, 315, 20)
  fill('lightgreen')
  circle(587, 340, 20)





   //wolk
     fill("white");
  circle(cloud1, 150, 50);
  circle(cloud1 + 50, 150, 50);
  circle(cloud1 + 25, 125, 50);
  circle(cloud1 + 25, 175, 50);

   

  //auto1
   fill('yellow')
   rect(auto1, 520, 150, 50)
   rect(auto1 + 25, 500, 90, 50)

   fill('black')
   circle(auto1 + 25, 570, 30)
   circle(auto1 + 125, 570, 30)


   //auto2
   fill('red')
   rect(auto2, 420, 150, 50)
   rect(auto2 + 25, 390, 100, 50)

   fill('black')
   circle(auto2 + 25, 470, 30)
   circle(auto2 + 125, 470, 30)


if(auto1 > 900) {
  auto1 = -150
}
   auto1+= 0

   if(auto2 > 900) {
  auto2 = -150
}
   auto2+= 0

   if(cloud1 > 900){
    cloud1 = -150
   }
    cloud1+= 0.01
   

   if(zon > 900){
    zon = -150
   }
    zon+= 0.3
   

   
  


   
  





 

}

function keyPressed() {
  if (keycode === ENTER) {

    stoplichtkleur += 1
    if (stoplichtkleur >2) {
      stoplichtkleur = 0
      
    }
    
  }
}