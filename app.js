let amigos = [];

function agregarAmigo() {
    const inputNombre = document.getElementById('amigo'); 

    if (inputNombre.value === '') {
        alert('El campo no puede estar vacío');
        return;
    }

    // Agregar nombre a la lista
    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = inputNombre.value;
    amigos.push(inputNombre.value);
    listaAmigos.appendChild(nuevoElemento);

    // Limpiar campo de texto
    inputNombre.value = '';
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    document.getElementById('resultado').textContent = amigoSorteado;

    //limpiar la lista y el arreglo
    amigos = [];
    listaAmigos.innerHTML = '';
}
