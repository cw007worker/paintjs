const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");

ctx.strokeStyle = "black";
ctx.linewidth = 2.5;
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

}

function changeColor(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;

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