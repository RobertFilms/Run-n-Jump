class Cactus {
  constructor() {
    this.spawnPos = GROUND - 64;
    this.x = canvas.width;
    this.y = this.spawnPos;
    this.w = 45;
    this.h = 65;
    this.xv = 0;
    this.sprite = new Image();
    this.sprite.src = 'public/sprites/cactus.png';
    this.dead = false;
  }

  cacSpeedinc() {
    if (speedHelper >= 500) {
      speedHelper = 0;
      scrollSpeed++;
    }
  }

  physics() {
    this.xv = -scrollSpeed;
    this.x += this.xv; // * dt;
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