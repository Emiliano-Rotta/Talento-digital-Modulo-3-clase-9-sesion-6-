
               //0        1    2
var array = ["Emiliano", 31, false]

// console.log(array[1])
//                             
// var ejercicio = [[],[],[[],[["Aqui"],[]],[],[]],[],[]]

// console.log(ejercicio[2][1][0][0])

//length
// El método length devuelve la longitud de un array, es decir, el número de elementos que contiene. Es una propiedad, no una función, por lo que no lleva paréntesis.

// var ejemploLength = ["leon", "gato", "perro"]
// console.log(ejemploLength.length) // 3

//-------------------------------------
//push    MODIFICA EL ARRAY ORIGINAL
// // El método push() agrega uno o mas elementos al final de un array y devuelve la nueva longitud del array
// var ejemploPush = ["leon", "gato", "perro"]
// ejemploPush.push("caballo") 
// console.log(ejemploPush)
// ejemploPush.push("murcielago", "mariposa")
// console.log(ejemploPush)

//-------------------------------------

//pop     MODIFICA EL ARRAY ORIGINAL
// El método pop() elimina el último elemento de un array y lo devuelve. El array original se modifica y su longitud disminuye en 1.

// var ejemploPop = ["leon", "gato", "perro"]
// ejemploPop.pop() 

// console.log(ejemploPop)

//-------------------------------------

//unshift  MODIFICA EL ARRAY ORIGINAL
// // El método unshift() agrega uno o más elementos al principio de un array y devuelve la nueva longitud del array.
// var ejemploUnShift = ["leon", "gato", "perro"]
// ejemploUnShift.unshift("murcielago", "mariposa")
// console.log(ejemploUnShift)

//-------------------------------------

//shift
// El método shift() elimina el primer elemento de un array y lo devuelve. El array original se modifica y su longitud disminuye en 1.

// var ejemploShift = ["leon", "gato", "perro"]
// ejemploShift.shift() 
// ejemploShift.shift()
// console.log(ejemploShift)

//-------------------------------------



//splice
// El método splice() cambia el contenido de un array eliminando, reemplazando, o agregando elementos. Toma tres argumentos: el índice en el que empezar, el número de elementos a eliminar, y los elementos a agregar.
// var ejemploSplice = ["leon", "gato", "perro","murcielago", "mariposa"]


// ejemploSplice.splice(1) // borra desde la posición 1 en adelante
// ejemploSplice.splice(1, 2 ) // borra desde la posición 1 2 elementos
// ejemploSplice.splice(1, 2, "jirafa", "Elefante") // borra desde la posición 1, 2 elementos y agrega el resto, en ese lugar.
// ejemploSplice.splice(4, 0, "jirafa", "Elefante")

// console.log(ejemploSplice)


//-------------------------------------

// Consigna: Crea un array vacío llamado let nombres = []; y utiliza push() para agregar tres nombres. Luego, imprime el array completo.
// Respuesta:

// Consigna: Crea un array let paises = ["Argentina", "Brasil", "Chile", "Uruguay"]; y utiliza pop() dos veces. ¿Cuál es el array resultante?
// Respuesta:


// Consigna: Crea un array let letras = ["a", "b", "c", "d"]; y utiliza shift() hasta que el array esté vacío. ¿Qué valor retorna cada vez que se usa shift()?
// Respuesta:


// Consigna: Crea un array let animales = ["gato", "perro"]; y utiliza unshift() para agregar "león" y "tigre" al principio. Imprime el array resultante.
// Respuesta:


// Consigna: Dado el array let numeros = [1, 2, 5, 6];, utiliza splice() para agregar los números 3 y 4 entre el 2 y el 5. Imprime el array resultante.


// ------------------------------]
// En este ejercicio vamos a utilizar varios métodos para manipular un array de frutas. Debes realizar las siguientes acciones utilizando los métodos length(), push(), pop(), shift(), unshift() y splice().

// Crea un array con las siguientes frutas: "manzana", "banana", "naranja", "pera".
// Agrega la fruta "uva" al final del array.
// Elimina la primera fruta del array.
// Añade la fruta "mango" al inicio del array.
// Elimina la segunda fruta del array y reemplázala con "kiwi".
// Muestra en consola la longitud del array en cada paso.

