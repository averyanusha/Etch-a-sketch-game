const container = document.querySelector(".grid-container");
const input = document.getElementById("human-grid");


// container.appendChild(newDiv);


function createGrid (tiles) {
  container.innerText = '';
  for (let i = 0; i < tiles; i ++) {
    const gridRows = document.createElement("div");
    for (let i = 0; i < tiles; i ++) {
      const newDiv = document.createElement("div");
      gridRows.appendChild(newDiv);
      gridRows.classList.add("grid-row");
      newDiv.classList.add("grid-element");
      newDiv.addEventListener("mouseover", () => {
        newDiv.style.background = 'rgb(' + randomColor() + ',' + randomColor() + ',' + randomColor() + ')';
      })
    };
    container.appendChild(gridRows);
  }
}

function requestedGrid (){
    let humanGrid;
    humanGrid = input.value;
    if (!isNaN(humanGrid) && humanGrid >= 16 && humanGrid < 100)
    {
      createGrid(humanGrid);
    }
    else {
      alert("Error! Enter the grid between 16 and 100 tiles!");
    }
}

function randomColor()
{
  let random = (Math.floor(Math.random() * 10) * 0.255) * 100;
  return (random);
}
// function changeGrid (){
//   createGrid(0);
// }
createGrid(16);

const colorButton = document.querySelector(".color-button");
colorButton.addEventListener("click", () => {
  console.log(randomColor());
})

const button = document.querySelector(".grid-button");
button.addEventListener("click", () => {
  requestedGrid();
})

input.addEventListener("keydown", (event) => {
  if(event.key === "Enter")
    requestedGrid();
})