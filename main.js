const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.onresize = function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

let gravity = 0.4;

let player = new Player(20, 20, 20, 20)

function Update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    player.draw();
    player.update();
    requestAnimationFrame(Update);
}

Update();