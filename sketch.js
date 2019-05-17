var cos1 = [];
var cos2 = [];
var cos3 = [];
var cos4 = [];
var starList = [];
var starList2 = [];
var img, img1, img2, img3, img4, img5;

function setup() {
  rectMode(CENTER);
  createCanvas(windowWidth, windowHeight);
  
   img=loadImage('assets/estrella.png');
	img1=loadImage('assets/universe1.png');	
	img3=loadImage('assets/universe3.png');	
	img4=loadImage('assets/universe4.png');	
	img5=loadImage('assets/titulo2.PNG');	

  //BOTON 1
  button1 = createButton('Open Processing');
  button1.position(width/2 - 350, height/2+50);
  button1.size(200, 50);
  button1.mousePressed(changeBG);

  //BOTON
  button2 = createButton('itch.io');
  button2.position(width/2 - 100, height/2+50);
  button2.size(200, 50);
  button2.mousePressed(changeBG2);

  //BOTON 3
  button3 = createButton('gitHub');
  button3.position(width/2 + 150, height/2+50);
  button3.size(200, 50);
  button3.mousePressed(changeBG3);

  //Estrellas

  for (let i = 0; i <= 6; i++) {
    var cosTemp = new cosnt(width / 3, height / 2, random(-0.6, 0.6), random(-0.6, 0.6));
    cos1.push(cosTemp);
  }
  for (let j = 0; j <= 6; j++) {
    cos2.push(new cosnt(width / 1.5, height, random(-0.6, 0.6), random(-0.6, 0.6)));
  }
  for (let k = 0; k <= 6; k++) {
    var cosTemp = new cosnt(0, 0, random(-0.6, 0.6), random(-0.6, 0.6));
    cos3.push(cosTemp);
  }
  for (let l = 0; l <= 4; l++) {
    var cosTemp = new cosnt(width, height / 2, random(-0.6, 0.6), random(-0.6, 0.6));
    cos4.push(cosTemp);
  }
  for (let a = 0; a < 50; a++) {
    starList.push(new star(random(0, width), random(0, height)));
  }
}

function draw() {
  background(0);
  noStroke();
image(img5, width/6, height/32, width/1.5, height/2);
	image(img1, 0+mouseX/40, 0+mouseY/40, 1920, 1080);
	image(img3, width/4+mouseX-200/20, height/2-200+mouseY/20, 1920-mouseX/20, 1080);
	image(img4, width/4-mouseX-800/20, height/4-200-mouseY/20, 1280, 720);
	
  
  //ESTRELLAS RANDOM
  for (let a = 0; a < starList.length; a++) {
    starList[a].display();
  }
  for (let b = 0; b < starList2.lenght; b++) {
    starList[b].display2();
  }

  //CONSTELACION 1
  for (let m = 0; m < cos1.length; m++) {
    cosTemp = cos1[m];
    cosTemp.display();
    cosTemp.upd();
    cosTemp.move();

    for (let i = 0; i < cos1.length; i++) {
      fill(0);
      stroke(100, 200);
      var lon = dist(cos1[m].location.x, cos1[m].location.y, cos1[i].location.x, cos1[i].location.y);
      if (lon < 300) {
        line(cos1[m].location.x, cos1[m].location.y, cos1[i].location.x, cos1[i].location.y);
      } else {
        noStroke();
      }
    }
  }

  //CONSTELACION 2

  for (let n = 0; n < cos2.length; n++) {
    cosTemp = cos2[n];
    cosTemp.display();
    cosTemp.upd();
    cosTemp.move2();

    for (let j = 0; j < cos2.length; j++) {
      fill(0);
      stroke(100, 200);
      var lon = dist(cos2[n].location.x, cos2[n].location.y, cos2[j].location.x, cos2[j].location.y);
      if (lon < 300) {
        line(cos2[n].location.x, cos2[n].location.y, cos2[j].location.x, cos2[j].location.y);
      } else {
        noStroke();
      }
    }
  }
  //CONSTELACION 3
  for (let o = 0; o < cos3.length; o++) {
    cosTemp = cos3[o];
    cosTemp.display();
    cosTemp.upd();
    cosTemp.move3();

    for (let k = 0; k < cos3.length; k++) {
      fill(0);
      stroke(100, 200);
      var lon = dist(cos3[o].location.x, cos3[o].location.y, cos3[k].location.x, cos3[k].location.y);
      if (lon < 200) {
        line(cos3[o].location.x, cos3[o].location.y, cos3[k].location.x, cos3[k].location.y);
      } else {
        noStroke();
      }
    }
  }

  //CONSTELACION 4
  for (let p = 0; p < cos4.length; p++) {
    cosTemp = cos4[p];
    cosTemp.display();
    cosTemp.upd();
    cosTemp.move4();

    for (let l = 0; l < cos4.length; l++) {
      fill(0);
      stroke(100, 200);
      var lon = dist(cos4[p].location.x, cos4[p].location.y, cos4[l].location.x, cos4[l].location.y);
      if (lon < 300) {
        line(cos4[p].location.x, cos4[p].location.y, cos4[l].location.x, cos4[l].location.y);
      } else {
        noStroke();
      }
    }
  }
}

function changeBG() {
  window.open('https://www.openprocessing.org/user/120972/#sketches');
}
function changeBG2() {
  window.open('https://natalia2027.itch.io/');
}
function changeBG3() {
  window.open('https://github.com/NataliaMedinaO');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  
  button1.position(width/2 - 350, height/2+50);
  button2.position(width/2 - 100, height/2+50);
  button3.position(width/2 +150,height/2+50);
  
}