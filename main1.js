const container = document.getElementById("container");
const gridBttn = document.getElementById("gridBttn");



gridBttn.addEventListener('click', ()=> {
    let gridSize = prompt("How large do yo want to make the grid?(please input the number of cells you wish to make)");
    while (gridSize > 100 || gridSize < 2 || isNaN(gridSize)){
        if(isNaN(gridSize)){
            gridSize = prompt("Only numbers are supported, please pick a size between 2 and 100!")
        } 
        else if(gridSize=== null){
            break
        } 
}
    makeGrid(gridSize)
});

function makeGrid(gridSize) {
  container.style.setProperty('--grid-rows', gridSize);
  container.style.setProperty('--grid-cols', gridSize);
  for (c = 0; c < (gridSize * gridSize); c++) {
    let cell = document.createElement("div");
    console.log(cell);
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener("mouseover",()=>{
        cell.style.backgroundColor = "black";
        console.log(cell)
    })
  };
};

function resetGrid(input){


}

makeGrid(16, 16);



