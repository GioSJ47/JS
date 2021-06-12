//Para obtener el tamaño interno de un elemento con scroll
  document.getElementById("miElemento").scrollHeight;

//Para obtener en la posicion donde se encuentra el scroll
  function scrollY(e){
      return e.scrollTop*(e.scrollHeight/(e.scrollHeight-e.clientHeight))
  }
  //EJ: scrollY(document.getElementById("miElemento"));

//Para dirigirse a una posicion del scroll
  
