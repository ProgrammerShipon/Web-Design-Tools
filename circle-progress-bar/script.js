let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressValue = 0;
let progressEndValue = 93;
let spreed = 50;

let progress = setInterval(() => {
  progressValue++;

  valueContainer.textContent = `${progressValue}%`;
  progressBar.style.background = `conic-gradient(
      #0073ff ${progressValue * 3.6}deg,
      #aadcff ${progressValue * 3.6}deg
   )`;

  if (progressValue == progressEndValue) {
    clearInterval(progress);
  }
}, spreed);
