const gridContainer = document.querySelector("#grid-container");
const buttonPromptGridSize = document.querySelector("#btn-prompt-grid-size");

const gridSize = promptGridSize();
const gridContainerSize = getGridContainerSize(gridSize);

function createGrid() {
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

createGrid();

gridContainer.addEventListener("mouseover", () => {
    hoverGrid();
});