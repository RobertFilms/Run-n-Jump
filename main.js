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

let gravity = .5;
let groundColor = '#993300';
const GROUND = canvas.height / 1.5;
let player = new Player(125, 425, 25, 25);

function drawGround() {
    ctx.fillStyle = groundColor;
    ctx.fillRect(0, GROUND, canvas.width, canvas.height - GROUND);
}

document.addEventListener('keydown', event => {
  if (event.code == 'Space') {
    player.jumping = true;
    //console.log('space pressed')
  }
})
document.addEventListener('keyup', event => {
  if (event.code == 'Space') {
    player.jumping = false;
  }
})

function Update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    player.jump();
    player.draw();
    player.update();
    drawGround();
    requestAnimationFrame(Update);
}
Update();