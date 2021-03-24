# detectarTeclaPulsada.js
## INFO:
	AUTOR: GioSJ
	GITHUB: https://github.com/GioSJ47
	VERSION: 1.1
	FECHA: 21/03/2021 (DD/MM/AAAA)
	DESCRIPCION: ESTE SCRIPT PERMITE MODIFICAR STRINGS A TU NECESIDAD.
  
## FORMA DE USO:
### tecla:

Almacena la última tecla presionada y permite el funcionamiento de "teclado.accion".
  
### teclas:

Es un array que va almacenando las teclas presionadas en orden.
  
### accion:

Este objeto se usa para almacenar la funcion que se quiere ejecutar cuando se presionen teclas.

Ejemplo 1 de uso:
```javascript
teclado.accion=function(){
	console.log("Tecla presionada: " + teclado.tecla);
};
```
Ejemplo 2 de uso:
```javascript
function miFuncion(){
	if(teclado.tecla=="A" || teclado.tecla=="a"){
		console.log("Se precionó la tecla "A");
	}
}
teclado.accion=function(){ miFuncion(); };
```
    
## iniciar():

Esta función inicia el funcionamiento de "teclado". Una vez tenga configurado el funcionamiento dentro de "accion", haga que todo funcione con iniciar().
  
## teclaPulsada():

Esta función indica si alguna tecla ya fué pulsada devolviendo true o false.
  Ejemplos de uso:
```javascript
teclado.teclaPulsada("a");
teclado.teclaPulsada("Enter");
teclado.teclaPulsada("Shift");
```
   
## reiniciar(): 
 
Esta función vacía el array "teclas" (historial de pulsaciones), pero no vacía el objeto "accion".
   
--------------------

# strings.js
## 	INFO:
	AUTOR: GioSJ
	GITHUB: https://github.com/GioSJ47
	VERSION: 1.0
	FECHA: 11/08/2020 - 24/11/2020 (DD/MM/AAAA)
	DESCRIPCION: ESTE SCRIPT PERMITE MODIFICAR STRINGS A TU NECESIDAD.
	
## FUNCIONES:
### reemplazar();
**DEFINICION:** SE USA PARA REEMPLAZAR CARACTERES O CADENAS POR OTRAS.

EJ 1: ```reemplazar("Holx q.", {"x":"a", 'q.':'que tal?'}); -> "Hola que tal?"```

EJ 2: `obj = {"x":"a", 'q.':'que tal?'};`

`reemplazar("Holx q.", obj);` -> "Hola que tal?"
	
### textoSeguro();
**DEFINICION:** INTERCAMBIA LOS SIMBOLOS ESPECIALES POR SU CODIGO HTML CORRESPONDIENTE.

**NOTA:** LA FUNCION ELIMINA LOS SIMBOLOS QUE NO RECONOCE (QUE NO POSEEN CODIGO HTML).

**EJ:** `textoSeguro("Camión. 2 < 3. ♥");` -> "Cami&#242;n. 2 &#60; 3. "   (nótese que se elimino el corazón)

### textoSeguroInvertido();
**DEFINICION:** INTERCAMBIA LOS CODIGOS HTML A SU SIMBOLO CORRESPONDIENTE.

**EJ:** `textoSeguroInvertido("Cami&#242;n. 2 &#60; 3.");` -> "Camión. 2 < 3."

### strAAscii();
**DEFINICION:** DEVUELVE EL CODIGO ASCII QUE LE CORRESPONDE AL CARACTER INGRESADO.

**EJ:** `asciiAStr("A");` -> 65

### asciiAStr();
**DEFINICION:** DEVUELVE EL CARACTER QUE LE CORRESPONDE AL NUMERO INGRESADO.

**NOTA 1**: SI SE INGRESA UN NUMERO QUE SALGA DEL RANGO 1-255 LA FUNCION DEVOLVERÁ 0 (CERO).

**NOTA 2:** SI SE INGRESA LOS NUMEROS 244 Y 245 LA FUNCION DEVOLVERÁ 0 (CERO).

**EJ 1:** `asciiAStr(65);` -> "A"

**EJ 2:** `asciiAStr("65");` -> "A"

### arrayAStr();
**DEFINICION:** JUNTA TODOS LOS VALORES ALACENADOS EN UN ARRAY. RECONSTRYE LO QUE DESINTEGRA LA FUNCION Array.from()

**EJ 1:** `arrayAStr(['H', 'O', 'L', 'A']);` -> "HOLA"

**EJ 2:**
~~~javascript
var saludo = ['H', 'O', 'L', 'A'];
arrayAStr(saludo);
~~~ 
-> "HOLA"

### aMinusculas();
**DEFINICION:** TANSFORMA TODOS LOS CARACTERES QUE SE ENCUENTRAN EN UN STRING A MINUSCULAS.

**EJ:** `aMinusculas("Hola COMO EsTaS?");` -> "hola como estas?"

### aMayusculas();
**DEFINICION:** TANSFORMA TODOS LOS CARACTERES QUE SE ENCUENTRAN EN UN STRING A MAYUSCULAS.

**EJ:** `aMayusculas("Hola COMO EsTaS?");` -> "HOLA COMO ESTAS?"

### buscarTxt();
**DEFINICION:** BUSCA EN LAS POSICIONES DEL STRING INGRESADO EN EL PRIMER PARAMETRO DONDE SE ENCUENTRA EL STRING ESPECIFICADO EN EL SEGUNDO PARAMETRO. EL TERCER PARAMETRO DEFINE LA SENSIBILIDAD DE BUSQUEDA (FALSE=SE DESACTIVA LA SENSIBILIDAD. TRUE=SE TIENE EN CUENTA LAS MINUSCULAS Y MAYUSCULAS).

**NOTA:** LA FUNCION COMIENZA A CONTAR DESDE EL 1. SI NO ENCUENTRA NINGUNA COINCIDENCIA, DEVOLVERÁ false.

**EJ 1:** `buscarTxt("Hola hasd hola hola", "hola");`        -> [10, 15]

**EJ 2:** `buscarTxt("Hola hasd hola hola", "hola", false);` -> [0, 10, 15]

**EJ 3:** `buscarTxt("Hola hasd hola hola", "chau", false);` -> -1
		
## CONSTANTES:
**ASCII:** Almacena todos los simbolos del código ascii.
