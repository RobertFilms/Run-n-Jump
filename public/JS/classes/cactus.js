class Cactus {
  constructor() {
    this.spawnPos = GROUND - 78;
    this.x = canvas.width;
    this.y = this.spawnPos;
    this.w = 50;
    this.h = 80;
    this.xv = 0;
    this.sprite = new Image();
    this.sprite.src = 'sprites/cactus.png';
    this.dead = false;
  }

  cacSpeedinc() {
    if (speedHelper >= 500 && scrollSpeed <= maxSpeed) {
      speedHelper = 0;
      scrollSpeed++;
    }
  }

  physics() {
    this.xv = -scrollSpeed * dt;
    this.x += this.xv * dt;
  }

  draw() {
    //ctx.fillStyle = 'green';
    //ctx.fillRect(this.x, this.y, this.w, this.h);
    ctx.drawImage(this.sprite, this.x, this.y, this.w, this.h);
  }

  update() {
    this.physics();
    this.cacSpeedinc();
  }

}