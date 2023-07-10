// 캔버스 셋팅
let canvas;
let ctx;
canvas = document.createElement('canvas');
ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 700;
document.body.appendChild(canvas);

let backgroundImage, spaceshipImage, bulletImage, enemyImage, gameoverImage;

// 우주선 좌표(앞으로 계속 바뀔거라서 따로 뺌)
let spaceshipX = canvas.width / 2 - 32;
let spaceshipY = canvas.height - 64;

// 이미지를 가져오는 함수
function loadImage() {
  backgroundImage = new Image();
  backgroundImage.src = 'images/space-background.gif';
  spaceshipImage = new Image();
  spaceshipImage.src = 'images/rocket-icon.png';
  bulletImage = new Image();
  bulletImage.src = 'images/bullet.png';
  enemyImage = new Image();
  enemyImage.src = 'images/enemy.png';
  gameoverImage = new Image();
  gameoverImage.src = 'images/game-over.png';
}

// 이미지를 보여주는 함수
function render() {
  // drawImage(image, dx, dy, dWidth, dHeight)
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(spaceshipImage, spaceshipX, spaceshipY);
}

// 함수 호출
function main() {
  render();
  // console.log('animation calls main function');
  // 애니메이션처럼 함수를 계속 호출해줌
  requestAnimationFrame(main);
}
loadImage();
main();
