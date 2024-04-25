class FlySquare {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  draw () {
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}