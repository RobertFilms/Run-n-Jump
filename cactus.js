class Cactus {
  constructor(x, y, w, h) {
    this.spawnPos = GROUND - 20;
    this.x = this.spawnPos;
    this.y = this.spawnPositions[RandomInt(0, this.spawnPos.length - 1)];;
    this.w = 8;
    this.h = 25;
    this.xv = 7;
  }

  physics () {
    this.x += -this.xv;
  }

  draw () {
    ctx.fillStyle = 'green';
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}