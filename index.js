const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

let timerId = 0;
let currentColor = colors[0];

const refs = {
  body: document.body,
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomColor = () => {
  let color = currentColor;

  while (color === currentColor) {
    const index = randomIntegerFromInterval(0, colors.length - 1);
    color = colors[index];
  }

  currentColor = color;
  console.log("color:", color);
  return color;
};

const disableStartBtn = () => {
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
};

const disableStopBtn = () => {
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
};

const onStartClick = () => {
  disableStartBtn();
  timerId = setInterval(changeBodyColor, 1000);
};

const onStopClick = () => {
  disableStopBtn();
  clearInterval(timerId);
};

const changeBodyColor = () => {
  refs.body.style.background = getRandomColor();
};

disableStopBtn();

refs.startBtn.addEventListener("click", onStartClick);
refs.stopBtn.addEventListener("click", onStopClick);
