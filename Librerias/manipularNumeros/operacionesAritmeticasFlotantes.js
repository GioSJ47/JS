/*
  DE MOMENTO SOLO SIRVE LA MULTIPLICACION
*/
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


        //SE REMUEVEN LOS SIGNOS
            let negativo=false;

            
            

        //SE CUENTA LOS LUGARES DESPUES DE LA COMA Y SE UNIFICAN LOS NUMEROS, EJ: 254.03 -> 25403
            if(a[0][1]){//PRIMER NUMERO
                ram[0]=""+a[0][0];
                if(ram[0].split("")[0]=="-"){
                    ram[0]=ram[0].split("").slice(1, ram[0].length).join("");console.log("ram: "+ram[0])
                    negativo=!negativo;
                }

                coma+=a[0][1].split("").length;
                ram[0]+=""+a[0][1];console.log("ram: "+ram[0])
            } else {
                ram[0]=""+a[0];
                if(ram[0].split("")[0]=="-"){
                    ram[0]=ram[0].split("").slice(1, ram[0].length).join("");console.log("ram: "+ram[0])
                    negativo=!negativo;
                }
            }

            if(a[1][1]){ //SEGUNDO NUMERO
                ram[1]=""+a[1][0];
                if(ram[1].split("")[0]=="-"){
                    ram[1]=ram[1].split("").slice(1, ram[1].length).join("");
                    negativo=!negativo;
                }

                coma+=a[1][1].split("").length;
                ram[1]+=""+a[1][1];
            } else {
                ram[1]=""+a[1];
                if(ram[1].split("")[0]=="-"){
                    ram[1]=ram[1].split("").slice(1, ram[1].length).join("");
                    negativo=!negativo;
                }
            }
        
        //SE DETECTAN LOS NUMEROS NEGATIVOS
            /*let negativo=false;
            if(!sig[0]){
                ram[0]=ram[0].split("").splice(1,ram[0].length-1).join("");
                negativo=!negativo;
                
            }
            if(!sig[1]){
                ram[1]=ram[1].split("").splice(1,ram[1].length-1).join("");
                negativo=!negativo;
                
            }*/

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
