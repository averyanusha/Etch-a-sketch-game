const container = document.querySelector(".grid-container");
const input = document.getElementById("human-grid");
const clear = document.querySelector (".clear-button");


function createGrid (tiles) {
  container.innerText = '';
  for (let i = 0; i < tiles; i ++) {
    const gridRows = document.createElement("div");
    for (let i = 0; i < tiles; i ++) {
      const newDiv = document.createElement("div");
      gridRows.appendChild(newDiv);
      gridRows.classList.add("grid-row");
      newDiv.classList.add("grid-element");
      mouseOver(newDiv);
    };
    container.appendChild(gridRows);
  }
}

function requestedGrid (){
    let humanGrid;
    humanGrid = input.value;
    /* Error check for input text
    if (!isNaN(humanGrid) && humanGrid >= 16 && humanGrid <= 100)
    {
      createGrid(humanGrid);
    }
    else {
      alert("Error! Enter the grid between 16 and 100 tiles!");
    }
    */
   createGrid(humanGrid);
}

function mouseOver (element) {
  element.addEventListener("mouseover", () => {
    element.style.background = 'rgb(' + randomColor() + ',' + randomColor() + ',' + randomColor() + ')';
  })
}

function randomColor()
{
  let random = (Math.floor(Math.random() * 10) * 0.255) * 100;
  return (random);
}


createGrid(16);

const button = document.querySelector(".grid-button");
button.addEventListener("click", () => {
  requestedGrid();
})

input.addEventListener("click", () => {
    requestedGrid();
})

clear.addEventListener("click", () => {
  container.innerText = '';
  createGrid(16);
  input.value = 16;
})