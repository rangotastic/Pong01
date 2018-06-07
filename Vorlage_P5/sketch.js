//Ball
let bx;
let by;
let bd;
let stepx = 5;
let stepy = 7;

//speed
let s = 0;

//Punkte
let pu;
let bp;
let pn;

//Padel
let px;
let py;

//für den arc befehl
let circle = 40;

//Variablen die sich verändern
let degree = 10;
let start = 0;
n = 10;


//countdown
let co = 0;
let w = 0;

//background
let gx;
let gy;
let gv;

//view from window
let view;
let imgArne3;
let imgArne4;
let imgArne5;
let imgChristoph3;
let imgChristoph4;
let imgChristoph5;
let imgZewen1;


function preload() {
  imgArne3 = loadImage("src/Arne_3.png");
  imgArne4 = loadImage("src/Arne_4.png");
  imgArne5 = loadImage("src/Arne_5.png");
  imgChristoph3 = loadImage("src/Christoph_3.png");
  imgChristoph4 = loadImage("src/Christoph_4.png");
  imgChristoph5 = loadImage("src/Christoph_5.png");
  imgZewen1 = loadImage("src/Zewen_1.PNG");
}




function setup() {


  createCanvas(windowWidth, windowHeight - 4);
  bx = width / 2;
  by = height / 8;
  bd = 30;
  px = width / 2;
  py = height - width / 2 - width / 100;
  gx = width / 2;
  gy = width / 2;
  gv = 0
  pu = 0;
  bp = 0;
  bd = width / 15;
  pn = 0;
  view = random(0, 6);


  //für den arc befehl
  angleMode(DEGREES);

}




function draw() {
  background(255);
  planeView();
  backgr();
  punkte(height / 50);
  ball();
  fullPadel(px, py);
  //speed...................................................................................................................
  s = s + 0.009;

  //x Richtung..............................................................................................................
  bx = bx + stepx;
  if (bx > width - 15) {
    stepx = -5 - s;
  }

  if (bx <= 15) {
    stepx = 5 + s;
  }


  //Y RICHTUNG..............................................................................................................
  by = by + stepy;

  if (bp > 0) {
    fill(255);
    //    text(bp, px + 80, py + 15);
    //    text("B E S T", px - 80, py + 15);
    fill(200);
  }


  collision();

}

function backgr() { //.............................................
  //  background(255);
  fill(200);
  noStroke();
  rect(0, 0, width / 50, height)
  rect(width - (width / 50), 0, width / 50, height)
  noFill();
  stroke(200);
  strokeWeight(width / 4);
  strokeCap(SQUARE);
  arc(width / 2, width / 2 + width / 100, width - width / 25 + width / 4, width - width / 25 + width / 4, 180, 0);
  arc(width / 2, height - (width / 2 + width / 100), width - width / 25 + width / 4, width - width / 25 + width / 4, 0, 180);

}


function fullPadel(x, y) { //.............................................
  strokeCap(SQUARE);
  fill(220);
  px = (width / 2) + (rotationY * (width / 120));
  //quad(x - width / 7, y, x - width / 7, y + width / 30, x + width / 7, y + width / 30, x + width / 7, y);
  rect(x-width/7,y,width/3.5,width/30,width/60);
  stroke(255);
  strokeWeight(2);
  // line(x - 100, y, x + 100, y);


}


function ball() { //.............................................
  fill(230, 70, 20);
  noStroke();
  ellipse(bx, by + 10, bd);
}


function collision() { //.............................................
  if (by >= py - 15) {
    if (by <= py + 30) {
      if (bx >= px - width / 7) {
        if (bx <= px + width / 7) {
          stepy = -7 - s;
          pu = pu + 1;
        }
      }
    }
  }
  if (by >= height) {
    background(155, 0, 0);
    stepy = -7 - s;
    if (pu > bp) {
      bp = pu;
    }
    pu = 0;
    s = 0;
    bx = width / 2;
    by = height / 8;
  }

  if (pu > 9) {
    pn = 4;
  }

  if (pu == 0) {
    pn = 0;
  }

  if (by <= 0) {
    stepy = 7 + s;
  }
}



function punkte(y) {
  // fill(190);
  // ellipse(x, y + 30, 50, 50);
  // fill(200);
  // strokeCap(ROUND);
  // strokeWeight(1);
  // noFill();
  // arc(x, y + 30, circle + 10, circle + 10, 0, 180);
  // arc(x, y + 30, circle, circle, start, degree);
  // arc(x, y + 30, circle - 10, circle - 10, -start, -degree);
  //
  // degree = degree + 1.5;
  // start = degree - n;
  // n = n + 0.5;



  //Punkte
  fill(255);
  noStroke();
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  textSize(width/25);
  text(pu, width / 20, y);
  text("B E S T  " + bp, width - width / 10, y);

}

function planeView() {
  gv = (rotationY) / (width / 15);
  if (view < 1) {
    image(imgArne3, 0 - gv, 0, height * 2, height)
  } else if (view < 2) {
    image(imgArne4, 0 - gv, 0, height * 2, height)
  } else if (view < 3) {
    image(imgArne5, 0 - gv, 0, height * 2, height)
  } else if (view < 4) {
    image(imgChristoph3, 0 - gv, 0, height * 2, height)
  } else if (view < 5) {
    image(imgChristoph5, 0 - gv, 0, width, width * 2)
  } else {
    image(imgZewen1, 0 - gv, 0, height * 2, height)
  }
}

// // to test in chrome
//   if (view < 1) {
//     background(0)
//   } else if (view < 2) {
//     background(255)
//   } else if (view < 3) {
//     background(255, 0, 0)
//   } else if (view < 4) {
//     background(0, 255, 0)
//   } else if (view < 5) {
//     background(0, 0, 255)
//   } else if (view < 6) {
//     background(255, 255, 0)
//   } else {
//     background(0, 255, 255)
//   }
// }
