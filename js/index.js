
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
function validarYRegistrarUsuario(e) {
    // Obtener los valores de los inputs
  const nuevoUsuario = document.getElementById("nuevoUsuario").value;
  const contraseña = document.getElementById("crearContraseña").value;
  const repetirContraseña = document.getElementById("repetirContraseña").value;

  // Condicionales para ver que los valores estén completados
  if (nuevoUsuario === "" || nuevoUsuario === " " || contraseña === "" || contraseña === " "  || repetirContraseña === "" || repetirContraseña === " ") {
      alert("Debes completar todos los campos");
      e.preventDefault();
      return;
  }

  // Verificar si las contraseñas coinciden
  if (contraseña !== repetirContraseña) {
      alert("Las contraseñas no coinciden");
      e.preventDefault();
      return;
  }

  // Obtener los datos existentes del Local Storage o inicializar un array vacío
  const userData = JSON.parse(localStorage.getItem("usuarios")) || []; //aqui mandamos la informacion al localstorage

  // Verificar si el usuario ya existe
  const usuarioYaCreado = userData.find(user => user.usuario === nuevoUsuario);//aplicamos el metodo find para buscar el usuario existente 
  if (usuarioYaCreado) {
      alert("El usuario ya está registrado");
      e.preventDefault();
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
  alert("Usuario registrado con éxito , inicia sesion");
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
    
}
function validarIncioSesion(e) {
  e.preventDefault();
  
  const iniciarSesionUsuario = document.getElementById("inputUsuarioInicioSesion").value;
  const iniciarSesionContraseña = document.getElementById("inputContraseñaInicioSesion").value;
  const userData = JSON.parse(localStorage.getItem("usuarios"));

  // Verificar si el usuario existe en el userData y si la contraseña coincide
  const usuarioEncontrado = userData.find(user => user.usuario === iniciarSesionUsuario); //volvemos a aplicar el metodo find 

  if (usuarioEncontrado && usuarioEncontrado.contraseña === iniciarSesionContraseña) {  
    swal.fire({
      title: `bienvenido ${iniciarSesionUsuario}`,
      text:"Se dara Inicio a tu sesion",
      icon: "success",})
    navegar();
  }
   else {
    swal.fire({
      title: "lo Sentimos, no estas registrado , ¡debes registrarte!",
      icon: "error",
  })
  }
}

// Asociar evento al botón Cancelar
const btnCancelar = document.getElementById("btnCancelar");
btnCancelar.addEventListener("click", resetearFormulario);

// Asociar evento al botón Ingresar Sesión de la página 2
const btnIngresarSesionPage02 = document.getElementById("btnIngresarSesion");
btnIngresarSesionPage02.addEventListener("click", validarIncioSesion);

//asignar el evento al boton de cancelar de Inicar Sesion 
const btnCancelarInicioSesion = document.getElementById("btnCancelarIniciarSesion");
btnCancelarInicioSesion.addEventListener("click",resetearFormulario);