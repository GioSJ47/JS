function recortarFloat(num, decimal=0){
  if(isFinite(num)&&isFinite(decimal)){
    let _str = Array.from(num+"");
    let strL=false;
    if(_str.indexOf(".")+1){
      strL = Array.from(((num+"").split("."))[0]).length;
    }
    if(strL){
      if(decimal<0){
        decimal*=-1;
      }
      if(decimal>0){
        decimal+=1;
      }
      return (_str.splice(0,(strL+parseInt(decimal))).join(""))*1;
    }
    return num;
  }
  return false;
}
