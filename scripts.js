const grid = document.querySelector("#grid");
const gridSize = 512;
let resolution = 16;
let squareWhiteLevel = [];

addSquares(resolution);
activateSquares();

const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", reset);

function activateSquares() {
    let squares = document.querySelectorAll(".square");
    squares.forEach(square => square.addEventListener("mouseover", function () {
        this.style.backgroundColor = randomColor(this.id);
    }));
}

function reset() {
    removeSquares();
    setResolution();
    addSquares(resolution);
    activateSquares();
}

function setResolution() {
    while (true) {
        resolution = parseInt(prompt("Enter number of squares per side (max: 128)"));
        if (typeof(resolution) !== "number" || resolution < 1 || resolution > 128) {
            alert("I need a whole number between 1 and 128");
        } else {
            return;
        }
    }
}

function removeSquares() {
    let queue = document.getElementsByClassName("square");
    while (queue.length > 0) {
        queue[0].parentNode.removeChild(queue[0]);
    }
}

function addSquares(resolution) {
    squareWhiteLevel = [];
    for (let i = 0; i < resolution * resolution; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.id = i;
        square.style.height = gridSize / resolution + "px";
        square.style.width = gridSize / resolution + "px";
        squareWhiteLevel[i] = 100;
        grid.appendChild(square);
    }
}

function randomColor(squareId) {
    if (squareWhiteLevel[squareId] > 0) {
        squareWhiteLevel[squareId] -= 10;
    }
    return `hsla(${rng()}, 100%, ${squareWhiteLevel[squareId]}%, 1)`;
    function rng() {
        return Math.floor(Math.random() * 361);
    }
}