

/* TYPEWRITER */

const miniText =
"NEXT GEN TECHNOLOGY";

const title =
"Tecnología que impulsa el futuro.";

const text =
"Equipos electrónicos, repuestos premium, consolas y servicio técnico profesional.";

const miniElement =
document.getElementById(
    "typingMini"
);

const titleElement =
document.getElementById(
    "typingTitle"
);

const textElement =
document.getElementById(
    "typingText"
);

let miniIndex = 0;
let titleIndex = 0;
let textIndex = 0;

/* MINI */

function escribirMini(){

    if(miniIndex < miniText.length){

        miniElement.innerHTML +=
        miniText.charAt(miniIndex);

        miniIndex++;

        setTimeout(
            escribirMini,
            45
        );

    }else{

        setTimeout(
            escribirTitulo,
            300
        );

    }

}

/* TITULO */

function escribirTitulo(){

    if(titleIndex < title.length){

        titleElement.innerHTML +=
        title.charAt(titleIndex);

        titleIndex++;

        setTimeout(
            escribirTitulo,
            55
        );

    }else{

        setTimeout(
            escribirTexto,
            300
        );

    }

}

/* TEXTO */

function escribirTexto(){

    if(textIndex < text.length){

        textElement.innerHTML +=
        text.charAt(textIndex);

        textIndex++;

        setTimeout(
            escribirTexto,
            22
        );

    }

}

window.addEventListener(
    "load",
    escribirMini
);