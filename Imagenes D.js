

// GALERÍA DESLIZANTE

const slides = document.querySelectorAll(".gallery-slide");

const prevBtn = document.querySelector(".gallery-btn.prev");

const nextBtn = document.querySelector(".gallery-btn.next");

let currentSlide = 0;

// MOSTRAR IMAGEN

function showSlide(index){

    slides.forEach((slide,i)=>{

        slide.classList.toggle("active", i === index);

    });

}

// SIGUIENTE

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

}

// ANTERIOR

function prevSlide(){

    currentSlide--;

    if(currentSlide < 0){

        currentSlide = slides.length - 1;

    }

    showSlide(currentSlide);

}

// EVENTOS BOTONES

nextBtn.addEventListener("click", nextSlide);

prevBtn.addEventListener("click", prevSlide);

// AUTO SLIDE

setInterval(nextSlide, 5000);

// ===============================
// BOTONES PRODUCTO
// ===============================

const addToCartBtn = document.getElementById("addToCartBtn");

const buyNowBtn = document.getElementById("buyNowBtn");

// AGREGAR AL CARRITO

addToCartBtn.addEventListener("click", ()=>{

    agregarAlCarrito(
        "RTX 4090 ASUS ROG STRIX",
        18999,
        "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=1200&auto=format&fit=crop"
    );

});

// COMPRAR AHORA

buyNowBtn.addEventListener("click", ()=>{

    comprarAhora(
        "RTX 4090 ASUS ROG STRIX",
        18999,
        "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=1200&auto=format&fit=crop"
    );

});