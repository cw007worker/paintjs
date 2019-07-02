const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");

ctx.strokeStyle = "black";
ctx.lineWidth = 2.5;
let paint = false;
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
}

function handleRange(event) {

    const size = event.target.value;
    ctx.lineWidth = size;

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