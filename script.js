const container = document.querySelector('.grid-container');
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

let isDrawing = false;


function draw(e,cell){
    if(!isDrawing) return;
    cell.classList.add("cellColor");
    console.log(e);
};

function makeGrid(size){
    //Creates rows
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++) {
        let cell = document.createElement('div');
        cell.setAttribute('data-cell',`cell${i}`);
        cell.addEventListener('mousemove', function(e){draw(e,this)});
        cell.addEventListener('mousedown', () => isDrawing = true);
        cell.addEventListener('mouseup', () => isDrawing = false);
        container.appendChild(cell);
    }
}

// function makeColumns(cellNum){
//     for(let i = 0; i < rows.length; i++){
//         for(j = 0; j < cellNum; j++){
//             let newCell = document.createElement("div");
//             rows[j].appendChild(newCell).className = "cell";
//         }
//     }
// }

makeGrid(16);
// makeColumns(5);