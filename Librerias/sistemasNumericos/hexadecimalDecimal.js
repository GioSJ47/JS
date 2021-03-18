/*LIBRERIA HEXADECIMAL
  AUTOR: Gio
  GIT: https://github.com/GioSJ47
  FECHA DE CRACION: 2-11-2020 (DD-MM-AAAA)
  VERSION: b_0.5.1
  
  FUNCIONES:
    hexInt():
      Introduce un string con el número en hexadecimal que quieras convertir a número decimal. EJ:
        hexInt("A12F");    //DEVOLVERÁ 41263 decimal
        hexInt("aD3e");    //DEVOLVERÁ 44350 decimal
        hexInt("0x11Ab");  //DEVOLVERÁ 4523 decimal
        hexInt(0xFF7);     //DEVOLVERÁ UN VALOR ERRONEO, SE RECOMIENDA INTRODUCIR SI O SI EL VALOR EN UN STRING
    
    
        
*/

function hexInt(inp=0){
    inp+="";
    inp=inp.toUpperCase();
    inp = Array.from(inp);

    
    if(inp[1]==="X"){
        inp.shift();
        inp.shift();
    }
    var l=inp.length;
    var res = 0;
    var peso=1;

    for(var i=l-1; i>=0; i--){
        if(inp[i]>=0&&inp[i]<=9){
            inp[i]=parseInt(inp[i]);
        } else {
            switch(inp[i]){
                case "A":
                    inp[i]=10;
                    break;
                case "B":
                    inp[i]=11;
                    break;
                case "C":
                    inp[i]=12;
                    break;
                case "D":
                    inp[i]=13;
                    break;
                case "E":
                    inp[i]=14;
                    break;
                case "F":
                    inp[i]=15;
                    break;
                default:
                    return false;
            }
        }
        res+=inp[i]*peso;
        peso*=16;
    }
    
    return res;
}
