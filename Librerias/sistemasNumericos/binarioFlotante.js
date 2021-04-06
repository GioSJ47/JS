/*
INFO:
    AUTOR: GioSJ
	GITHUB: https://github.com/GioSJ47
	VERSION: 0.2.4
	FECHA: 06/04/2021 (DD/MM/AAAA)
	DESCRIPCION: Devido a los errores de impresicion de JavaScript a la hora de
        operar con numero decimales (con coma o punto) se desarrolló este código
        para poder realizar operaciones aritmeticas (sumas, restas,
        multiplicaciones y divisiones) con presicion.

    NOTA 1: En esta versión del código, la función o() solo puede realizar
        multiplicaciones.
    NOTA 2: La función o() NO es capaz de realizar más de una operación a la vez.

    FORMA DE USO: La única funcion que te interesa de este código es o(), simplemente
        tienes que introducir en su primer parametro la operacion que quieres realizar.

    EJEMPLOS DE LA FUNCION o():
        //COLOCA ESPACIOS DONDE SE TE ANTOJE
            o("100*1.1");      //110
            o("100 * 1.1");    //110
            o(" 1 00* 1 . 1"); //110

        //TRABAJA CON NUMEROS NEGATIVOS SIN MIEDO
            o("-100 * 1.1");   //-110
            o("100 * -1.1");   //-110
            o("-100 * -1.1);   //110

        //OTROS EJEMPLOS
            o(100 + "*1.1");   //110

            var num = -0.1;
            o("100 *" + num);  //-10

            o("

*/

function reemplazar(cadena, obj) {
    Object.keys(obj).forEach(el => {
        const reg=new RegExp(el, "gi")
        cadena=cadena.replace(reg, obj[el]);
    });
    return cadena;
}

function separar(num, str=true){
    num=(num+"").split(".");
    /*
    if(num.length==2){
        num[0]=parseInt(num[0]);
        num[1]*=10**(num[1].split("").length);
        num[1]=(""+num[1]).split("");
        while(num[1][num[1].length-1] == 0){
            num[1].pop();
        }
        num[1]=num[1].join("");
        if(!str){
            num[0]*=1;
            num[1]*=1;
        } else {
            num[0]+="";
            num[1]+="";
        }
    }
    */
    return num;
}

function signos(nums){
    let res=[true,true];
    if((nums[0]+"").split("")[0]=="-")res[0]=false;
    if((nums[1]+"").split("")[1]=="-")res[1]=false;
    return res;
}

function _o(num, sig){
    num=num.split(sig);
    sig=signos(num);
    return [separar(num[0]), separar(num[1])];
}

//var S="S", R="R", D="D", M="M";
function o(num){
    num=reemplazar(num, {" ":""});
    let ram=(""+num).split("");
    let res;
    let sig=Array(2);
    let a=Array();
    

    if(ram.indexOf("/")+1){
        a=_o(num, "/");
    }

    else if(ram.indexOf("*")+1){
        a=_o(num, "*");
        let coma=0, ram=Array(2);
        sig=signos([a[0][0], a[1][0]]);
        let negativo=false;

        //SE CUENTA LOS LUGARES DESPUES DE LA COMA Y SE UNIFICAN LOS NUMEROS, EJ: 254.03 -> 25403
            //PRIMER NUMERO
            if(a[0][1]){
                ram[0]=""+a[0][0];

                //SE RETIRA EL SIGNO NEGATIVO
                if(ram[0].split("")[0]=="-"){
                    ram[0]=ram[0].split("").slice(1, ram[0].length).join("");
                    negativo=!negativo;
                }

                coma+=a[0][1].split("").length;
                ram[0]+=""+a[0][1];
            }
            else {
                ram[0]=""+a[0];

                //SE RETIRA EL SIGNO NEGATIVO
                if(ram[0].split("")[0]=="-"){
                    ram[0]=ram[0].split("").slice(1, ram[0].length).join("");
                    negativo=!negativo;
                }
            }

            //SEGUNDO NUMERO
            if(a[1][1]){
                ram[1]=""+a[1][0];

                //SE RETIRA EL SIGNO NEGATIVO
                if(ram[1].split("")[0]=="-"){
                    ram[1]=ram[1].split("").slice(1, ram[1].length).join("");
                    negativo=!negativo;
                }

                coma+=a[1][1].split("").length;
                ram[1]+=""+a[1][1];
            } 
            else {
                ram[1]=""+a[1];

                //SE RETIRA EL SIGNO NEGATIVO
                if(ram[1].split("")[0]=="-"){
                    ram[1]=ram[1].split("").slice(1, ram[1].length).join("");
                    negativo=!negativo;
                }
            }

        //COMA
            let correr=1;
            for(var i=0;i<coma;i++){
                correr*=10;
            }//console.log(correr);

        //RES
            res=((negativo)?"-":"")+(ram[0]*ram[1]/correr);
    } 

    else if(ram.indexOf("+")+1){
        a=_o(num, "+");
    }

    else if(ram.indexOf("-")+1){
        a=_o(num, "-");
    }

    else {
        return false;
    }
    console.log(res);
    return a;
}

function decABin(num){
    num+="";
    let ent = num.split(".")[0];
    let dec = 0;
    if(num.split(".")[1]){
        dec = num.split(".")[1];
    }
    let res;
    let resBinEnt="";
    let resBinDec="";
    let ram;
    
    res="Numero: "+num+"\nEntero: "+ent+"\nDecimal: "+dec;

    //ENTERO
    res+="\n\nPARTE ENTERA:\n";
    ram=ent;
    while(ram){
        let bit = (ram%2)?0:1;
        resBinEnt+=bit;
        res+=ram+" / 2 = "+ram/2+" = "+(bit)+"\n";
        
        ram=parseInt(ram/2);
    }
    res+="Resultado entero en binario: "+resBinEnt;
    
    //DECIMAL
    
    if(dec>0){
        res+="\n\nPARTE DECIMAL:\n";
        ram=dec;
        
        let anti=10;
        while(ram&&anti){
            let ram2 = o(ram+"*2");
            let ent = parseInt(ram2);
            let bit = (parseInt(ram2)>=1)?1:0;
            resBinDec+=bit;

            res+=ram+" * 2 = "+ram2+" = "+(bit)+"\n";

            ram = o(ram+" * 2") - parseInt(ram);
            
            anti--;
        }
        if(!anti)res+="### ANTI ###\n";
    }

    res+="\n\nRESULTADO TOTAL: "+resBinEnt+","+resBinDec;
    console.log(res);

}
