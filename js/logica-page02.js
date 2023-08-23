// esste bloque es del btn inciarSesion;
function iniciarSesion(){ 
    window.location.href = "./pages/page-02.html";   
  }
  //eesto hay que corregir yconseguir que no se pise con el otro codigo 
  function inciarSesion(){
    iniciarSesionUsuario = document.getElementById("inputUsuarioInicioSesion").value;
    inciarSesionContraseña = document.getElementById ("inputContraseñaInicioSesion").value;
   alert(`hola ${iniciarSesionUsuario} tu contraseña es ${inciarSesionContraseña}`)  
   window.location.href = "./page-03.html";
  }
  