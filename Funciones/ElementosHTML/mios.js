//AVERIGUAR EN QUE POSICION SE ENCUENTRA UN ELEMENTO ENTRE SU CLASE DENTRO DE SU ELEMENTO PADRE
  function n(arr, e){
    let l=arr.length;
    for(let i=0; i<l; i++){
      if(arr[i]==e)return i;
    }
    return 0;
  }
  /*EJ:
    <div id="padre">
      <p class="hijo">Primero</p>
      <p class="hijo">Segundo</p>
      <p class="nieto">Tercero</p>
      <p class="nieto">Cuarto</p>
      <p class="hijo" id="referencia">Quinto</p>
    </div>
    n(document.getElementsByClassName("hijo"), document.getElementById("referencia")); //return: 2

