window.onload = function(){
    verificarUsuario()
   
}

function cerrarsesion(){
    localStorage.setItem("usuariologueado", null);
    verificarUsuario()
}

function verificarUsuario(){
    const usuariologueado = JSON.parse(localStorage.getItem("usuariologueado"));
    if(usuariologueado){
        document.getElementById("login_item").style.visibility = "hidden";
        document.getElementById("nombre-usuario").textContent = usuariologueado.nombre
        document.getElementById("cerrar_sesion").style.visibility = "visible";
    } else{
        document.getElementById("login_item").style.visibility = "visible";
        document.getElementById("nombre-usuario").textContent = ""
        document.getElementById("cerrar_sesion").style.visibility = "hidden";
    }

}


barras = document.querySelector(".barras");
barras.onclick = function() {
    menuContent = document.querySelector(".menu");
    menuContent.classList.toggle("active");
}