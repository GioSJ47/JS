/*LIBRERIA BINARIA
  AUTOR: Gio
  GIT: https://github.com/GioSJ47
  FECHA DE CRACION: 2-11-2020 (DD-MM-AAAA)
  VERSION: b_0.5.1
  
  CONSTANTES:
    ASCII: Contiene toda la simbologia ascii, cada 
    simbolo está situado en la posicion donde le 
    corresponde su valor ascii.
  FUNCIONES:
    asciiAStr():
      Introduce un codigo (numero) ascii y te devolverá el simboloi que le corresponde. EJ:
        asciiAStr(65);   //DEVOLVERÁ "A"
        asciiAStr("65"); //DEVOLVERÁ "A"
        asciiAStr(100);  //DEVOLVERÁ "d"
        asciiAStr(21);   //DEVOLVERÁ "§"
    
    
        
*/
console.log("LIBRERIA BINARIA:\n\tAUTOR: Gio\n\tGIT: https://github.com/GioSJ47\n\tFECHA DE CRACION: 2-11-2020 (DD-MM-AAAA)\n\tVERSION: b_0.5");





//CONSTANTES
const ASCII = [
"☺","☻","♥","♦","♣","♠","•","◘","○","◙","♂","♀","♪","♫","☼","►","◄","↕","‼","¶","§","▬","↨","↑","↓","→","←","∟","↔","▲","▼"," ","!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/","0","1","2","3","4","5","6","7","8","9",":",";","<","=",">","?","@","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","[","\\","]","^","_","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","{","|","}","~","⌂","Ç","ü","é","â","ä","à","å","ç","ê","ë","è","ï","î","ì","Ä","Å","É","æ","Æ","ô","ö","ò","û","ù","ÿ","Ö","Ü","ø","£","Ø","×","ƒ","á","í","ó","ú","ñ","Ñ","ª","º","¿","®","¬","½","¼","¡","«","»","░","▒","▓","│","┤","Á","Â","À","©","╣","║","╗","╝","¢","¥","┐","└","┴","┬","├","─","┼","ã","Ã","╚","╔","╩","╦","╠","═","╬","¤","ð","Ð","Ê","Ë","È","ı","Í","Î","Ï","┘","┌","█","▄","¦","Ì","▀","Ó","ß","Ô","Ò","õ","Õ","µ","þ","Þ","Ú","Û","Ù","ý","Ý","¯","´","­","±","‗","¾","‗","Å","÷","¸","°","¨","·","¹","³","²","■"," "];

//PREFUNCIONES
  function asciiAStr(inp){
    inp=parseInt(inp);
    if(inp==244 || inp==245)return "";
    if(inp>0){
      return ASCII[inp-1];
    }
    return 0;
  }

//FUNCIONES FINALES
function binADec(inp){
  var res = new Array();
  var ram = new Array(), ramL, peso;
  
  //ANTIERROR
  var chequeo = Array.from(inp);
  var chequeoL=chequeo.length;
  for(var i=0; i<chequeoL; i++){
    if(chequeo[i]!="0"&&chequeo[i]!="1"){
      return false;
    }
  }
  
  //PROCESO
  if(inp>=0){
    inp+="";
  }
  inp=inp.split(" ");
  var inpL=inp.length;
  for(var i=0; i<inpL;i++){
    ram=Array.from(inp[i]);
    ramL=ram.length;
    peso=1;
    res[i]=0;
    for(var i2=ramL-1;i2>=0;i2--){
      res[i]+=parseInt(ram[i2])*peso;
      peso*=2;
    }
  }
  
  var res=res[0];
  return res;
}



document.write("<br>");

function deBinAStr(idInp, idOut){
  var msg=binADec(document.getElementById(idInp).value);
  var l=msg.length;
  var res="";

  /* OUTPUT (ESCRITURA EN DOCUMENTO) */
    var clave = msg;
    var claveLog="";
    var claveL=clave.length
    if(claveL==undefined){
      claveLog=clave;
    } else {
      var i=0;
      while(i<claveL-1){
        claveLog+=clave[i]+", ";
        i++;
      }
      claveLog+=clave[i];
    }



  res+="<b>Numeros:</b> "+claveLog+"<br>";
  res+="<b>Descifrado:</b> ";


  for(var i=0;i<l;i++){
    res+=asciiAStr(msg[i]);
  }

  document.getElementById(idOut).innerHTML=res;
}
