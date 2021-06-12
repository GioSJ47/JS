//Para obtener el tamaño interno de un elemento con scroll
  function scrollHeight(e){
    return e.scrollHeight - e.clientHeight;
  }
  //EJ: scrollHeight(document.getElementById("miElemento"));



//Para obtener en la posicion donde se encuentra el scroll
  function scrollY(e){
    return e.scrollHeight*(e.scrollTop/(e.scrollTop+e.clientHeight))
  }
  //EJ: scrollY(document.getElementById("miElemento"));



//Para dirigirse a una posicion del scroll
  document.getElementById("miElemento").scrollTop = 150; //150px



//Para avanzar desde la posicion actual del scroll
  document.getElementById("miElemento").scrollTop = scrollY(document.getElementById("miElemento")) + 150; //Posicion actual + 150px
