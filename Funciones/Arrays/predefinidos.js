//DECLARACIONES DE ARRAYS VACIOS
 var arr = Array()
 var arr = new Array()
 var arr = []
 
//DECLARACIONES DE ARRAYS CON CIERTO ESPACIO (CAPACIDAD MAXIMA)
 var arr = Array(10)
 var arr = new Array(10)

//DECLARACIONES DE ARRAYS CON VALORES INICIALES
 var arr = Array(1, 2, 3, 4)
 var arr = new Array(1, 2, 3, 4)
 var arr = [ 1, 2, 3, 4 ]


//ACCEDER AL VALOR ALMACENADO EN UNA POSICION
 var arr = [ 1, 2, 3, 4 ]
 arr[0] // 1
 arr[3] // 4


//VER CUANTOS ELEMENTOS ALMACENA UN ARRAY
 var arr = [ 1, 2, 3, 4 ]
 arr.length // 4


//REEMPLAZAR PRIMER ELEMENTO
 var arr = [ 1, 2, 3, 4 ]
 arr[0] = "A" // [ "A", 2, 3, 4 ]

//REEMPLAZAR ULTIMO ELEMENTO
 var arr = [ 1, 2, 3, 4 ]
 arr[arr.length-1] = "Z" // [ 1, 2, 3, "Z" ]


//AGREGAR UN VALOR AL PRINCIPIO
 var arr = [ 1, 2, 3, 4 ]
 arr.unshift(0) // [ 0, 1, 2, 3, 4 ]

//AGREGAR VALOR AL FINAL
 var arr = [ 1, 2, 3, 4 ]
 arr.push(5)         // [ 1, 2, 3, 4, 5 ]
 arr[arr.length] = 6 // [ 1, 2, 3, 4, 5, 6 ]


//ELIMINAR EL PRIMER ELEMENTO
 var arr = [ 1, 2, 3, 4 ]
 arr.shift(); // [ 1, 2, 3 ]

//ELIMINAR EL ULTIMO ELEMENTO
 var arr = [ 1, 2, 3, 4 ]
 arr.pop() // [ 1, 2, 3 ]


//RECUPERA LOS VALORES DESDE LA POSICION ESPECIFICADA; parametro: (desde)
 var arr = [ 1, 2, 3, 4 ]
 arr = arr.slice(2) // [ 3, 4 ]

//RECUPERA LOS VALORES DESDE LA POSICION ESPECIFICADA HASTA EL ANTERIOR DE LA SEGUNDA POSICION ESPECIFICADA; parametros: (desde, hasta antes de)
 var arr = [ 1, 2, 3, 4, 5, 6 ]
 arr = arr.slice(2, 5) // [ 3, 4, 5 ]


//AGREGAR VALOR INTERMEDIO; parametros: splice(posicion, elementos a sobreescribir, [valor1, valor2, ...])
 var arr = [ 1, 2, 3, 4 ]
 arr = arr.splice(1, 0, "A", "B") // [ 1, "A", "B", 2, 3, 4 ]

 var arr = [ 1, 2, 3, 4 ]
 arr = arr.splice(1, 1, "A", "B") // [ 1, "A", "B", 3, 4 ] 

 var arr = [ 1, 2, 3, 4 ]
 arr = arr.splice(1, 2, "A", "B") // [ 1, "A", "B", 4 ]


//BUSCAR PRIMERA POSICION DE UN VALOR
 var arr = [ 1, 2, 3, 4, 3 ]
 arr.indexOf(3)  //  2
 arr.indexOf(10) // -1

//BUSCAR ULTIMA POSICION DE UN VALOR
 var arr = [ 1, 2, 3, 4, 3 ]
 arr.lastIndexOf(3)  //  4
 arr.lastIndexOf(10) // -1


//FUCIONAR ARRAYS (CONCATENAR)
 var a = [ 1, 2, 3 ]
 var b = [ "A", "B", "C" ]
 var ab = a.concat(b) // ab = [ 1, 2, 3, "A", "B", "C" ]
 
//FUCIONAR TODOS LOS VALORES DE UN ARRAY EN UN STRING
 var arr = [ 1, 2, 3, 4 ]
 arr = arr.join() // "1,2,3,4"

 var arr = [ 1, 2, 3, 4 ]
 arr = arr.join("") // "1234"

 var arr = [ 1, 2, 3, 4 ]
 arr = arr.join(" ; ") // "1 ; 2 ; 3 ; 4"


//RECONOCER SI SE TRATA DE UN ARRAY/OBJETO
 var arr = [ 1, 2, 3, 4 ]; 
 typeof arr == "object" //true

//RECONOCER SI SE TRATA DE UN ARRAY
 var arr = [ 1, 2, 3, 4 ]; 
 Array.isArray(arr) //true
