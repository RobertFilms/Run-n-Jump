class Player {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.yv = 0;
    this.xv = 0;
    this.w = w;
    this.h = h;
    this.color = 'blue';
    this.onGround = false;
    this.dead = false;
  }

  physics () {
    //gravity in the works
    if (!this.onGround) {
      this.yv += gravity;
    }else {
      this.yv = 0;
    }
    this.y += this.yv;
    this.x += this.xv;

    //checks if player is on ground
    if(this.y + this.h >= GROUND){
      this.y = GROUND - this.h;
      this.onGround = true;
    } else {
      this.onGround = false;
    }

    if (this.y > canvas.height) {
      this.dead = true;
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
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }

  update () {
    this.physics();
  }
}