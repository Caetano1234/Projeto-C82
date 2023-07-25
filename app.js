var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d");

var cor;
var largura;
var raio;
var mouseEstado = "none";

function meuMouseDown(){
    mouseEstado = "down";
    cor = document.getElementById("inputCor").value;
    largura = document.getElementById("inputLargura").value;
    raio = document.getElementById("inputRaio").value;
}

function meuMouseUp(){
    mouseEstado = "up";
}

function meuMouseLeave(){
    mouseEstado = "leave";
}

function meuMouseMove(e){
    var mouseX = e.clientX - canvas.offsetLeft;
    var mouseY = e.clientY - canvas.offsetTop;

    if(mouseEstado == "down"){
        ctx.beginPath();
        ctx.strokeStyle = cor;
        ctx.lineWidth = largura;
        ctx.arc(mouseX, mouseY, raio, 0, Math.PI*2)
        ctx.stroke()
    }
}

function limpar(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}

canvas.addEventListener("mousedown", meuMouseDown)
canvas.addEventListener("mouseup", meuMouseUp)
canvas.addEventListener("mouseleave", meuMouseLeave)
canvas.addEventListener("mousemove", meuMouseMove)