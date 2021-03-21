/*
INFO:
	AUTOR: GioSJ
	GITHUB: https://github.com/GioSJ47
	VERSION: 1.1
	FECHA: 21/03/2021 (DD/MM/AAAA)
	DESCRIPCION: ESTE SCRIPT PERMITE MODIFICAR STRINGS A TU NECESIDAD.
  
FORMA DE USO:
  tecla: almacena la última tecla presionada y permite el funcionamiento de "teclado.accion".
  
  teclas: es un array que va almacenando las teclas presionadas en orden.
  
  accion: este objeto se usa para almacenar la funcion que se quiere ejecutar cuando se presionen teclas.
  Ejemplo 1 de uso:
    teclado.accion=function(){
      console.log("Tecla presionada: " + teclado.tecla);
    };
  Ejemplo 1 de uso:
    
  iniciar(): esta función inicia el funcionamiento de "teclado". Una vez tenga configurado el funcionamiento
  dentro de "accion",
  teclaPulsada(): esta función indica si alguna tecla ya fué pulsada devolviendo true o false.
  Ejemplos de uso:
    teclado.teclaPulsada("a");
    teclado.teclaPulsada("Enter");
    teclado.teclaPulsada("Shift");
   
   reiniciar(): esta función vacía el array "teclas" (historial de pulsaciones), pero no vacía el objeto "accion".
*/

var teclado = {
    tecla: false,
    teclas: new Array(),
    accion: false,
  
    iniciar: function() {
        document.onkeydown = teclado._accion;
    },
    _accion: function(e){
        teclado.tecla=e.key;  
        teclado.teclas.push(teclado.tecla);
        if(teclado.accion)teclado.accion();
    },
    teclaPulsada: function(codigoTecla){
        return (teclado.teclas.indexOf(codigoTecla) !== -1) ? true : false;
    },
    reiniciar: function() {
        teclado.teclas = new Array();
    }
};
