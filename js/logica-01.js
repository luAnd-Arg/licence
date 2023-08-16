
// pedido de realizar una nueva consulta !!crear Funcion
//aqui debo realizar la funcion que capture los datos del formulario 
// Define la clase Empleado
class Empleado {
  constructor(nombre, apellido, dni, nacimiento, edad, pais, provincia, ciudad, direccion, mail, telefono, cargo, numeroCargo, inicioLaboral, obraSocial, numeroObraSocial) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.nacimiento = nacimiento;
    this.edad = edad;
    this.pais = pais;
    this.provincia = provincia;
    this.ciudad = ciudad;
    this.direccion = direccion;
    this.mail = mail;
    this.telefono = telefono;
    this.cargo = cargo;
    this.numeroCargo = numeroCargo;
    this.inicioLaboral = inicioLaboral;
    this.obraSocial = obraSocial;
    this.numeroObraSocial = numeroObraSocial;
  }
}

const empleados = []; // Array para almacenar objetos Empleado

function consulta() {
  nombre = document.getElementById("inputNombre").value;
  apellido = document.getElementById("inputApellido").value;
  dni = document.getElementById("inputDni").value;
  nacimiento = document.getElementById("inputNacimiento").value;
  edad = document.getElementById("inputEdad").value;
  pais = document.getElementById("inputPais").value;
  provincia = document.getElementById("inputProvincia").value;
  ciudad = document.getElementById("inputCiudad").value;
  direccion = document.getElementById("inputDireccion").value;
  mail = document.getElementById("inputMail").value;
  telefono = document.getElementById("inputTelefono").value;
  cargo = document.getElementById("inputCargo").value;
  numeroCargo = document.getElementById("inputNumeroCargo").value;
  inicioLaboral = document.getElementById("inputInicioLaboral").value;
  obraSocial = document.getElementById("inputObraSocial").value;
  numeroObraSocial = document.getElementById("inputNumeroObraSocial").value;
  // Crea un nuevo objeto Empleado
  nuevoEmpleado = new Empleado(
    nombre,
    apellido,
    dni,
    nacimiento,
    edad,
    pais,
    provincia,
    ciudad,
    direccion,
    mail,
    telefono,
    cargo,
    numeroCargo,
    inicioLaboral,
    obraSocial,
    numeroObraSocial
  );

  // Agrega el nuevo empleado al array
  empleados.push(nuevoEmpleado);

 // Imprimir en el DOM
 tabla1 = document.getElementById("tabla1");
 tabla2 = document.getElementById("tabla2");
 tabla3 = document.getElementById("tabla3");

 const fila1 = tabla1.insertRow();
 const fila2 = tabla2.insertRow();
 const fila3 = tabla3.insertRow();

 const celdaNombre = fila1.insertCell(0);
 const celdaApellido = fila1.insertCell(1);
 const celdaDNI = fila1.insertCell(2);
 const celdaNacimiento = fila1.insertCell(3);
 const celdaEdad = fila1.insertCell(4);

 celdaNombre.textContent = nuevoEmpleado.nombre;
 celdaApellido.textContent = nuevoEmpleado.apellido;
 celdaDNI.textContent = nuevoEmpleado.dni;
 celdaNacimiento.textContent = nuevoEmpleado.nacimiento;
 celdaEdad.textContent = nuevoEmpleado.edad;

 const celdaPais = fila2.insertCell(0);
 const celdaProvincia = fila2.insertCell(1);
 const celdaCiudad = fila2.insertCell(2);
 const celdaDireccion = fila2.insertCell(3);
 const celdaMail = fila2.insertCell(4);
 const celdaTelefono = fila2.insertCell(5);

 celdaPais.textContent = nuevoEmpleado.pais;
 celdaProvincia.textContent = nuevoEmpleado.provincia;
 celdaCiudad.textContent = nuevoEmpleado.ciudad;
 celdaDireccion.textContent = nuevoEmpleado.direccion;
 celdaMail.textContent = nuevoEmpleado.mail;
 celdaTelefono.textContent = nuevoEmpleado.telefono;

 const celdaCargo = fila3.insertCell(0);
 const celdaNumeroCargo = fila3.insertCell(1);
 const celdaInicioLaboral = fila3.insertCell(2);
 const celdaObraSocial = fila3.insertCell(3);
 const celdaNumeroObraSocial = fila3.insertCell(4);

 celdaCargo.textContent = nuevoEmpleado.cargo;
 celdaNumeroCargo.textContent = nuevoEmpleado.numeroCargo;
 celdaInicioLaboral.textContent = nuevoEmpleado.inicioLaboral;
 celdaObraSocial.textContent = nuevoEmpleado.obraSocial;
 celdaNumeroObraSocial.textContent = nuevoEmpleado.numeroObraSocial;


 // guardar en el localStorage el array de empleados 
localStorage.setItem("empleados", JSON.stringify(empleados));
console.log (nuevoEmpleado.nombre) //aqui esta imprimiendo lo que le pongo en el primer formulario
 }

function tomarOnclick(){
 consulta();
}

function resetearFormulario() {

  document.getElementById("formDatos").reset();
 // Eliminar Y Restablecer la tabla 
 while (tabla1.rows.length > 1) {
  tabla1.deleteRow(1);
}
while (tabla2.rows.length > 1) {
  tabla2.deleteRow(1);
}
while (tabla3.rows.length > 1) {
  tabla3.deleteRow(1);
}
}

function newConstult(confirmacion) {
  confirmacion = prompt("¿Deseas realizar una nueva consulta? - Escribe si o no.");
  while (confirmacion !== "si" && confirmacion !== "no") {
    confirmacion = prompt("Debes escribir si o no.");
  }
  if (confirmacion === "si") {
    resetearFormulario();
  } else {
    alert("Muchas gracias, fin del proceso");
  }
}

function resetear2() {
  resetearFormulario();
}

const cancelar2 = document.getElementById("btnCancelar2").addEventListener("click", resetear2);
const otraConsulta = document.getElementById("btnNuevaConsulta").addEventListener("click", newConstult);
//funcion realizada con el onInput desde pages 1
function mostrarAñosDisponibles(ultimoAño) {
  const añoActual = new Date().getFullYear();
  añosDisponibles = [];
  ultimoAñoParaUsar = ultimoAño;
  
  for (let año = parseInt(ultimoAño) + 1; año <= añoActual; año++) {
    if(año >= 2016) {
      añosDisponibles.push(año);
    }
  }
  const listadoDeAños = document.getElementById("listadoDeAños");
  listadoDeAños.innerText = `Licencias disponibles: ${añosDisponibles.join(", ")}`;

 
  añosDisponibles.forEach(element => {
    const option = document.createElement("option");
    option.value = element;
    option.textContent = element;
  }
 );
}

//aqui debo hacer el llamado de la funcion del btn de enviar 
let añoElegido = "";
function enviarDatos(e) {
  e.preventDefault();
  const añoConsecutivo = añosDisponibles[0];
  let meses = document.getElementById("mesDelAño");
  const mesElegido = meses.value;
  let quincenas = document.getElementById("quincenaSeleccionada");
  const quincenaValor = quincenas.value;
  // crear el contenido del text 

 
  const mensaje = document.getElementById("mensajeFinal");
  const mensajeFinal = `hola ,${nuevoEmpleado.nombre} decidiste que haras uso de tu licencia del año ${añoConsecutivo} , en el mes de ${mesElegido} los dias ${quincenaValor} . Muchas Gracias` ;
  mensaje.textContent = mensajeFinal;
  }
// crear el evento del btn 

btnEnviarDatosForm = document.getElementById("btnEnviarForm").addEventListener("click", enviarDatos);

// Obtener el array de empleados desde el localStorage
const empleadosJSON = localStorage.getItem("empleados");
const empleadosParseado = JSON.parse(empleadosJSON) || [];
const ultimoEmpleado = empleadosParseado;