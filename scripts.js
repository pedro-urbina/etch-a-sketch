const grid = document.querySelector("#grid");
const gridSize = 512;
let resolution = 16;

addSquares(resolution);
activateSquares();

const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", reset);

function activateSquares() {
    let squares = document.querySelectorAll(".square");
    squares.forEach(square => square.addEventListener("mouseover", function () {
        this.style.backgroundColor = randomColor();
    }));    
}

function reset() {
    removeSquares();
    resolution = prompt("Enter resolution (# of squares per side)");
    addSquares(resolution);
    squareColor = randomColor();
    activateSquares();
}

function removeSquares() {
    let queue = document.getElementsByClassName("square");
    while (queue.length > 0) {
        queue[0].parentNode.removeChild(queue[0]);
    }
}

function addSquares(resolution) {
    for (let i = 0; i < resolution * resolution; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.height = gridSize / resolution + "px";
        square.style.width = gridSize / resolution + "px";
        grid.appendChild(square);
    }
}

function randomColor() {
    return `rgba(${rng()}, ${rng()}, ${rng()}, 1)`;
    function rng() {
        return Math.floor(Math.random() * 256);
    }
}