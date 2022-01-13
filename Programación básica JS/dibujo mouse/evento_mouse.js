
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;
var colorElegir = document.getElementById("seleccionar_color_1");
var estado;

cuadrito.addEventListener("mousedown", pulsarMouse);
cuadrito.addEventListener("mousemove", moverMouse);
cuadrito.addEventListener("mouseup", levantarMouse);

function dibujarLinea(color, xinicial,xfinal, yinicial, yfinal, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color; 
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();

}

dibujarLinea("black", 0,300,0,0, papel);
dibujarLinea("black", 300,300,0,300, papel);
dibujarLinea("black", 300,0,300,300, papel);
dibujarLinea("black", 0,0,300,0, papel);


function pulsarMouse(evento)
{
    estado = 1;
    x = evento.layerX;
    y = evento.layerY;
    console.log(y)
}

function moverMouse(evento){
    if(estado == 1){
        dibujarLinea(colorElegir, x,  evento.layerX, y, evento.layerY, papel)
    }
    else{
        x = evento.layerX;
        y = evento.layerY;
    }
}

function levantarMouse(evento){
    estado == 0;
}
