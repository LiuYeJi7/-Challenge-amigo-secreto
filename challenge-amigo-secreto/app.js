// Lista de amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value;

    // Validar si está vacío o solo espacios
    if (nombre.trim() === "") {
        alert("El campo no puede estar vacío.");
        return;
    }

    nombre = nombre.trim();

    // Validar duplicados (sin importar mayúsculas o minúsculas)
    let existe = false;
    for (let i = 0; i < amigos.length; i++) {
        if (amigos[i].toLowerCase() === nombre.toLowerCase()) {
            existe = true;
            break;
        }
    }

    if (existe) {
        alert("Ese nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre);
    input.value = "";
    mostrarLista();
}

// Función para mostrar la lista en pantalla
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres en la lista.");
        return;
    }

    if (amigos.length < 2) {
        alert("Agrega al menos dos nombres para hacer el sorteo.");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let elegido = amigos[indice];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "<p>El amigo secreto es: <strong>" + elegido + "</strong></p>";
}

// Función para reiniciar el sorteo
function reiniciarSorteo() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    alert("La lista ha sido reiniciada.");
}
