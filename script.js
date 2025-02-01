const gridContainer = document.querySelector("#grid-container");
const buttonPromptGridSize = document.querySelector("#btn-prompt-grid-size");

buttonPromptGridSize.textContent = "Change grid size";

let gridSize = 16;
let gridContainerSize = getGridContainerSize(gridSize);

buttonPromptGridSize.addEventListener("click", () => {
    gridContainer.querySelectorAll("div").forEach(grid => {
    console.log("removed");
    grid.remove();
});
    createGrid()
});

function createGrid() {
    gridSize = promptGridSize();
    gridContainerSize = getGridContainerSize(gridSize);
    for (let i = 0; i < (gridSize * gridSize); i++) {
        const grid = document.createElement("div");
        grid.className = "grid";
        gridContainer.style.width = `${gridContainerSize}px`;
        gridContainer.append(grid);
    }
}

function getGridContainerSize(gridSize) {
    let gridContainerSize = gridSize * 24;
    return gridContainerSize.toString();
}

function promptGridSize() {
    const gridSize = prompt("What size of grid you want?", "");
    return gridSize;
}

function hoverGrid() {
    for (let grid of gridContainer.querySelectorAll("div")) {
        grid.addEventListener("mouseover", (e) => {
            e.target.classList.add("hover-color");
        });
    }
}

gridContainer.addEventListener("mouseover", () => {
    hoverGrid();
});