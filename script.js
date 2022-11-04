const container = document.querySelector('.container');
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");


function makeGrid(size){
    //Creates rows
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for (let i = 0; i < size * size; i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = "gridRow";
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