const container= document.getElementById("container");

let cells= document.getElementById("TableCells");
let rows= document.getElementById("TableRows");

function initialGrid(){
    makeRows(16);
    makeCollums(16);
};

function makeRows(rowNum){

    for(r = 0;r < rowNum; r++){

    let row = document.createElement("div");
    container.appendChild(row).className("TableRows");
};
};

function makeCollums(celllNum){
for(i = 0; i<rows.length;i++){
    for(c = 0;c < celllNum; c++){
        let cell = document.createElement("div");
        rows[c].appendChild(cell).className("TableCells");
    };
};
};
