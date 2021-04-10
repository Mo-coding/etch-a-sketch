const gridcontainer = document.querySelector("#grid-container");

var size = 16;

function createGrid (){
    for (let i=0; i < size*size; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList = "grid-element";
        gridcontainer.appendChild(newDiv);
        
        /*Using Template Literals and Expression*/
        gridcontainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`
        /*Alternative: Using normal ticks and variable, more effort */
        /*gridcontainer.style.gridTemplateColumns = 'repeat('+size+', 1fr)'*/
    }
}
createGrid();

function resetGrid (parent){
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
        hoverDiv.style.backgroundColor = "";
    }


function changeColour(item){
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    item.target.style = `background-color: rgb(${randomR},${randomG},${randomB})`;
}    

const hoverDiv = document.querySelector(".grid");
hoverDiv.addEventListener("mouseover", changeColour);

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function changeSize () {
    size = prompt("Plese enter a size 1-100", "16");
    if (size <1 || size > 100){
        alert("Number out of allowed range!");
        changeSize();
    } else {
        resetGrid(gridcontainer);
        createGrid();
    }
});

