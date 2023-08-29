
// Funciones para mostrar y ocultar formularios
let formularioActual;

function mostrarFormulario(formularioId) {
    const formulario = document.getElementById(formularioId);

    if (formularioActual) {
        formularioActual.style.display = "none";
    }

    formulario.style.display = "block";
    formularioActual = formulario;
}

// Iniciar sesión
function iniciarSesion() {
    mostrarFormulario("formularioInicioSesion");
}

// Crear cuenta
function crearCuenta() {
    mostrarFormulario("formularioRegistro");
}

// Asociar eventos a botones
const btnInciarSesion = document.getElementById("btnInciarSesion");
btnInciarSesion.addEventListener("click", iniciarSesion);

const btnCrearCuenta = document.getElementById("btnCrearCuenta");
btnCrearCuenta.addEventListener("click", crearCuenta);

// Validar y registrar usuario
function validarYRegistrarUsuario() {
    // Obtener los valores de los inputs
    const nuevoUsuario = document.getElementById("nuevoUsuario").value;
    const contraseña = document.getElementById("crearContraseña").value;
    const repetirContraseña = document.getElementById("repetirContraseña").value;

    // Condicionales para ver que los valores estén completados
    if (nuevoUsuario === "" || contraseña === "" || repetirContraseña === "") {
        alert("Debes completar todos los campos");
        return;
    }

    // Verificar si las contraseñas coinciden
    if (contraseña !== repetirContraseña) {
        alert("Las contraseñas no coinciden");
        return;
    }

    // Obtener los datos existentes del Local Storage o inicializar un array vacío
    const userData = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verificar si el usuario ya existe
    const existingUser = userData.find(user => user.usuario === nuevoUsuario);
    if (existingUser) {
        alert("El usuario ya está registrado");
        return;
    }

    // Agregar el nuevo usuario al array
    userData.push({ usuario: nuevoUsuario, contraseña: contraseña });

    // Guardar el array actualizado en el Local Storage
    localStorage.setItem("usuarios", JSON.stringify(userData));

    // Limpiar los campos del formulario
    document.getElementById("nuevoUsuario").value = "";
    document.getElementById("crearContraseña").value = "";
    document.getElementById("repetirContraseña").value = "";

    // Mensaje de éxito
    alert("Usuario registrado con éxito");
    navegar();
}

// Asociar evento al botón Aceptar y Enviar
const btnAceptarYEnviar = document.getElementById("btnAceptarYEnviar");
btnAceptarYEnviar.addEventListener("click", validarYRegistrarUsuario);

// Función para redireccionar a otra página
function navegar() {
    window.location.href = "./pages/page-1.html";
}

// Función para resetear el formulario
function resetearFormulario(e) {
    e.preventDefault();
    document.querySelectorAll('input[type="text"], input[type="password"]').forEach(input => input.value = '');
    alert("Decidiste Cancelar. Gracias");
}
function validarIncioSesion(e) {
  e.preventDefault();
  
  const iniciarSesionUsuario = document.getElementById("inputUsuarioInicioSesion").value;
  const iniciarSesionContraseña = document.getElementById("inputContraseñaInicioSesion").value;
  const userData = JSON.parse(localStorage.getItem("usuarios"));

  // Verificar si el usuario existe en el userData y si la contraseña coincide
  const usuarioEncontrado = userData.find(user => user.usuario === iniciarSesionUsuario);

  if (usuarioEncontrado && usuarioEncontrado.contraseña === iniciarSesionContraseña) {
    alert('Inicio de sesión exitoso.');
    navegar();
  } else {
    alert('Credenciales incorrectas o el usuario no está registrado.');
  }
}

// Asociar evento al botón Cancelar
const btnCancelar = document.getElementById("btnCancelar");
btnCancelar.addEventListener("click", resetearFormulario);

// Asociar evento al botón Ingresar Sesión de la página 2
const btnIngresarSesionPage02 = document.getElementById("btnIngresarSesion");
btnIngresarSesionPage02.addEventListener("click", validarIncioSesion);




//EN ESTA SECCION ESTARA EL CODIGO DE CREAR CUENTA;
// const btnInciarSesion = document.getElementById("btnInciarSesion");
// btnInciarSesion.addEventListener("click", iniciarSesion);

// const btnCrearCuenta = document.getElementById("btnCrearCuenta");
// btnCrearCuenta.addEventListener("click", crearCuenta);

// let formularioActual;
// function mostrarFormulario(formularioId) {

//     const formulario = document.getElementById(formularioId);
    
//     if (formularioActual) {
//         formularioActual.style.display = "none";
//     }
    
//     formulario.style.display = "block";
//     formularioActual = formulario;
// }

// function iniciarSesion() {
//   mostrarFormulario("formularioInicioSesion");
// } 
// function crearCuenta() {
//   mostrarFormulario("formularioRegistro");
//   const usuarioNuevo = document.getElementById('usuarioNuevo').value;
//     const contraseña = document.getElementById('contraseña').value;
//     const repetirContraseña = document.getElementById('repetirContraseña').value;

//     if (contraseña !== repetirContraseña) {
//         alert('Las contraseñas no coinciden. Inténtalo de nuevo.');
//         return;
//     }

//     const userData = {
//         usuario: usuarioNuevo,
//         contraseña: contraseña
//     };

//     localStorage.setItem(usuarioNuevo, JSON.stringify(userData));
//     alert('Cuenta creada exitosamente.');
// }

// function btnAceptaryEnviar(e){
//   e.preventDefault();
//   // Obtener los valores de los inputs
//   const nuevoUsuario = document.getElementById("nuevoUsuario").value;
//   const contraseña = document.getElementById("crearContraseña").value;
//   const repetirContraseña = document.getElementById("repetirContraseña").value;
//   // condicionales para ver que los valores esten completados 
//   if (nuevoUsuario === "" || contraseña === "" || repetirContraseña === "") {
//     alert("Debes completar todos los campos");
//     return;
//   }
//   // Verificar si las contraseñas coinciden antes de continuar
//   if (contraseña !== repetirContraseña) {
//     alert("Las contraseñas no coinciden");
//     return;
//   }
//     if (userData && userData.contraseña === contraseña) {
//         alert('Inicio de sesión exitoso.');
//     } else {
//         alert('Credenciales incorrectas o el usuario no está registrado.');
//     }
//   // Obtener los datos existentes del Local Storage o inicializar un array vacío
// const userData = JSON.parse(localStorage.getItem(DatosDeLosUsarios)) || [];

//   // Agregar el nuevo usuario al array
//   usuariosGuardados.push(DatosDeLosUsarios);

//   // Guardar el array actualizado en el Local Storage
//   localStorage.setItem('usuarios', JSON.stringify(userData));

//   // Limpiar los campos del formulario
//   document.getElementById("nuevoUsuario").value = "";
//   document.getElementById("crearContraseña").value = "";
//   document.getElementById("repetirContraseña").value = "";

//   // Mensaje de éxito
//   alert("Usuario registrado con éxito");  
//   navegar();  
// }

// function navegar() {
//   window.location.href = "./pages/page-1.html";
// }
// function resetear(e) {s
//   e.preventDefault(); // Evitar el restablecimiento del formulario

//   document.querySelectorAll('input[type="text"], input[type="password"]').forEach(input => input.value = '');
//   alert(`Decidiste Cancelar. Gracias`);
// }

// const aceptar = document.getElementById("btnAceptarYEnviar")
// aceptar.addEventListener("click",btnAceptaryEnviar)   
// // // Agregar un evento de clic al botón "Cancelar"
// const cancelar =  document.getElementById("btnCancelar")
// cancelar.addEventListener("click",resetear);

  
// //generar el evento del elemento id 
// const btnIniciarSesionPage02 = document.getElementById("btnIngresarSesion");
// btnIniciarSesionPage02.addEventListener("click",iniciarSesion);
// // cuando el usuario apriete el btn de crear cuenta , se ejecutara la funcion crearCuenta; se mostrara el div que contiene ese codigo, 




// luego en los inputs se cargaran los valores y al hacer click en el btn de enviar ,
// se ejecutara la funcion de aceptaryEnviar() que ya tiene otra funcion adentro (bienvenida)

//debo realizar un localstorage que guarde la info y la reutilice en el incio de sesion



// mensaje de bienvenida en el dom al usuario REgistrado


// OTRA SECCION 

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

// const cancelar2 = document.getElementById("btnCancelar2").addEventListener("click", resetear2);
// const otraConsulta = document.getElementById("btnNuevaConsulta").addEventListener("click", newConstult);
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

// btnEnviarDatosForm = document.getElementById("btnEnviarForm").addEventListener("click", enviarDatos);

// Obtener el array de empleados desde el localStorage
const empleadosJSON = localStorage.getItem("empleados");
const empleadosParseado = JSON.parse(empleadosJSON) || [];
const ultimoEmpleado = empleadosParseado;

// 3RA SECCION 

//eesto hay que corregir yconseguir que no se pise con el otro codigo 
