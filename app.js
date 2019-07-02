const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
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

function onMouseDown(event) {
    startPaint();
}

function onMouseUp(event) {
    stopPaint();
}



if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPaint);
    canvas.addEventListener("mouseup", stopPaint);
    canvas.addEventListener("mouseleave", stopPaint);
}