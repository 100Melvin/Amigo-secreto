// Array para almacenar nombres
let amigos = [];

// Funcion para anhiadir un nombre
function anhiadir() {
    const imputNombre = document.getElementById('amigo');
    const nombreAmigo = imputNombre.value;

    // Validar que el campo no este vacio
    if (nombreAmigo == '') {
        alert('Por favor, inserta uno o mas nombres. ');
        return;
    }
    // Verificar que el nombre no este en la lista
    if (amigos.includes(nombreAmigo)) {
        alert('El nombre '+ nombreAmigo +' ya esta en la lista, ingresa otro. ');
        return;
    }

    // Agregar el nombre a la lista
    amigos.push(nombreAmigo);
    // Limpiar el campo de ingresar
    imputNombre.Value = "";



    //---------------- Funcion para actualizar la lista ----------------------
    function actualizarLista() {
        const lista = document.getElementById('listaAmigos');

        // Limpiar el contenido y actualizar la lista
        lista.innerHTML = ""; // Limpiar el contenedor para mostrar la lista

        // Ver y rrecorrer toda la lista con un ciclo for
        for (let i = 0; i < amigos.length; i++) {
            const li = document.createElement('li');
            li.textContent = amigos[i];
            lista.appendChild(li);
        }
    }

    // Mostrar y actualizar lista
    actualizarLista();
}




// Funcion para seleccionar un amigo aleatorio




//---------------------------------------------
function sortearAmigo() {
    // verificar que hayya amigos en la lista
    if (amigos.length == 0) {  // verificar si la lista -amigos- esta vacia
        alert('La lista esta vacia, No se puede sortear. Agrega almenos uno. ')
        return;
    }
    // generar un numero aleatorio
    let tamanhio = amigos.length;
    let longitudLista = tamanhio;

    let numero = Math.floor(Math.random()* longitudLista)+ 1; // genera un numero aleatorio
    let resta = (numero - 1);

    // obtener el nombre sorteado
    const amigoSorteado = amigos[resta]; // usa el numero entero como indice para mostrar el nombre de la lista
    
    // Mostrar el resultado en la views HTML
    const resultado = document.getElementById('resultado')

    // Limpiar el contenido y actualizar la lista
    resultado.innerHTML = ""; // Limpiar el contenedor para mostrar la lista
    //---------------------------------------------
    const listSorteado = document.createElement('li');
    listSorteado.textContent = 'El Amigo secreto es: ' + amigoSorteado;
    resultado.appendChild(listSorteado);

}
