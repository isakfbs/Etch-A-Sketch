const container = document.querySelector('.grid-container');
let rows = document.getElementsByClassName('gridRow');
let cells = document.getElementsByClassName('cell');
let gridSizeButton = document.getElementById('gridSize-button');

//Drawing functions

let isDrawing = false;

function draw(e, cell) {
  if (!isDrawing) return;
  cell.classList.add('cellColor');
  console.log(e);
}
//Grid maker

function makeGrid(size) {
  //Creates rows
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i++) {
    let cell = document.createElement('div');
    cell.setAttribute('data-cell', `cell${i}`);
    cell.addEventListener('mousemove', function (e) {
      draw(e, this);
    });
    cell.addEventListener('mousedown', () => (isDrawing = true));
    cell.addEventListener('mouseup', () => (isDrawing = false));
    container.appendChild(cell);
  }
}

makeGrid(16);

//Button panel

gridSizeButton.addEventListener('click', function () {
  let size = prompt('Grid Size');
  if (size <= 100) {
    makeGrid(+size);
  } else {
    size = prompt('Invalid Size, Try a number below 100px');
    makeGrid(+size);
  }
});
