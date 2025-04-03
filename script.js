let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

ctx.strokeStyle = "red";
ctx.arc(150, 150, 100, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath()
ctx.fillStyle = "red";
ctx.arc(450, 150, 100, 0, 2*Math.PI);
ctx.stroke();
ctx.fill();

ctx.strokeStyle = "black";
ctx.beginPath()
ctx.arc(300, 270, 100, 0, 1*Math.PI);
ctx.stroke();
