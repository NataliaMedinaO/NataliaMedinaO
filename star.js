class star {

  constructor( xposi,  yposi) {
    this.xpos = xposi;
    this.ypos = yposi;
  }
  
   display() {
    fill(255);
    noStroke();
    ellipse(this.xpos-mouseX/20, this.ypos-mouseY/20, random(10), random(10));
  }
}