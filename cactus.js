class Cactus {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  draw () {
    ctx.fillStyle = 'green';
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}