class Fly {
  constructor(xv) {
    this.spawnPositions = [GROUND - 50, GROUND - 90];
    this.x = canvas.width;
    this.y = this.spawnPositions[RandomInt(0, this.spawnPositions.length - 1)];
    this.w = 15;
    this.h = 15;
    this.xv = -7;
  }

  physics () {
    this.x += this.xv;
  }

  draw () {
    ctx.fillStyle = 'black';
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }

  update () {
    if(Player.dead == true){
      this.xv = 0;
    }

    if(this.xv <= -7){
      console.log('zero xv fly');
    }
    
    this.physics();
  }
}