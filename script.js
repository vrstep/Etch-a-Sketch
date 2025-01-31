const mainContainer = document.querySelector("#main-container");

function createGrid() {
    const grid = document.createElement("div");
    grid.className = "grid";
    mainContainer.append(grid);
}

createGrid();