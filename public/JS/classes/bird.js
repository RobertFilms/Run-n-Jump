
//var speed;
class Bird {
  constructor(xv) {

    //Setting all the birds vars
    this.spawnPositions = [GROUND - 90, GROUND - 130];
    this.x = canvas.width;
    this.y = this.spawnPositions[randomInt(0, this.spawnPositions.length - 1)];
    this.w = 40;
    this.h = 30;
    this.xv = 0;
    this.jitterIntensity = 1;
    this.jitterTick = 0;
    this.sprite = new Image();
    this.sprite.src = 'sprites/bird.png';
    this.dead = false;
    //speed = this.xv;
  }


  //bird SPEED INC
  birdSpeedinc() {
    //If the score is 300
    if (speedHelper >= 500 && scrollSpeed <= maxSpeed) {
      speedHelper = 0;
      scrollSpeed++;
    }
  }

  //PHYSICS
  physics() {

    this.xv = -scrollSpeed * dt;
    //Makes the bird go to the left
    this.x += this.xv * dt;
  }

  //DRAW
  draw() {

    //Sprite sheet
    const frameWidth = this.sprite.width / 3;
    const frameHeight = this.sprite.height / 3;
    const totalFrames = 9;
    const fps = 10;
    const frameDuration = 1000 / fps;
    const currentFrame = Math.floor(Date.now() / frameDuration) % totalFrames;
    const sx = (currentFrame % 3) * frameWidth;
    const sy = Math.floor(currentFrame / 3) * frameHeight;

    ctx.drawImage(this.sprite, sx, sy, frameWidth, frameHeight, this.x, this.y, this.w, this.h);
  }

  //JITTER
  jitter() {

    this.jitterTick++;

    //Make the bird jitter around
    this.x += (Math.sin(this.jitterTick * this.jitterIntensity));
    this.y += (Math.sin(this.jitterTick * this.jitterIntensity));
  }

  //UPDATE
  update() {

    //Run the physics function
    this.physics();
    this.jitter();
    this.birdSpeedinc()
  }
}