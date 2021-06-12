/*
DEFINICION DE SCROLL:
  Se denomina Scroll (desplazamiento 2D) al desplazamiento de arriba a abajo (vertical) o de
  lado a lado (horizontal) de los contenidos que forman una página web, una app, etc.
*/


//Para obtener el tamaño interno de un elemento con scroll
  function scrollHeight(e){
    return e.scrollHeight - e.clientHeight;
  }
  //EJ: scrollHeight(document.getElementById("miElemento"));



//Para obtener la posicion donde se encuentra el scroll
  function scrollY(e){
    return e.scrollHeight*(e.scrollTop/(e.scrollTop+e.clientHeight))
  }
  //EJ: scrollY(document.getElementById("miElemento"));



//Para dirigir el scroll DIRECTAMENTE a una posicion
  document.getElementById("miElemento").scrollTop = 150; //150px



//Para dirigir el scroll CON UN EFECTO DE SUAVIDAD a una posicion
  document.getElementById("miElemento").scroll({ top: 150, behavior: 'smooth' });



//Para avanzar desde la posicion actual del scroll
  document.getElementById("miElemento").scrollTop = scrollY(document.getElementById("miElemento")) + 150; //Posicion actual + 150px



//Detectar cuando el usuario usa un scroll
  document.getElementById("miElemento").addEventListener('scroll', function(e) {
    //EL CODIGO QUE SE TIENE QUE EJECUTAR CUANDO SE USE UN SCROLL
  }



//
