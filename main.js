/* jalando elementos por ID */

let correo = document.getElementById("correo");
let contra = document.getElementById("contra");
let boton = document.getElementById("boton");
let bienvenido = document.getElementById("bienvenido");

/* Creando un usurario */

let usuarioR = "ulisesmondsobe@gmail.com"

let contraR = "prueba435"

const login = () => {
    let usuarioText = usuarioR.value

    let contraText = contraR.value

    if (usuarioText === usuarioR && contraText === contraR) {
        bienvenido.innerHTML = "Bienvenido"
    } else  {
        console.log ("Error")
    }

}

boton.addEventListener("click" , login);

