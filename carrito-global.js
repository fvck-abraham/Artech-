function obtenerCarrito() {

    return JSON.parse(
        localStorage.getItem('carrito')
    ) || [];
}

function guardarCarrito(carrito) {

    localStorage.setItem(
        'carrito',
        JSON.stringify(carrito)
    );
}

function actualizarContador() {

    const contador =
    document.getElementById('cartCount');

    if(!contador) return;

    const cantidad =
    obtenerCarrito().length;

    contador.textContent = cantidad;

    contador.style.display =
    cantidad > 0
    ? 'flex'
    : 'none';
}

function agregarAlCarrito(nombre,precio,imagen){

    const carrito =
    obtenerCarrito();

    carrito.push({
        nombre,
        precio,
        imagen
    });

    guardarCarrito(carrito);

    /* UPDATE INMEDIATO */
    actualizarContador();
}

function comprarAhora(nombre,precio,imagen){

    agregarAlCarrito(
        nombre,
        precio,
        imagen
    );

    window.location.href =
    'Carrito.html';
}

/* CARGA RAPIDA */
actualizarContador();

/* CUANDO CARGA EL DOM */
document.addEventListener(
    'DOMContentLoaded',
    actualizarContador
);

/* SINCRONIZA ENTRE PAGINAS */
window.addEventListener(
    'storage',
    actualizarContador
);