const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const button = document.getElementById("jsMode");

ctx.strokeStyle = "black";
ctx.fillStyle = "black";
ctx.lineWidth = 2.5;
let paint = false;
let filling = false;
canvas.width = 500;
canvas.height = 500;



function startPaint() {
    paint = true;
}

function stopPaint() {
    paint = false;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!paint) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
    if (range) {
        range.addEventListener("input", handleRange);
    }
}

function changeColor(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function handleRange(event) {
    const size = event.target.value;
    ctx.lineWidth = size;
}

function handleClick() {
    if (filling == true) {
        filling = false;
        button.innerText = "FILL";
    } else {
        filling = true;
        button.innerText = "PAINT"
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPaint);
    canvas.addEventListener("mouseup", stopPaint);
    canvas.addEventListener("mouseleave", stopPaint);
}

Array.from(colors).forEach(color => {
    color.addEventListener("click", changeColor);

});
if (button) {
    button.addEventListener("click", handleClick);
}