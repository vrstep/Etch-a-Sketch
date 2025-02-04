const gridContainer = document.querySelector("#grid-container");
const buttonPromptGridSize = document.querySelector("#btn-prompt-grid-size");
const buttonRandomColor = document.querySelector("#btn-random-color");

buttonPromptGridSize.textContent = "Change grid size";
buttonRandomColor.textContent = "Random";

let gridSize = 16;
let gridContainerSize = getGridContainerSize(gridSize);

buttonPromptGridSize.addEventListener("click", () => {
    gridContainer.querySelectorAll("div").forEach(grid => {
    grid.remove();
});
    createGrid()
});

buttonRandomColor.addEventListener("click", () => {
    gridContainer.addEventListener("mouseover", () => {
        randomizePaintGrid();
    });
});

const gameStart = () => {
    for (let i = 0; i < (gridSize * gridSize); i++) {
        const grid = document.createElement("div");
        grid.className = "grid";
        grid.style.width = `calc(100% / ${gridSize})`;
        gridContainer.append(grid);
    }
}

function createGrid() {
    gridSize = promptGridSize();
    for (let i = 0; i < (gridSize * gridSize); i++) {
        const grid = document.createElement("div");
        grid.className = "grid";
        grid.style.width = `calc(100% / ${gridSize})`;
        gridContainer.append(grid);
    }
}

function getGridContainerSize(gridSize) {
    let gridContainerSize = gridSize * 24;
    return gridContainerSize.toString();
}

function promptGridSize() {
    const gridSize = prompt("What size of grid you want?", "");
    if (gridSize > 100) {
        alert("Calm down, bro! Only less than 100 grids");
    } else return gridSize;
}

function paintGrid() {
    for (let grid of gridContainer.querySelectorAll("div")) {
        grid.addEventListener("mouseover", (e) => {
            e.target.classList.add("painted");
        });
    }
}

function randomizePaintGrid() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    for (let grid of gridContainer.querySelectorAll("div")) {
        grid.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        });
    }
}

gridContainer.addEventListener("mouseover", () => {
    paintGrid();
});

randomizePaintGrid();
gameStart();