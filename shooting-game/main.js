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

let keysDown = {};
// 키보드 눌렀을때 함수
function setupKeyboardListner() {
  // 눌렀을때 keysDown에 계속 추가
  document.addEventListener('keydown', function (event) {
    keysDown[event.keyCode] = true;
    // console.log('키다운 객체에 들어간 값은?', keysDown);
  });
  // 때면 keysDown 삭제
  document.addEventListener('keyup', function (event) {
    delete keysDown[event.keyCode];
    // console.log('버튼클릭후', keysDown);
  });
}

function update() {
  if (39 in keysDown) {
    //right:39
    spaceshipX += 5; //우주선의 속도
  } else if (37 in keysDown) {
    //left:37
    spaceshipX -= 5;
  }
  if (spaceshipX <= 0) {
    spaceshipX = 0;
  }
  if (spaceshipX >= canvas.width - 64) {
    spaceshipX = canvas.width - 64;
  }
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
  update();
}
loadImage();
setupKeyboardListner();
main();
