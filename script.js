let bird = document.getElementById('bird');
let birdVelocity = { x: 0, y: 0 };
let birdPosition = 0;


//Moving Bird 
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

const updateVelocity = () => {
  birdPosition += birdVelocity.y;
  bird.style.transform = `translateY(${birdPosition}px)`;
// window.requestAnimationFrame(updateVelocity);
   setTimeout(updateVelocity, 1); 
};
updateVelocity();



//logic for obstacles
let a = 150;
let b = 350;

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
    obsUP.classList.add('none');
    obsDown.classList.add('none');
  }, 20000);
}, 2000);


