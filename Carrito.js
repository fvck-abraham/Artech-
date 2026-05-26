/* =========================
   ELEMENTOS
========================= */

const cartItems =
document.getElementById(
'cartItems'
);

const totalElement =
document.getElementById(
'total'
);

const itemsCount =
document.getElementById(
'itemsCount'
);

const continueBtn =
document.getElementById(
'continueBtn'
);

const loginRequiredBox =
document.getElementById(
'loginRequiredBox'
);

const paymentBox =
document.getElementById(
'paymentBox'
);

const goLoginBtn =
document.getElementById(
'goLoginBtn'
);

const goRegisterBtn =
document.getElementById(
'goRegisterBtn'
);

/* =========================
   SESION
========================= */

/*
    ESTE OBJETO QUEDA LISTO
    PARA CONECTAR CON DB
    DESPUES
*/

const auth = {

    /* 
        VALIDAR SESION
        AQUI DESPUES PUEDES
        HACER FETCH A TU API
    */

    verificarSesion(){

        /*
            TEMPORAL
            SIMULA USUARIO
            LOGEADO
        */

        const usuario =
        localStorage.getItem(
        'usuario'
        );

        return usuario
        ? JSON.parse(usuario)
        : null;

    },

    /*
        LOGIN FUTURO
    */

    iniciarSesion(datos){

        /*
            AQUI IRA FETCH
            A TU BACKEND
        */

        console.log(
        'LOGIN FUTURO',
        datos
        );

    },

    /*
        REGISTER FUTURO
    */

    registrar(datos){

        /*
            AQUI IRA FETCH
            A TU BACKEND
        */

        console.log(
        'REGISTER FUTURO',
        datos
        );

    }

};

/* =========================
   CARRITO
========================= */

let carrito =
JSON.parse(
localStorage.getItem(
'carrito'
)
) || [];

/* =========================
   RENDER
========================= */

function renderizarCarrito(){

    cartItems.innerHTML = '';

    let total = 0;

    /* VACIO */

    if(carrito.length <= 0){

        cartItems.innerHTML = `

        <div class="empty-cart">

            <i class="fi fi-rr-shopping-cart"></i>

            <h2>
                Tu carrito está vacío
            </h2>

            <p>
                Agrega productos para continuar.
            </p>

        </div>

        `;

        totalElement.innerText =
        'Q0';

        itemsCount.innerText =
        '0';

        continueBtn.disabled =
        true;

        continueBtn.style.opacity =
        '.5';

        continueBtn.style.cursor =
        'not-allowed';

        return;

    }

    /* PRODUCTOS */

    carrito.forEach(
    (producto,index)=>{

        total += producto.precio;

        cartItems.innerHTML += `

        <div class="cart-item">

            <img
            src="${producto.imagen}"
            alt="${producto.nombre}">

            <div class="cart-item-info">

                <h3>
                    ${producto.nombre}
                </h3>

                <p>
                    Producto premium Artech
                </p>

                <span>
                    Q${producto.precio.toLocaleString()}
                </span>

            </div>

            <button
            class="remove-btn"
            onclick="eliminarProducto(${index})">

                <i class="fi fi-rr-trash"></i>

            </button>

        </div>

        `;

    });

    totalElement.innerText =
    'Q' + total.toLocaleString();

    itemsCount.innerText =
    carrito.length;

}

/* =========================
   ELIMINAR
========================= */

function eliminarProducto(index){

    carrito.splice(index,1);

    localStorage.setItem(
    'carrito',
    JSON.stringify(carrito)
    );

    renderizarCarrito();

}

/* =========================
   CONTINUAR COMPRA
========================= */

continueBtn.onclick = () => {

    /*
        VERIFICAR SESION
    */

    const usuario =
    auth.verificarSesion();

    /*
        SI NO HAY SESION
    */

    if(!usuario){

        loginRequiredBox
        .classList.remove(
        'hidden'
        );

        return;

    }

    /*
        SI HAY SESION
    */

    paymentBox.classList.remove(
    'hidden'
    );

    continueBtn.style.display =
    'none';

};

/* =========================
   REDIRECCIONES
========================= */

goLoginBtn.onclick = () => {

    window.location.href =
    'Login.html';

};

goRegisterBtn.onclick = () => {

    window.location.href =
    'Registro.html';

};

/* =========================
   PAYMENT SWITCH
========================= */

const paymentButtons =
document.querySelectorAll(
'.payment-option'
);

const paymentForms =
document.querySelectorAll(
'.payment-form'
);

paymentButtons.forEach(button=>{

    button.addEventListener(
    'click',
    ()=>{

        paymentButtons.forEach(btn=>{

            btn.classList.remove(
            'active'
            );

        });

        paymentForms.forEach(form=>{

            form.classList.remove(
            'active-form'
            );

        });

        button.classList.add(
        'active'
        );

        document
        .getElementById(
        button.dataset.target
        )
        .classList.add(
        'active-form'
        );

    });

});

/* =========================
   INICIAR
========================= */

renderizarCarrito();