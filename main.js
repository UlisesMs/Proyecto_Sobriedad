/* jalando elementos por ID */

let correo = document.getElementById("correo");
let contra = document.getElementById("contra");
let boton = document.getElementById("boton");
let bienvenido = document.getElementById("bienvenido");

/* Creando un usurario */

let usuarioR = "ulisesmondsobe@gmail.com"

let contraR = "prueba435"

const login = () => {
    let usuarioText = correo.value

    let contraText = contra.value

    if (usuarioText === usuarioR && contraText === contraR) {
        bienvenido.innerHTML = "Bienvenido"
        console.log("Bienvenido")
    } else  {
        console.log ("Error")
    }

}

boton.addEventListener("click" , login);

