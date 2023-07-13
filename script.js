const bird = document.getElementById('bird');
const obstacle = document.getElementById('obstacle');
const over = document.getElementById   ('over');

let birdVelocity = { x: 0, y: 0 };
let birdPosition = 0;

// Moving Bird
document.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    birdVelocity = { x: 0, y: -1 };
  }
});

document.addEventListener('keyup', (e) => {
  if (e.code === 'Space') {
    birdVelocity = { x: 0, y: 1 };
  }
});

const checkCollision = (bird, obstacle) => {
  const birdRect = bird.getBoundingClientRect();
  const obstacleRect = obstacle.getBoundingClientRect();

  return (
    birdRect.top < obstacleRect.bottom &&
    birdRect.bottom > obstacleRect.top &&
    birdRect.right > obstacleRect.left &&
    birdRect.left < obstacleRect.right
  );
  
};

const updateVelocity = () => {
  birdPosition += birdVelocity.y;
  bird.style.transform = `translateY(${birdPosition}px)`;

  const obstacles = document.querySelectorAll('.obstacleUP, .obstacleDown');
  obstacles.forEach((obstacle) => {

    if (checkCollision(bird, obstacle, over)) {
      // Game over logic
      bird.style.display="none"
      // obstacle.style.display="none" 
      over.style.display="block" 
    }
  });

  setTimeout(updateVelocity, 0.2 );
};
updateVelocity();

let a = 150;
let b = 320;

setInterval(() => {
  let obsUP = document.createElement('div');
  let obsDown = document.createElement('div');

  obsUP.style.height = `${Math.floor(Math.random() * (b - a + 1) + a)}px`;
  obsUP.classList.add('obstacleUP');
  obstacle.appendChild(obsUP);

  obsDown.style.height = `${Math.floor(Math.random() * (b - a + 1) + a)}px`;
  obsDown.classList.add('obstacleDown');
  obstacle.appendChild(obsDown);

  setTimeout(() => {
    obsUP.remove();
    obsDown.remove();
  }, 15000);
}, 3000);

