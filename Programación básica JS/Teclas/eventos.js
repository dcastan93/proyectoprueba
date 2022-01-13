var teclas = {
    UP : 38,
    DOWN : 40,
    LEFT : 37,
    RIGHT : 39

};

console.log(teclas);
console.log(MouseEvent);

document.addEventListener("keyup", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", 149, 151, 149, 151, papel);


function dibujarLinea(color, xinicial,xfinal, yinicial, yfinal, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color; 
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();

}


function dibujarTeclado(evento){

    var colorsito = "blue";
    var movimiento = 10;
       
   switch(evento.keyCode){
       case teclas.DOWN:
        dibujarLinea(colorsito, x, x, y, y + movimiento, papel);
        y = y+movimiento;


        break;
        case teclas.RIGHT:
            dibujarLinea(colorsito, x, x + movimiento, y, y, papel);
            x = x+movimiento;

        break;
        case teclas.UP:
           dibujarLinea(colorsito, x, x, y, y - movimiento, papel);
           y = y-movimiento;

        break;
        case teclas.LEFT:
            dibujarLinea(colorsito, x, x - movimiento, y, y, papel);
            x = x - movimiento;

        break;
   }
}