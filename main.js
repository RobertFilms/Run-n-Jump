const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.onresize = function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

let gravity = 0.4;
let groundColor = '#993300';
const GROUND = canvas.height / 1.5;

let player = new Player(20, 20, 20, 20)

function drawGround() {
    ctx.fillStyle = groundColor;
    ctx.fillRect(0, GROUND, canvas.width, canvas.height - GROUND);
}

function Update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    player.draw();
    player.update();
    drawGround();
    requestAnimationFrame(Update);
}

Update();