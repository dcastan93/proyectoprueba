var  d = document.getElementById("dibujito");
var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botonsito");
boton.addEventListener("click", dibujoPorClick)

var lienzo = d.getContext("2d");
var ancho = d.width;

function dibujarLinea(color, xinicial,xfinal, yinicial, yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color; 
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();

}

function dibujoPorClick(){
    var x = parseInt(texto.value);
    var lineas = x;
    var espacio = ancho / lineas;
    var l = 0;
    var xf = 0;
    var yi = espacio;
    var yf = espacio;
    var xi = 0;
    var yii = 300;
    var xfi = 300;
    var yfi = 300;
    console.log(lienzo);

    while(l<lineas){
        dibujarLinea("blue",0, xf, yi,300);
        dibujarLinea("blue",xi, 300, 0,yf);
        dibujarLinea("blue",0, xf,yii ,0);
        dibujarLinea("blue",xi, 300, 300,yfi);
        l = l+1;
        xf = xf+espacio
        yi = yi+espacio
        yf = yf+espacio;
        xi = xi+espacio;
        yii = yii-espacio;
        xfi = xfi-espacio;
        yfi = yfi-espacio


    }
}

