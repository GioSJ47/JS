/*
INFO:
	AUTOR: GioSJ
	GITHUB: https://github.com/GioSJ47
	VERSION: 1.0
	FECHA: 31/03/2021 (DD/MM/AAAA)
	DESCRIPCION: ESTE SCRIPT EJECUTA CÓDIGO CUANDO LA PÁGINA TERMINA DE CARGAR.

FORMA DE USO:
  Simplemente coloca donde dice "//TU CODIGO VA AQUI" el código que quieres que se ejecute al terminar de cargarse la página.
  Puede encontrar la documentación de la funcion que revisa el estado del documento en https://developer.mozilla.org/es/docs/Web/API/Document/readyState
  Este código inicia un bucle que chequea el estado de la página cada 100 milisegundos hasta que esté lista, ejecutando tu
  código y finalizando el bucle (se autodestruye para no consumir recursos).
*/

var paginaCargada = setInterval(() => {
     if (document.readyState == "loaded" || document.readyState == "interactive" || document.readyState == "complete") {
         //TU CODIGO VA AQUI
         clearInterval(paginaCargada);
     }
}, 100);
