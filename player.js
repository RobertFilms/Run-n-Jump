class Player {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.yv = 0;
    this.xv = 0;
    this.w = w;
    this.h = h;
    this.onGround = false;
  }

  physics () {
    if (!this.onGround) {
      this.yv += gravity;
    }else {
      this.yv = 0;
    }
    this.y += this.yv;
    this.x += this.xv;

    if (this.y > canvas.height) {
      this.y = 0;
      this.yv = 0;
    }

    /*
    if (this.y + this.h > canvas.h) {
      this.y = canvas.h - this.h;
      this.onGround = true;
    }
    */
    //console.log(this.yv);
  }

  draw () {
    ctx.fillStyle = 'blue';
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }

  update () {
    this.physics();
  }
}