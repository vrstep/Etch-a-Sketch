const gridContainer = document.querySelector("#grid-container");
const buttonInputGridSize = document.querySelector("#btn-prompt-grid-size");

// To find width formula grid 18x18, multiply grid widthxheight * grid size; e.g 18x24= 432px

const gridSize = promptGridSize();

function createGrid() {
    for (let i = 0; i < gridSize; i++) {
        const grid = document.createElement("div");
        grid.className = "grid";
        gridContainer.append(grid);
        // for (let j = 0; j < 15; j++) {
        //     const grid = document.createElement("div");
        //     grid.className = "grid";
        //     gridContainer.append(grid);
        // }
    }
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