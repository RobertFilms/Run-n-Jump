class Player {
  constructor(x, y, w, h, jumping) {
    this.x = x;
    this.y = y;
    this.yv = 0;
    this.xv = 0;
    this.w = w;
    this.h = h;
    this.color = 'blue';
    this.onGround = false;
    this.dead = false;
    this.jumping = false;
  }

  physics () {
    //gravity in the works
    if (!this.onGround) {
      this.yv += gravity;
    }else {
      /*
      I have a problem with this, It is keeping the jump function from working
      due to it setting the yv to zero. So I was thinking insead of setting the yv
      I set the actual y position due to the charter not moving at all
      */
      this.yv = 0;
    }

    //checks if player is on ground
    if(this.y + this.h >= GROUND){
      this.y = GROUND - this.h;
      this.onGround = true;
      this.jumping = false;
    } else {
      this.onGround = false;
    }

    if (this.y > canvas.height) {
      this.dead = true;
    }

    if (this.yv >= 5) {
      this.yv = 4.5;
    }

    this.y += this.yv;
    this.x += this.xv;

    /*
    if (this.y + this.h > canvas.h) {
      this.y = canvas.h - this.h;
      this.onGround = true;
    }
    */
    //console.log(this.yv);
  }

  jump () {
    if (this.jumping == true) {
      this.y = 485;
      //console.log('jump')
    }
  }

  draw () {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }

  update () {
    this.physics();
  }
}