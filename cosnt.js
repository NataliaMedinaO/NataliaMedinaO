class cosnt {

  constructor(x, y, s, v) {
    this.location = createVector(x,y);
    this.speed = createVector(s, v);
    this.acceleration = createVector(random(-0.001, 0.001), random(-0.001, 0.001));
  }

   upd() {
    this.speed.add(this.acceleration);
    this.location.add(this.speed);
  }

   display() {
    fill('#FFFFFF');
    noStroke();
    ellipse(this.location.x, this.location.y, random(10,1),random(1,10));
  }

   move() {
    this.location.add(this.speed);

    if (this.location.x >= 0) {
      this.speed.x = this.speed.x * -1;
    }
    if (this.location.x <= width/3 ) {
      this.speed.x = this.speed.x * -1;
    }

    if (this.location.y >= height) {
      this.speed.y = this.speed.y * -1;
    }
    if (this.location.y <= height/2) {
      this.speed.y = this.speed.y * -1;
    }
  }

   move2() {
    this.location.add(this.speed);

    if (this.location.x >= width / 2) {
      this.speed.x = this.speed.x * -1;
    }
    if (this.location.x <= width) {
      this.speed.x = this.speed.x * -1;
    }
    if (this.location.y >= height / 1.5) {
      this.speed.y = this.speed.y * -1;
    }
    if (this.location.y <= height) {
      this.speed.y = this.speed.y * -1;
    }
  }

   move3() {
    this.location.add(this.speed);

    if (this.location.x >= width / 8) {
      this.speed.x = this.speed.x * -1;
    }
    if (this.location.x <= 0) {
      this.speed.x = this.speed.x * -1;
    }
    if (this.location.y >= height / 2) {
      this.speed.y = this.speed.y * -1;
    }
    if (this.location.y <= 0) {
      this.speed.y = this.speed.y * -1;
    }
  }

   move4() {
    this.location.add(this.speed);

    if (this.location.x >= width/2+500) {
      this.speed.x = this.speed.x * -1;
    }
    if (this.location.x <= width) {
      this.speed.x = this.speed.x * -1;
    }
    if (this.location.y >= height/2) {
      this.speed.y = this.speed.y * -1;
    }
    if (this.location.y <= 0) {
      this.speed.y = this.speed.y * -1;
    }
  }
}