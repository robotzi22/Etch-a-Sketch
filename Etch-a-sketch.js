const container = document.getElementById("container")
const userPressButton =document.getElementById("button")



colouringMehods.array.forEach(colouringMehods => colouringMehods.addEventlisener('click',(e) => {

    userPressButton = e.target.id
    makeGrid();


}));



function makeGrid(col,row){

    container.style.setProperty("colSyle",col);
    container.style.setProperty("rowStyle",row)

    for(a = 0; a<(col*row),a++;){
        
        let cell = document.createElement("div");
        cell.innerText = c +1;
        container.appendChild(cell).className = "weGrind";
    }
makeGrid(16,16);
}

function checkError(){
    if( makeGrid()!==error){
        let message="it works";
        console.log(message);
    };
};
checkError();