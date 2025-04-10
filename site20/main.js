const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const ROWS = 20;
const COLS = 10;
const SIZE = 30;
const board = Array.from({ length: ROWS }, () => Array(COLS).fill(0));

function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomShape(rows, cols) {
    return Array.from({ length: rows }, () =>
        Array.from({ length: cols }, () => randomValue(0, 1))
    );
}

const randomShapes = [
    generateRandomShape(3, 2),
    generateRandomShape(3, 3),
    generateRandomShape(2, 2)
];

const shapes = [
    [[1, 1, 1, 1]], // I
    [[1, 1], [1, 1]], // O
    [[0, 1, 0], [1, 1, 1]], // T
    [[1, 1, 0], [0, 1, 1]], // Z
    [[0, 1, 1], [1, 1, 0]], // S
    [[1, 0, 0], [1, 1, 1]], // J
    [[0, 0, 1], [1, 1, 1]],  // L
    [[1, 0, 1], [1, 1, 1]], // U
    [[1, 1, 0], [1, 0, 0], [1, 0, 0]], // P
    [[1, 0, 1], [0, 1, 1], [0, 0, 1]], // X
    [[1, 1], [0, 1], [0, 1]], // L2
    [[0, 1, 1], [1, 1, 0], [1, 0, 0]], // N
    [[1, 0], [1, 1], [0, 1]], // F
    [[1, 1, 1], [1, 0, 0]], // L3
    [[1, 1], [1, 0], [1, 0]], // L4
    ...randomShapes // Adding generated random shapes
];

let piece = createPiece();
let gameInterval = setInterval(update, 500);

document.addEventListener("keydown", handleKey);
document.getElementById("leftButton").addEventListener("click", () => movePiece(-1, 0));
document.getElementById("rightButton").addEventListener("click", () => movePiece(1, 0));
document.getElementById("downButton").addEventListener("click", () => movePiece(0, 1));
document.getElementById("rotateButton").addEventListener("click", rotatePiece);

function createPiece() {
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    console.log("New piece created:", shape);
    return { shape, x: 3, y: 0 };
}

function drawBoard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    board.forEach((row, y) => row.forEach((cell, x) => {
        if (cell) drawBlock(x, y, "blue");
    }));
    piece.shape.forEach((row, dy) => row.forEach((cell, dx) => {
        if (cell) drawBlock(piece.x + dx, piece.y + dy, "red");
    }));
}

function drawBlock(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x * SIZE, y * SIZE, SIZE, SIZE);
    ctx.strokeRect(x * SIZE, y * SIZE, SIZE, SIZE);
}

function movePiece(dx, dy) {
    piece.x += dx;
    piece.y += dy;
    if (collision()) {
        piece.x -= dx;
        piece.y -= dy;
        return false;
    }
    drawBoard();
    return true;
}

function rotatePiece() {
    const rotated = piece.shape[0].map((_, i) => piece.shape.map(row => row[i]).reverse());
    const oldShape = piece.shape;
    piece.shape = rotated;

    if (collision()) {
        piece.shape = oldShape;
    } else {
        if (piece.x < 0) piece.x = 0;
        if (piece.x + piece.shape[0].length > COLS) piece.x = COLS - piece.shape[0].length;
        if (piece.y + piece.shape.length > ROWS) piece.y = ROWS - piece.shape.length;
    }

    drawBoard();
}

function collision() {
    return piece.shape.some((row, dy) => row.some((cell, dx) => {
        if (!cell) return false;
        let x = piece.x + dx;
        let y = piece.y + dy;
        return x < 0 || x >= COLS || y >= ROWS || (y >= 0 && board[y][x]);
    }));
}

function mergePiece() {
    piece.shape.forEach((row, dy) => row.forEach((cell, dx) => {
        if (cell) board[piece.y + dy][piece.x + dx] = 1;
    }));
    clearLines();
    piece = createPiece();
    if (collision()) clearInterval(gameInterval);
}

function clearLines() {
    for (let y = ROWS - 1; y >= 0; y--) {
        if (board[y].every(cell => cell)) {
            board.splice(y, 1);
            board.unshift(Array(COLS).fill(0));
        }
    }
}

function update() {
    console.log("Updating...");
    if (Math.random() < 0.1) speedUp(); // Randomly speed up
    if (!movePiece(randomDirection(), 1)) {
        mergePiece();
    }
    drawBoard();
    randomRotation();
}

function speedUp() {
    const newInterval = Math.max(100, 500 - Math.random() * 300); // Speed up within a range
    clearInterval(gameInterval);
    gameInterval = setInterval(update, newInterval);
}

function randomDirection() {
    const directions = [-1, 0, 1]; // Left, Down, Right
    return directions[Math.floor(Math.random() * directions.length)];
}

function randomRotation() {
    if (Math.random() < 0.1) { // Randomly rotate the piece
        rotatePiece();
    }
}

function handleKey(event) {
    if (event.key === "ArrowLeft") movePiece(-1, 0);
    if (event.key === "ArrowRight") movePiece(1, 0);
    if (event.key === "ArrowDown") movePiece(0, 1);
    if (event.key === "ArrowUp") rotatePiece();
}

drawBoard();