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

//VER CUANTOS ELEMENTOS ALMACENA UN ARRAY
 var arr = [ 1, 2, 3, 4 ]
 arr.length // 4

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

 
//RECONOCER SI SE TRATA DE UN ARRAY/OBJETO
 let arr = [ 1, 2, 3, 4 ]; 
 typeof arr == "object" //true

//RECONOCER SI SE TRATA DE UN ARRAY
 let arr = [ 1, 2, 3, 4 ]; 
 Array.isArray(arr) //true

//
