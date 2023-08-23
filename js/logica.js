//EN ESTA SECCION ESTARA EL CODIGO DE CREAR CUENTA;
// cuando el usuario apriete el btn de crear cuenta , se ejecutara la funcion crearCuenta; se mostrara el div que contiene ese codigo, 

function crearCuenta(){
  mostrarFormulario();

}
function mostrarFormulario() {
  const formulario = document.getElementById("formularioRegistro");
  formulario.classList.add("mostrar");
  formulario.classList.add("ocultarBtn")
}

// luego en los inputs se cargaran los valores y al hacer click en el btn de enviar ,
// se ejecutara la funcion de aceptaryEnviar() que ya tiene otra funcion adentro (bienvenida)
function btnAceptaryEnviar(e){
  e.preventDefault();
  bienvenida();
  alert("enviar")
}
function bienvenida(e) {
  e.preventDefault(); // Evitar el envío del formulario
  userNew = document.getElementById("nuevoUsuario").value;
  contraseña = document.getElementById("crearContraseña").value;
  repetirContraseña = document.getElementById("repetirContraseña").value;
  alert(`¡Hola ${userNew}! Tu registro fue exitoso, tu contraseña es: ${contraseña}`);
  validacion()
}
//aqui debemos realizar las validaciones para ejecutar las funciones de ingresos si los datos son correctos 
function validacion() {
  if (contraseña == repetirContraseña) {
    navegar();//si esta correcto , se ejecutara la funcion de navegar(); esta nos lleva a la segunda pages
  } else {
    alert("Las Contraseñas no coinciden")
  }
}
function navegar() {
  window.location.href = "./pages/page-1.html";
}


function resetear(e) {
  e.preventDefault(); // Evitar el restablecimiento del formulario

  document.querySelectorAll('input[type="text"], input[type="password"]').forEach(input => input.value = '');
  alert(`Decidiste Cancelar. Gracias`);
}

// Agregar un evento de clic al botón "Aceptar y Enviar"
const aceptar = document.getElementById("btnAceptaryEnviar").addEventListener("click",bienvenida)


// Agregar un evento de clic al botón "Cancelar"
const cancelar =  document.getElementById("btnCancelar").addEventListener("click",resetear);





// realizar una base de datos para recuperar los valores ingresados por el usuario


// let letra = "c" // Le asignamos con un string que va con comillas
// let letras = "d"

// letra = "e"
// letra = "f"
// let g = "Hola"
// letra = 5 // 5 es un Number y no lleva comillas - Eso lo diferencia de un String como por ejemplo "5"

// const numerito = '0'

// const numerito5 = 0



//console.log(letra)
//console.log(numerito)


// let nombreUsuario = prompt("Ingrese su nombre")

// console.log(nombreUsuario)


// let nombreUsuario1 = "Su nombre es Pirulo"

// console.log(nombreUsuario1)

// alert("Hola Gente " + nombreUsuario)

// let nombreUsuario = prompt("Ingrese su nombre")
// alert("Su nombre es: " + nombreUsuario)

// let usuario = prompt("Ingrese su nombre y apellido")

// alert("hola! bienvenido " + usuario)
// let añoActual = new Date().getFullYear();

// let añoNacimiento = prompt("¿En que año naciste?");

// let edad = añoActual - añoNacimiento;
// alert("Tienes " + edad + " años.");

// let user = prompt("¿quien eres?");
// console.log("Hola ," + user);

// let año_actual = new Date().getFullYear();
// let nacimiento = prompt("indica tu año de nacimiento (sin puntos)")
// let edad_actual = año_actual - nacimiento ;
// console.log("tienes " + edad_actual + " años.");
// let correo_electronico = prompt ("ahora " + user + " indica tu correo electronico");
// console.log ("muy bien " + user + " su registro finalizo con el correo " + correo_electronico + ".")
// let nombre = prompt("Bienvenido, ingrese su nombre para comenzar su registro")
// let apellido = prompt("Bienvenido " + nombre + ", ingrese su apellido")
// let correoElectronico = prompt("Muy bien " + nombre + ", ingrese su correo electronico para finalizar su registro")
// alert("Su registro se ha realizado con exito, en instantes recibira la confirmacion en su correo electronico:" + correoElectronico)


// CLASE 02

// if (true){
//     console.log("Es verdadero") // Este codigo si se va a ejecutar
// }

// if (false){
//     console.log("Esto es Falso") // Este codigo no se va a ejecutar
// }

// const numero = 0 // Un solo = Significa Asignacion
// console.log(numero)

// if ( numero != 0 ){ // Dos == Significa Igual
//     console.log("Es verdadero, a Vale: " + numero)
// } else {
//     console.log("Es Falso, numero Vale = " + numero)
// }

// let nombreUsuario = prompt("Ingrese su Nombre")

// if ( nombreUsuario != "" ) {
//     alert("Bienvenido " + nombreUsuario)
// } else {
//     alert("No ha ingresado nada.!")
// }

// const number = prompt("Ingrese un Numero")

// if ( number == 0 ){
//     console.log("Usted ingreso el Numero " + number)
// } else if ( number < 0 ) {
//     console.log("Usted ingreso un Numero negativo")
// } else if ( number > 0 ) {
//     console.log("Usted ingreso un Numero positivo")
// } else {
//     console.log("Usted no ingreso un Numero Valido")
// }

// Ejercicio 1:
// Escribe un script que solicite al usuario un número e imprima en la consola si ese número es positivo, negativo o cero.
// Ejercicio 2:
// Escribe un script que solicite al usuario dos números e imprima en la consola el número mayor de los dos.
// Ejercicio 3:
// Escribe un script que solicite al usuario su edad e imprima en la consola si es mayor de edad o no (considerando 18 años como la mayoría de edad).
// Ejercicio 4:
// Escribe un script que solicite al usuario un número e imprima en la consola si ese número es par o impar.
// Ejercicio 5:
// Escribe un script que solicite al usuario tres números e imprima en la consola el número más grande de los tres.

// Ejercicio 1:

// const number = prompt("Ingrese un numero")

// if (number == 0) {
//     console.log("Ustede eligió el número " + number)
// } else if (number > 0){
//     console.log ("Usted eligió un número positivo")
// } else {
//     console.log ("Usted eligió un número negativo")
// }

// if (number === null) {
//     console.log("Usted canceló la operación");
// } else if (number === "") {
//     console.log("Usted no ingresó ningún número");
// } else if (isNaN(number)) {
//     console.log("Usted ingresó un valor no numérico");
// } else if (number == 0) {
//     console.log("Usted ingresó el número 0");
// } else if (number < 0) {
//     console.log("Usted ingresó un número negativo");
// } else if (number > 0) {
//     console.log("Usted ingresó un número positivo");
// } else {
//     console.log("Usted ingresó un número inválido");
// }

//ejercicio 2:

// const number1 = prompt("ingrese el 1er numero")
// const number2 = prompt("ingrese el 2do numero")

// function numeroMayor() {
//     if (number1 < number2) {
//         console.log( "mayor " + number2)
//     } else  {
//         console.log("mayor " + number1)
//     }
// }
// numeroMayor();

//ejercio 3:

// let edad ="";
// function calcularEdad (){
//     do {
//         edad = prompt ("su edad es?")
//     } while (isNaN(edad) || edad === " ")

//     edad = parseInt(edad)
//     if (edad >= 18) {
//         console.log("Puede ingresar");
//     } else {
//         console.log("No cuentas con el requerimiento, indicaste que tienes " + edad + " años. Eres menor de edad");
//     }
//     return edad;
// }
// calcularEdad();

// //ejercicio 4;
// function parOimpar(edad) {
//     if (edad % 2 === 0) {
//         console.log ("tu edad es par")
//     }
//     else{
//         console.log("tu edad es impar")
//     }
// }
// parOimpar(edad);

// //ejercicio 5

// function imprimirSueldos() {
//     recibo1 = prompt ("sueldo 1")
//     recibo2 = prompt ("sueldo 2")
//     recibo3 = prompt ("sueldo 3")

//     // conversion a decimales
//     recibo1 = parseFloat(recibo1);
//     recibo2 = parseFloat (recibo2);
//     recibo3 = parseFloat (recibo3);
//     if (recibo1 >= recibo2 && recibo1 >= recibo3) {
//         return "$" + recibo1;
//     }
//     else if (recibo2 >= recibo1 && recibo2 >= recibo3) {
//         return "$" + recibo2;
//     }
//     else {
//         return "$" + recibo3
//     }
// }
// let recibosSueldos = imprimirSueldos();
// console.log("el sueldo mas alto fue de " + recibosSueldos);
// const number1 = 0
// const number2 = 2

// if ( number1 == 0 && number2 == 1 ) { // las 2 && Significan y
//     console.log("Se cumplieron Ambas condiciones.!")
// } else {
//     console.log("La condicion es Falsa.!")
// }

// if ( number1 == 0 || number2 == 1 ) { // Las || Significan o
//     console.log("Se cumplio una o Ambas condiciones.!")
// } else {
//     console.log("La condicion es Falsa.!")
// }

// if ( !(number1 == 0) || number2 == 1 ) { // Las || Significan o
//     console.log("Se cumplio una o Ambas condiciones.!")
// } else {
//     console.log("La condicion es Falsa.!")
// }


// let nombre = prompt("Ingrese un Nombre")
// if ((nombre != "") && (nombre == "ANA") || (nombre == "ana")){
//     alert("El nombre ingresado es Ana")
// } else {
//     alert("Error al ingresar el Nombre")
// }

// let numero = parseInt("5")
// console.log(numero)

// let number = parseInt(prompt("Ingrese un numero"))
// if (isNaN(number)){
//     console.log(number + " Esto no es un numero")
// } else {
//     console.log(number)
// }


// CLASE 03

// for ( let i = 10; i >= 0; i-- ) {
//     console.log(i)
// }

// let nombre = "Alejandro Di Stefano" // Variable Global

// // console.log(nombre.length)

// for ( let i = 0; i < nombre.length; i++ ) { // i es una Variable Local
//     console.log(i)
// }

// let i = "dfdfgdfg"
// console.log(i)


// let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// // En cada repetición, calculamos el número ingresado x el número de repetición (i)
// for (let i = 0; i <= 10; i+=2) {
//     let resultado = ingresarNumero * i ;
//     console.log(ingresarNumero +" x "+ i +" = "+ resultado);
// }


// for (let i = 1; i <= 5; i++) {
//     // En cada repetición solicitamos un nombre.
//     let ingresarNombre = prompt("Ingresar nombre");
//     // Informamos el turno asignado usando el número de repetición (i).
//     console.log(" Turno  N° " + i + " Nombre: " + ingresarNombre);
// }

// for (let i = 1; i <= 10; i++) {
//     //Si la variable i es igual 5 interrumpo el for.
//     if(i == 5){
//         break;
//     }
//     console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//     //Si la variable i es igual 5 interrumpo el for.
//     if(i == 5){
//         continue;
//     }
//     console.log(i);
// }

// let repetir = false

// while(repetir){
//     console.log("Imprimo hasta el Infinito.!!!!!")
// }

// let entrada = prompt("Ingresar un dato");
// //Repetimos con While hasta que el usuario ingresa "ESC"
// while (entrada != "ESC") {
//     console.log("El usuario ingresó " + entrada);
//     //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
//     entrada = prompt("Ingresar otro dato");
// }


// let numero

// do {
//     numero = parseInt(prompt("Ingresar un Numero"))
// }
// while(isNaN(numero))
// console.log("El numero ingresado es: " + numero)

// let repetir = false;
// do {
//     console.log("¡Solo una vez!");
// } while (repetir)

// let numero = 0;
// do {
//     //Repetimos con do...while mientras el usuario ingresa un n°
//     numero = prompt("Ingresar Número");
//     console.log(numero);
//     //Si el parseo no resulta un número se interrumpe el bucle.
// } while (parseInt(numero));

// let entrada = prompt("Ingresar un nombre");
// //Repetimos hasta que se ingresa "ESC"
// while (entrada != "ESC") {
//     switch (entrada) {
//         case "":
//             alert("HOLA " + entrada);
//             break;
//         case "JUAN":
//             alert("HOLA JUAN");
//             break;
//         default:
//             alert("¿QUIÉN SOS?")
//             break;
//     }
//     entrada = prompt("Ingresar un nombre");
// }

//  CLASE 04


// function consologueo() {
//     console.log("Hola Coders.!!!")
// }

// Las Funciones declaradas de esta forma tienen un Scope Global

//consologueo()

// function solicitarNombreDeUsuario() {
//     let nombreDeUsuario = prompt("Ingrese su Nombre de Usuario")
//     console.log("El nombre del Usuario es: " + nombreDeUsuario)
// }


// console.log(nombreDeUsuario) // nombreDeUsuario Tiene un Scope Local
//solicitarNombreDeUsuario()

// for (i = 0; i <= 5; i++) {
//     solicitarNombreDeUsuario()
// }

// const num1 = 5
// const num2 = 6
// const num3 = 12

// const resultado = num1 + num2 + num3

// console.log(resultado)

// function funcionConParametros( parametro1, parametro2, parametro3 ){
//     console.log( parametro1 + " " + parametro2  + " " + parametro3)
// }

// funcionConParametros("Hola", false , 5 )

// let resultado  // Tiene Scope Global
//console.log(resultado) // resultado No tiene valor asignado

// function suma( num1 , num2 ){
//     resultado = num1 + num2
// }
// //console.log(resultado) // resultado No tiene valor asignado, porque para que funcione hay que llamar 1ro a la funcion suma()


// suma(4 , 8) // Llamo a la funcion y le asigno valores a cada uno de sus parametros

// console.log(resultado) // Imprime el resultado de suma()


// function sumar( num1 , num2 ){
//     return num1 + num2 // Retorname el resultado de esta Suma
// }

// let resultado = sumar( 10 , 25 )

// console.log(resultado)
// ------------------------------------------------------------

// let añoActual = 2023
// let lic = prompt("introduzca el año de su ultima licencia, sin puntos");
// function licencias(añoActual) {
//     switch (lic) {
//         case "2018":
//             return añoActual <= lic;
//             break;
//         case "2019":
//             return añoActual <= lic;
//             break;
//         case "2020":
//             return añoActual <= lic;
//             break;
//         case "2021":
//             return añoActual <= lic;
//             break;
//         case "2022":
//             return añoActual <= lic;
//         case "2023": añoActual == lic;
//         default:
//             return "No tienes";
//             break;
//     }
// }

// console.log(licencias(añoActual,lic))

// const suma = function ( a, b ) { return a + b } // Funcion Anonima > Se asigna a una Variable Globla o Local
// const resta = function ( a , b ) { return a - b }
// console.log(suma(22,35))
// console.log(resta(22,35))


// Funcion Flecha > Nace a partir de ES6

// const suma = (a ,b) => { return a + b }
// console.log(suma(22,35))


//clase 05

// let nombre = "Alejandro"
// let apellido = "Delgado"
// let edad = 39
// let pais = "Argentina"

// console.log(nombre)


// Definimos el Objeto persona
// const persona = {
//     nombre: "Alejandro",
//     apellido: "Delgado",
//     edad: 39,
//     pais: "Argentina"
// }

// console.log(persona.nombre)
// console.log(persona.apellido)

// const persona1 = {
//     nombre: "Mariana",
//     apellido: "Perez",
//     edad: 30,
//     pais: "Uruguay"
// }
// console.error(persona1)
//console.log(persona1.edad)

//console.log(persona["pais"])

// persona1.nombre = "Leticia"

//console.log(persona1.nombre)

// console.warn(persona)
// console.warn(persona1)

// Definimos una Funcion Constructora
// function Persona(nombre, apellido, edad, pais) {
//     this.nombre = nombre
//     this.apellido = apellido
//     this.edad = edad
//     this.pais = pais
// }

// const persona = new Persona("Alejandro",
//                     "Delgado",
//                     39,
//                     "Argentina"
//                     )

// console.log(persona)

// const persona1 = new Persona("Nicolas",
//                     "Tomatis",
//                     31,
//                     "Argentina"
//                     )

// console.log(persona1)

// Otra forma de Definir un Objeto
// function Persona(objeto) {
//     this.nombre = objeto.nombre
//     this.apellido = objeto.apellido
//     this.edad = objeto.edad
//     this.pais = objeto.pais
// }

// const persona1 = new Persona( // Nueva INSTANCIA de Persona
//     {
//         nombre: "Nicolas",
//         apellido: "Tomatis",
//         edad: 31,
//         pais: "Argentina"
//     }
// )
// const persona2 = new Persona(
//     {
//         nombre: "Diego",
//         apellido: "Torres",
//         edad: 50,
//         pais: "Argentina"
//     }
// )
// const persona3 = new Persona(
//     {
//         nombre: "Nicolas",
//         apellido: "Tomatis",
//         edad: 31,
//         pais: "Argentina"
//     }
// )
// const persona4 = new Persona(
//     {
//         nombre: "Lionel",
//         apellido: "Messi",
//         edad: 36,
//         pais: "Argentina"
//     }
// )
// console.log(persona1, persona2, persona3)
// console.error(persona4)

// function Auto(objeto){ // Me pide un Objeto
//     this.chasis = objeto.chasis
//     this.motor = objeto.motor
//     this.color = objeto.color
//     this.marca = objeto.marca
// }

// const auto1 = new Auto(
//     {
//         chasis: 155665232355,
//         motor: 1.6,
//         marca: "Ford",
//         color: "Azul"
//     }
// )

// // console.log(auto1)

// function Persona(nombre, apellido, pais, edad) {
//     this.nombre = nombre
//     this.apellido = apellido
//     this.edad = edad
//     this.pais = pais
// }

// const persona = new Persona("Alejandro",
//                     "Delgado",
//                     39,
//                     "Argentina"
//                     )

// console.log(persona)

// function Auto(objeto, objeto1){ // Metodo Constructor
//     this.chasis = objeto.chasis
//     this.motor = objeto.motor
//     this.color = objeto.color
//     this.marca = objeto.marca
//     this.puertas = objeto.puertas
//     this.estado = objeto1.estado
//     this.modelo = objeto1.modelo

//     this.cantidadPuertas = function () {
//         console.info("Tengo " + this.puertas + " Puertas")
//     }
// }

// const autito = new Auto(
//     {
//         chasis: 15555623563233,
//         motor: "V8",
//         color: "Rojo",
//         marca: "Ferrari",
//         puertas: 3
//     },
//     {
//         estado: "Chocado",
//         modelo: 2020
//     }
// )

// console.log(autito)
// autito.cantidadPuertas()

// console.log(autito.motor)

// Recorro el Objeto y me fijo si existe esta Clave
// console.log("origen" in autito) // Si da false es porque no existe
// console.log("motor" in autito) // Si da true es porque existe

// for ( const i in autito){ // Este ciclo for usa a la const i para recorrer e instancia a cada clave del objeto
//     console.log(autito[i])
// }

// Clases

// class Auto{
//     constructor(marca, modelo, color) {
//         this.marca = marca
//         this.modelo = modelo
//         this.color = color
//     }
//     mostrarMarca(){
//         console.log("La marca del Auto es: " + this.marca)
//     }
//     mostrarModelo(){
//         console.warn("El modelo es: " + this.modelo)
//     }
// }

// const autito = new Auto(
//     "Ford Mustang",
//     2021,
//     "Gris Plomo"
// )

// console.log(autito)
// autito.mostrarMarca()
// autito.mostrarModelo()

// const autito1 = new Auto(
//     "Ferrari",
//     2023,
//     "Roja"
// )

// console.log(autito1)
// autito1.mostrarMarca()
// autito1.mostrarModelo()


// clase 06

// // Arrays



// let hola = "Hola" // length me cuenta la cantidad de caracteres del String

// const arrayUno = [
//     "Hola", "Como", "estan", "?"
// ] // length me cuenta la cantidad de elementos del Array

// // console.log(arrayUno)
// // console.log(arrayUno.length)
// // console.log(hola.length)

// const arrayDos = [
//     1, 2, 3, 4, 5, 6, 6, 122, 5, 12, 7, 99, 12, 22, 5656
// ]

// // console.log(arrayDos)

// const arrayTres = [
//     "Hola", 3, false, true, "Que tal"
// ]
// // console.log(arrayTres)

// // console.log(arrayUno[0]) // Me imprime "Hola"
// // console.log(arrayUno[4]) // Cuando quiero acceder a un valor que no esta en el Array me da undefined

// // console.log(arrayDos[6])

// let resultado = arrayDos[2] + arrayDos[6] + arrayDos[7]
// // console.log(resultado)

// // for(let indice = 0; indice <= 8; indice++){
// //     console.log(arrayDos[indice])
// // }

// // for(let indice = 0; indice < arrayDos.length; indice++){
// //     console.log(arrayDos[indice])
// // }

// // for(let i = 0; i < 8; i++){
// //     console.log(arrayUno[i])
// // }

// arrayUno.push("Mauricio")


// // for(let i = 0; i < arrayUno.length; i++){
// //     console.log(arrayUno[i])
// // }

// arrayUno.unshift("Primero") // Es muy peligroso el unshift, porque cambia todos los indices
// arrayUno.unshift("Apagar la luz")



// // arrayUno.shift() // Sirve para eliminar el 1er Elemento del Array
// // arrayUno.pop() // sirve para eliminar el ultimo elemento del Array



// arrayUno.splice(1,3) // Esto elimina varios elementos consecutivos del Array



// console.log(arrayUno)
// console.log(arrayUno[0])

// console.log( arrayUno.join(" "))

// console.log( arrayUno.join(" Chocolate "))

// console.log( arrayUno.join(""))

// console.log( arrayUno.join("******"))

// const arrayCuatro = arrayUno.concat(arrayDos)

// // console.log(arrayCuatro)

// const arrayCinco = arrayCuatro.slice(5,12)
// // console.log(arrayCinco)

// console.log(arrayCinco.indexOf(6))
// console.log(arrayCinco.indexOf(16))
// console.log(arrayUno)
// console.log(arrayUno.indexOf("Hola"))
// console.log(arrayUno.indexOf("?"))

// console.log(arrayCinco.includes(6))
// console.log(arrayCinco.includes(16))

// console.log(arrayUno.includes("Hola"))
// console.log(arrayUno.includes("?"))

// arrayCinco.reverse() // Extremadamente Peligroso

// console.log(arrayCinco)

// Array con Objetos

// const objeto1 = {
//     id: 1,
//     producto: "Manteca"
// }
// const objeto2 = {
//     id: 2,
//     producto: "Chocolate"
// }

// const arraySeis = [
//     objeto1,
//     objeto2,
//     {
//         id: 3,
//         producto: "Sal"
//     }
// ]

// arraySeis.push(
//     {
//         id: 4,
//         producto: "Azucar"
//     },
//     {
//         id: 5,
//         producto: "Huevos"
//     }
// )

// console.log(arraySeis)

// for ( const i of arraySeis ) {
//     console.log( i.id )
//     console.log( i.producto )
// }


// Uso de Clases

// class Producto {
//     constructor(id, nombre, precio, stock) { // Habia que agregar el parametro stock
//         this.id = id;
//         this.nombre = nombre.toUpperCase();
//         this.precio = parseFloat(precio);
//         this.stock = stock; // Asignarle el parametro stock a la variable
//     }
//     obtenerPrecio() {
//         console.log("El precio del producto " + this.nombre + " es: $" + this.precio.toFixed(2) + " ARS");
//     }
//     obtenerStock() {
//         if (this.stock === true) {
//             console.log("Hay stock de: " + this.nombre);
//         } else {
//             console.log("No hay stock de: " + this.nombre);
//         }
//     }
//     calcularPrecioConIVA() {
//         const precioConIVA = this.precio * 1.21;
//         return precioConIVA.toFixed(2); // Faltaba asignarlo a una variable y que la retorne. .toFixed(2) me muestra solo 2 Decimales.
//     }
// }

// const productos = [];

// productos.push(
//     new Producto(
//         1,
//         "Azucar",
//         425.50,
//         false // cada producto tiene que tener si stock = true o false
//     )
// );
// productos.push(
//     new Producto(
//         2,
//         "Leche",
//         525.50,
//         false // cada producto tiene que tener si stock = true o false
//     )
// );
// productos.push(
//     new Producto(
//         3,
//         "Maiz",
//         125.50,
//         true // cada producto tiene que tener si stock = true o false
//     )
// );
// productos.push(
//     new Producto(
//         4,
//         "Mermelada",
//         658.70,
//         true // cada producto tiene que tener si stock = true o false
//     )
// );

// console.log(productos);

// for (const prod of productos) {
//     prod.obtenerPrecio();
// }

// for (const prod of productos) {
//     prod.obtenerStock();
// }

// for (const prod of productos) {
//     const precioConIVA = prod.calcularPrecioConIVA();
//     console.log("El precio con IVA del producto " + prod.nombre + " es: $" + precioConIVA + " ARS");
// }