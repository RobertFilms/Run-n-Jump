
var speed;
class Fly {
  constructor(xv) {
    
    //Setting all the flies vars
    this.spawnPositions = [GROUND - 50, GROUND - 90];
    this.x = canvas.width;
    this.y = this.spawnPositions[RandomInt(0, this.spawnPositions.length - 1)];
    this.w = 15;
    this.h = 15;
    this.xv = -15; 
    this.jitterIntensity = 1;
    this.jitterTick = 0;
    speed = this.xv;
  }

  //PHYSICS
  physics () {

    //Makes the fly go to the left
    this.x += this.xv;

    //Up the flies speed every 500 score
    function flySpeedinc() {
      //If the score is 500
      if (speedHelper >= 500) {
        speedHelper = 0;
        speed--;
      }
    }
    //Run the function
    flySpeedinc();
  }

  //DRAW
  draw () {

    //Fly color black
    ctx.fillStyle = 'black';
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }

  //JITTER
  jitter(){

    this.jitterTick++;

    //Make the fly jitter around
    this.x += (Math.sin(this.jitterTick * this.jitterIntensity));
    this.y += (Math.sin(this.jitterTick * this.jitterIntensity));
  }

  //UPDATE
  update () {
    
    //Run the physics function
    this.physics();
    this.jitter();
  }
}