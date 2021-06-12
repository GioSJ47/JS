/*
DEFINICION DE SCROLL:
  Se denomina Scroll (desplazamiento 2D) al desplazamiento de arriba a abajo (vertical) o de
  lado a lado (horizontal) de los contenidos que forman una página web, una app, etc.

A continuacion se trabajará con los scrolls verticales.
*/


//Para obtener el tamaño interno de un elemento con scroll
  function scrollHeight(e){
    return e.scrollHeight - e.clientHeight;
  }
  //EJ: scrollHeight(document.getElementById("miElemento"));



//Para obtener la posicion donde se encuentra actualmente el scroll
  function scrollY(e){
    return e.scrollHeight*(e.scrollTop/(e.scrollTop+e.clientHeight))
  }
  //EJ: scrollY(document.getElementById("miElemento"));



//Para dirigir el scroll DIRECTAMENTE a una posicion
  document.getElementById("miElemento").scrollTop = 150; //150px



//Para dirigir el scroll CON UN EFECTO DE SUAVIDAD a una posicion
  function scrollTopB(e, pos){
    if(e&&pos>=0){
      e.scroll({
        top: pos,
        behavior: 'smooth'
      });
      return true;
    } else{
      return false;
    }
  }
  //EJ: scrollTopB(document.getElementById("miElemento"), 150);



//Para avanzar desde la posicion actual del scroll 150px mas abajo
  document.getElementById("miElemento").scrollTop = scrollY(document.getElementById("miElemento")) + 150; //Posicion actual + 150px



//Detectar cuando el usuario usa el scroll
  document.getElementById("miElemento").addEventListener('scroll', function(e) {
    //COLOCA AQUÍ EL CODIGO QUE SE TIENE QUE EJECUTAR CUANDO SE USE UN SCROLL
  }
 
