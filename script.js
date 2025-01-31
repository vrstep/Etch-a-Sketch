const gridContainer = document.querySelector("#grid-container");

function createGrid() {
    for (let i = 0; i < 16; i++) {
        const grid = document.createElement("div");
        grid.className = "grid";
        gridContainer.append(grid);
        for (let j = 0; j < 15; j++) {
            const grid = document.createElement("div");
            grid.className = "grid";
            gridContainer.append(grid);
        }
    }
}

createGrid();