const usuarioJSON = JSON.parse(localStorage.getItem("listUsuarios"));


function iniciarSesion(){
    console.log(usuarioJSON)

    const emailValidar = document.getElementById("email").value;
    const passValidar = document.getElementById("pass").value;

    console.log(emailValidar, passValidar)

    const verificar = usuarioJSON.find(elemento => elemento.correo === emailValidar && elemento.password === passValidar);

    if (verificar){
        alert("Inicio de sesion exitoso")
        localStorage.setItem("usuariologueado", JSON.stringify(verificar));
        window.location.href = "/";
    
    }
}



