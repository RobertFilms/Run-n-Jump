/*
----- TO DO LIST -----
1. Get things to spawn
2. get player y movement going (jump)
3. 
*/

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.onresize = function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

let gravity = 1.5;
let groundColor = '#993300';
const GROUND = canvas.height / 1.5;
let player = new Player(125, 425, 25, 25);

let flies = [];
let cacti = [];

function drawGround() {
    ctx.fillStyle = groundColor;
    ctx.fillRect(0, GROUND, canvas.width, canvas.height - GROUND);
}

document.addEventListener('keydown', event => {
  if (event.key == ' ') {
    player.jump();
    console.log(player.jumping);
  }
})

function RandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function SpawnFly(){
  if(RandomInt(1, 10) > 7){
    flies.push(new Fly());
  }
}

function SpawnCactus(){
  if(RandomInt(1, 10) > 5){
    cacti.push(new Cactus());
  }
}

function showDeathScreen(){
  document.getElementById('deathScreen').style.display = 'block';
}


function Update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //console.log(player.yv);
    player.draw();
    player.update();
    drawGround();
    for(f in flies){
        let fly = flies[f];
        fly.draw();
        fly.update();
        if(collision(player, fly)){
          player.dead = true;
        }
    }
    for(c in cacti){
        let cactus = cacti[c];
        cactus.draw();
        cactus.update();
        if(collision(player, cactus)){
          player.dead = true;
        }
    }
    if(player.dead){
      showDeathScreen();
    }
    requestAnimationFrame(Update);
}
Update();
setInterval(SpawnCactus, 1000);
setInterval(SpawnFly, 2000);