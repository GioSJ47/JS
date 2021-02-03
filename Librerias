/*
INFO:
	AUTOR: GioSJ
	GITHUB: https://github.com/GioSJ47
	VERSION: 1.0
	FECHA: 11/08/2020 - 24/11/2020 (DD/MM/AAAA)
	DESCRIPCION: ESTE SCRIPT PERMITE MODIFICAR STRINGS A TU NECESIDAD.
	
FUNCIONES:
	reemplazar();
		DEFINICION: SE USA PARA REEMPLAZAR CARACTERES O CADENAS POR OTRAS.
		EJ 1: reemplazar("Holx q.", {"x":"a", 'q.':'que tal?'}); -> "Hola que tal?"
		EJ 2: obj = {"x":"a", 'q.':'que tal?'};
		      reemplazar("Holx q.", obj); -> "Hola que tal?"
	
	textoSeguro();
		DEFINICION: INTERCAMBIA LOS SIMBOLOS ESPECIALES POR SU CODIGO HTML CORRESPONDIENTE.
		NOTA: LA FUNCION ELIMINA LOS SIMBOLOS QUE NO RECONOCE (QUE NO POSEEN CODIGO HTML).
		EJ: textoSeguro("Camión. 2 < 3. ♥"); -> "Cami&#242;n. 2 &#60; 3. "   (nótece que se elimino el corazón)
		
	textoSeguroInvertido();
		DEFINICION: INTERCAMBIA LOS CODIGOS HTML A SU SIMBOLO CORRESPONDIENTE.
		EJ: textoSeguroInvertido("Cami&#242;n. 2 &#60; 3."); -> "Camión. 2 < 3."

	strAAscii();
		DEFINICION: DEVUELVE EL CODIGO ASCII QUE LE CORRESPONDE AL CARACTER INGRESADO.
		EJ: asciiAStr("A"); -> 65
	
	asciiAStr();
		DEFINICION: DEVUELVE EL CARACTER QUE LE CORRESPONDE AL NUMERO INGRESADO.
		NOTA 1: SI SE INGRESA UN NUMERO QUE SALGA DEL RANGO 1-255 LA FUNCION DEVOLVERÁ 0 (CERO).
		NOTA 2: SI SE INGRESA LOS NUMEROS 244 Y 245 LA FUNCION DEVOLVERÁ 0 (CERO).
		EJ 1: asciiAStr(65); -> "A"
		EJ 2: asciiAStr("65"); -> "A"
		
	arrayAStr();
		DEFINICION: JUNTA TODOS LOS VALORES ALACENADOS EN UN ARRAY. RECONSTRYE LO QUE DESINTEGRA LA FUNCION Array.from()
		EJ 1: arrayAStr(['H', 'O', 'L', 'A']); -> "HOLA"
		EJ 2: var saludo = ['H', 'O', 'L', 'A'];
			  arrayAStr(saludo); -> "HOLA"
		
	aMinusculas();
		DEFINICION: TANSFORMA TODOS LOS CARACTERES QUE SE ENCUENTRAN EN UN STRING A MINUSCULAS.
		EJ: aMinusculas("Hola COMO EsTaS?"); -> "hola como estas?"
		
	aMayusculas();
		DEFINICION: TANSFORMA TODOS LOS CARACTERES QUE SE ENCUENTRAN EN UN STRING A MAYUSCULAS.
		EJ: aMayusculas("Hola COMO EsTaS?"); -> "HOLA COMO ESTAS?"
		
	buscarTxt();
		DEFINICION: BUSCA EN LAS POSICIONES DEL STRING INGRESADO EN EL PRIMER PARAMETRO DONDE SE ENCUENTRA EL STRING ESPECIFICADO EN EL SEGUNDO PARAMETRO. EL TERCER PARAMETRO DEFINE LA SENSIBILIDAD DE BUSQUEDA (FALSE=SE DESACTIVA LA SENSIBILIDAD. TRUE=SE TIENE EN CUENTA LAS MINUSCULAS Y MAYUSCULAS).
		NOTA: LA FUNCION COMIENZA A CONTAR DESDE EL 1. SI NO ENCUENTRA NINGUNA COINCIDENCIA, DEVOLVERÁ false.
		EJ 1: buscarTxt("Hola hasd hola hola", "hola");        -> [10, 15]
		EJ 2: buscarTxt("Hola hasd hola hola", "hola", false); -> [0, 10, 15]
		EJ 3: buscarTxt("Hola hasd hola hola", "chau", false); -> -1
		
CONSTANTES:
	ASCII: Almacena todos los simbolos del código ascii.
	
*/


const ASCII = ["☺","☻","♥","♦","♣","♠","•","◘","○","◙","♂","♀","♪","♫","☼","►","◄","↕","‼","¶","§","▬","↨","↑","↓","→","←","∟","↔","▲","▼"," ","!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/","0","1","2","3","4","5","6","7","8","9",":",";","<","=",">","?","@","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","[","\\","]","^","_","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","{","|","}","~","⌂","Ç","ü","é","â","ä","à","å","ç","ê","ë","è","ï","î","ì","Ä","Å","É","æ","Æ","ô","ö","ò","û","ù","ÿ","Ö","Ü","ø","£","Ø","×","ƒ","á","í","ó","ú","ñ","Ñ","ª","º","¿","®","¬","½","¼","¡","«","»","░","▒","▓","│","┤","Á","Â","À","©","╣","║","╗","╝","¢","¥","┐","└","┴","┬","├","─","┼","ã","Ã","╚","╔","╩","╦","╠","═","╬","¤","ð","Ð","Ê","Ë","È","ı","Í","Î","Ï","┘","┌","█","▄","¦","Ì","▀","Ó","ß","Ô","Ò","õ","Õ","µ","þ","Þ","Ú","Û","Ù","ý","Ý","¯","´","­","±","‗","¾","‗","Å","÷","¸","°","¨","·","¹","³","²","■"," "];





function reemplazar(cadena, obj) {
    Object.keys(obj).forEach(el => {
        const reg=new RegExp(el, "gi")
        cadena=cadena.replace(reg, obj[el]);
    });
    return cadena;
}


function textoSeguro(str){
	obj = {/*AMPERSAND*/'&': '&#38;','<':'&#60;','>':'&#62;',/*SIMBOLOS CORRECTOS*/'¡': '&#161;','¢': '&#162;','£': '&#163;','¤': '&#164;',"á": "&#225;",'¥': '&#165;','¦': '&#166;','§': '&#167;','¨': '&#168;','©': '&#169;','ª': '&#170;','«': '&#171;','¬': '&#172;','®': '&#174;','¯': '&#175;','°': '&#176;','±': '&#177;','²': '&#178;','³': '&#179;','´': '&#180;','µ': '&#181;','¶': '&#182;','·': '&#183;','¸': '&#184;','¹': '&#185;','º': '&#186;','»': '&#187;','¼': '&#188;','½': '&#189;','¾': '&#190;','¿': '&#191;','À': '&#192;','Á': '&#193;','Â': '&#194;','Ã': '&#195;','Ä': '&#196;','Å': '&#197;','Æ': '&#198;','Ç': '&#199;','È': '&#200;','É': '&#201;','Ê': '&#202;','Ë': '&#203;','Ì': '&#204;','Í': '&#205;','Î': '&#206;','Ï': '&#207;','Ð': '&#208;','Ñ': '&#209;','Ò': '&#210;','Ó': '&#211;','Ô': '&#212;','Õ': '&#213;','Ö': '&#214;','×': '&#215;','Ø': '&#216;','Ù': '&#217;','Ú': '&#218;','Û': '&#219;','Ü': '&#220;','Ý': '&#221;','Þ': '&#222;','ß': '&#223;','à': '&#224;','á': '&#225;','â': '&#226;','ã': '&#227;','ä': '&#228;','å': '&#229;','æ': '&#230;','ç': '&#231;','è': '&#232;','é': '&#233;','ê': '&#234;','ë': '&#235;','ì': '&#236;','í': '&#237;','î': '&#238;','ï': '&#239;','ð': '&#240;','ñ': '&#241;','ò': '&#242;','ó': '&#243;','ô': '&#244;','õ': '&#245;','ö': '&#246;','÷': '&#247;','ø': '&#248;','ù': '&#249;','ú': '&#250;','û': '&#251;','ü': '&#252;','ý': '&#253;','þ': '&#254;','ÿ': '&#255;',/*SIMBOLOS GRANDES 1*/'Œ': '&#338;','œ': '&#339;','Š': '&#352;','š': '&#353;','Ÿ': '&#376;','ƒ': '&#402;',/*SIMBOLOS GRANDES 2*/'–': '&#8211;','—': '&#8212;','‘': '&#8216;','’': '&#8217;','‚': '&#8218;','“': '&#8220;','”': '&#8221;','„': '&#8222;','†': '&#8224;','‡': '&#8225;','•': '&#8226;','…': '&#8230;','‰': '&#8240;','€': '&#8264;','™': '&#8282;',/*SIMBOLOS ERRONEOS 1*'☺':'&#1;','☻':'&#2;','♥':'&#3;','♦':'&#4;','♣': '&#5;','♠': '&#6;','•': '&#7;','◘': '&#8;','○': '&#9;','◙': '&#10;','♂': '&#11;','♀': '&#12;','♪': '&#13;','♫': '&#14;','☼': '&#15;','►': '&#16;','◄': '&#17;','↕': '&#18;','‼': '&#19;','¶': '&#20;','§': '&#21;','▬': '&#22;','↨': '&#23;','↑': '&#24;','↓': '&#25;','→': '&#26;','←': '&#27;','∟': '&#28;','↔': '&#29;','▲': '&#30;','▼': '&#31;',/*SIMBOLOS ERRONEOS 2*'⌂': '&#127;','×': '&#158;',/*BORRAR ERRONEOS 1*/'☺':'','☻':'','♥':'','♦':'','♣': '','♠': '','•': '','◘': '','○': '','◙': '','♂': '','♀': '','♪': '','♫': '','☼': '','►': '','◄': '','↕': '','‼': '','¶': '','§': '','▬': '','↨': '','↑': '','↓': '','→': '','←': '','∟': '','↔': '','▲': '','▼': '',/*BORRAR ERRONEOS 2*/'⌂': '','×': ''};
	
	return reemplazar(str, obj);
}
/* EJEMPLO PUESTO EN PRACTICA *
document.write("<br>");
for(var i=338; i<=402;i++){
	document.write(",'': '&#38;#"+i+";'");
}
document.write("<br>");
/**/

function textoSeguroInvertido(str){
	obj ={/*AMPERSAND*/'&#38;':'&','&#60;':'<','&#62;':'>',/*SIMBOLOS CORRECTOS*/'&#161;':'¡','&#162;':'¢','&#163;':'£','&#164;':'¤',"&#225;":"á",'&#165;':'¥','&#166;':'¦','&#167;':'§','&#168;':'¨','&#169;':'©','&#170;':'ª','&#171;':'«','&#172;':'¬','&#174;':'®','&#175;':'¯','&#176;':'°','&#177;':'±','&#178;':'²','&#179;':'³','&#180;':'´','&#181;':'µ','&#182;':'¶','&#183;':'·','&#184;':'¸','&#185;':'¹','&#186;':'º','&#187;':'»','&#188;':'¼','&#189;':'½','&#190;':'¾','&#191;':'¿','&#192;':'À','&#193;':'Á','&#194;':'Â','&#195;':'Ã','&#196;':'Ä','&#197;':'Å','&#198;':'Æ','&#199;':'Ç','&#200;':'È','&#201;':'É','&#202;':'Ê','&#203;':'Ë','&#204;':'Ì','&#205;':'Í','&#206;':'Î','&#207;':'Ï','&#208;':'Ð','&#209;':'Ñ','&#210;':'Ò','&#211;':'Ó','&#212;':'Ô','&#213;':'Õ','&#214;':'Ö','&#215;':'×','&#216;':'Ø','&#217;':'Ù','&#218;':'Ú','&#219;':'Û','&#220;':'Ü','&#221;':'Ý','&#222;':'Þ','&#223;':'ß','&#224;':'à','&#225;':'á','&#226;':'â','&#227;':'ã','&#228;':'ä','&#229;':'å','&#230;':'æ','&#231;':'ç','&#232;':'è','&#233;':'é','&#234;':'ê','&#235;':'ë','&#236;':'ì','&#237;':'í','&#238;':'î','&#239;':'ï','&#240;':'ð','&#241;':'ñ','&#242;':'ò','&#243;':'ó','&#244;':'ô','&#245;':'õ','&#246;':'ö','&#247;':'÷','&#248;':'ø','&#249;':'ù','&#250;':'ú','&#251;':'û','&#252;':'ü','&#253;':'ý','&#254;':'þ','&#255;':'ÿ',/*SIMBOLOS GRANDES 1*/'&#338;':'Œ','&#339;':'œ','&#352;':'Š','&#353;':'š','&#376;':'Ÿ','&#402;':'ƒ',/*SIMBOLOS GRANDES 2*/'&#8211;':'–','&#8212;':'—','&#8216;':'‘','&#8217;':'’','&#8218;':'‚','&#8220;':'“','&#8221;':'”','&#8222;':'„','&#8224;':'†','&#8225;':'‡','&#8226;':'•','&#8230;':'…','&#8240;':'‰','&#8264;':'€','&#8282;':'™',/*SIMBOLOS ERRONEOS 1*'&#1;':'☺','&#2;':'☻','&#3;':'♥','&#4;':'♦','&#5;':'♣','&#6;':'♠','&#7;':'•','&#8;':'◘','&#9;':'○','&#10;':'◙','&#11;':'♂','&#12;':'♀','&#13;':'♪','&#14;':'♫','&#15;':'☼','&#16;':'►','&#17;':'◄','&#18;':'↕','&#19;':'‼','&#20;':'¶','&#21;':'§','&#22;':'▬','&#23;':'↨','&#24;':'↑','&#25;':'↓','&#26;':'→','&#27;':'←','&#28;':'∟','&#29;':'↔','&#30;':'▲','&#31;':'▼',/*SIMBOLOS ERRONEOS 2*'&#127;':'⌂','&#158;':'×'/**/};
	
	return reemplazar(str, obj);
}


function strAAscii(str){
	for(var i=0;i<=255;i++){
		if(str==ASCII[i]){
			return i+1;
		}
	}
	return false;
}



function asciiAStr(inp){
	inp*=1;
	if(inp==244 || inp==245)return 0;
	if(inp>0 && inp<256){
		return ASCII[inp-1];
	}
	return false;
}


//EJ arrayAStr(["H", "o", "l", "a"]); -> "Hola"
function arrayAStr(str){
	res = "";
	strL = str.length;
	for(var i = 0; i < strL; i++){
		res += str[i];
	}
	return res;
}


//EJ aMinusculas("AbcDe"); -> "abcde"
function aMinusculas(str){
	str = textoSeguro(str);
	str = Array.from(str);
	var strL = str.length, ascii;
	
	
	for(var i=0; i<strL;i++){
		ascii = strAAscii(str[i]);
		if(ascii >= 65 && ascii <= 90){
			str[i]=asciiAStr(ascii+32);
		} else if(str[i] == "&" && str[i+1] == "#" && str[i+5] == ";"){
			if(str[i+2] == "2"){
				if(str[i+3] == "0"){
					/*ñ &#241;*/ if(str[i+4] == "9"){
						str[i+3] = "4"
						str[i+4] = "1"
						i+=5;
					} /*é &#233;*/ else if(str[i+4] == "1"){
						str[i+3] = "3"
						str[i+4] = "3"
						i+=5;
					}
					/*í &#237;*/ else if(str[i+4] == "5"){
						str[i+3] = "3"
						str[i+4] = "7"
						i+=5;
					} 
				} else if(str[i+3] == "1"){
					/*ó &#243;*/ if(str[i+4] == "1"){
						str[i+3] = "4"
						str[i+4] = "3"
						i+=5;
					} /*ú &#250;*/ else if(str[i+4] == "8"){
						str[i+3] = "5"
						str[i+4] = "0"
						i+=5;
					}
				}
				
			} /*á &#225;*/ else if(str[i+2] == "1" && str[i+3] == "9" && str[i+4] == "3"){
				str[i+2] = "2"
				str[i+3] = "2"
				str[i+4] = "5"
				i+=5;
			}
		}
	}
	
	
	return arrayAStr(str);
}
//EJ document.write(aMinusculas("ABCDEFGHIJKLMNÑOPQRSTUVWXYZ ÁÉÍÓÚ"));

//EJ aMayusculas("AbcDe"); -> "ABCDE"
function aMayusculas(str){
	var str = textoSeguro(str);
	str = Array.from(str);
	var strL = str.length, ascii;
	
	
	for(var i=0; i<strL;i++){
		ascii = strAAscii(str[i]);
		if(ascii >= 97 && ascii <= 122){
			str[i]=asciiAStr(ascii-32); //'ñ': '&#241;'     'Ñ': '&#209;'
		} /*ñ &#209;*/ else if(str[i] == "&" && str[i+1] == "#" && str[i+2] == "2" && str[i+3] == "4" && str[i+4] == "1" && str[i+5] == ";"){
			str[i+3] = "0"
			str[i+4] = "9"
			str[i+5] = ";"
			i+=5;
		} /*Á &#193;*/ else if(str[i] == "&" && str[i+1] == "#" && str[i+2] == "2" && str[i+3] == "2" && str[i+4] == "5" && str[i+5] == ";"){
			str[i+2] = "1"
			str[i+3] = "9"
			str[i+4] = "3"
			str[i+5] = ";"
			i+=5;
		} /*É &#201;*/ else if(str[i] == "&" && str[i+1] == "#" && str[i+2] == "2" && str[i+3] == "3" && str[i+4] == "3" && str[i+5] == ";"){
			str[i+3] = "0"
			str[i+4] = "1"
			str[i+5] = ";"
			i+=5;
		} /*Í &#205;*/ else if(str[i] == "&" && str[i+1] == "#" && str[i+2] == "2" && str[i+3] == "3" && str[i+4] == "7" && str[i+5] == ";"){
			str[i+3] = "0"
			str[i+4] = "5"
			str[i+5] = ";"
			i+=5;
		} /*Ó &#211;*/ else if(str[i] == "&" && str[i+1] == "#" && str[i+2] == "2" && str[i+3] == "4" && str[i+4] == "3" && str[i+5] == ";"){
			str[i+3] = "1"
			str[i+4] = "1"
			str[i+5] = ";"
			i+=5;
		} /*Ú &#218;*/ else if(str[i] == "&" && str[i+1] == "#" && str[i+2] == "2" && str[i+3] == "5" && str[i+4] == "0" && str[i+5] == ";"){
			str[i+3] = "1"
			str[i+4] = "8"
			str[i+5] = ";"
			i+=5;
		}
	}
	
	
	return arrayAStr(str);
}


function buscarTxt(str, encontrar, sensible = true){
	var __RAM_s=new Array();
	__RAM_s = Array.from(str);
	var encontrar = Array.from(encontrar);
	var tStr = __RAM_s.length;
	var tEncontrar = encontrar.length;
	
	var pos = new Array();
	pos[0] = 0;
	var _pos = 0;
	
	var coin = 0; //coincidencias encontradas
	
	
	if(sensible){
		for(i = 0; i <= (tStr - 1); i++){
			if(__RAM_s[i] == encontrar[coin]){
				coin++;
			} else {
				coin = 0;
			}
			if(coin == tEncontrar){
				pos[_pos] = i - (tEncontrar - 1) + 1;
				coin = 0;
				_pos++;
			}
		}
	} else {
		for(i = 0; i <= (tStr - 1); i++){
			if(aMinusculas(__RAM_s[i]) == aMinusculas(encontrar[coin])){
				coin++;
			} else {
				coin = 0;
			}
			if(coin == tEncontrar){
				pos[_pos] = i - (tEncontrar - 1) + 1;
				coin = 0;
				_pos++;
			}
		}
	}
	return pos;
}
