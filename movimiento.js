var teclas = {
    LEFT:37,
    RIGTH:39,
    UP:38,
    DOWN:40
};
console.log(teclas);
//esto es comentario
var draw = document.getElementById("planoDibujo");
var papel = draw.getContext("2d");
dibujarLinea("red", 149, 149, 151, 151, papel);
var x = 150;
var y = 150;

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
    lienzo.beginPath();/*inicio del trazo*/
    lienzo.strokeStyle = color;/*color del trazo*/
    lienzo.linewidth = 3;
    lienzo.moveTo(xinicial, yinicial);/*punyo inicial del trazo*/
    lienzo.lineTo(xfinal, yfinal);/*linea hasta el punto final*/
    lienzo.stroke();/*cerramos la linea*/
    lienzo.closePath();/*fin del trazo*/
}

document.addEventListener("keyup", dibujarTeclado);

function dibujarTeclado(evento) { 
    var colorete = "blue";
    var movimiento = 10;
    switch(evento.keyCode){
        case teclas.UP:
        dibujarLinea(colorete,x,y,x,y-movimiento, papel)
        y=y-10;
        break;
        case  teclas.DOWN:
        dibujarLinea(colorete,x,y,x,y+movimiento, papel)
        y=y+10;
        break;
        case teclas.LEFT:
        dibujarLinea(colorete,x,y,x-movimiento,y, papel)
        x=x-10;
        break;
        case teclas.RIGTH:
        dibujarLinea(colorete,x,y,x+movimiento,y, papel)
        x=x+10;
        break;
        default:
    }
        
}
