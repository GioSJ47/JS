//AGREGAR VALOR EN POSICION INTERMEDIA
  function arrAgregar(arr, p, valor){
    let l=arr.length;
    if(p<l&&p>=0){
      for(let i=l-1; i>p-1; i--){
        arr[i+1]=arr[i];
      }
      arr[p]=valor;
      return arr;
    } else {
      return false;
    }
  }

//ELIMINAR VALOR INTERMEDIO
  function arrEliminar(arr, p){
    let l=arr.length;
    if(p<l&&p>=0){
      for(let i=p; i<l-1; i++){
        arr[i]=arr[i+1];
      }
      arr.pop();
      return arr;
    } else {
      return false;
    }
  }
