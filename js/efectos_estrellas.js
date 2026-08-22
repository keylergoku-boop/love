


/*------------------------------------------------------
    constante para crear los div dentro del div madre 
    y seran las estrellairis
-------------------------------------------------------*/

const fondo = document.querySelector(".fondo-estrella");

crearEstrellas(400);


/*------------------------------------------------------
    funcion para crear las estrellas
-------------------------------------------------------*/

function crearEstrellas(cantidad) {

    for (let i = 0; i < cantidad; i++) {

        const estrella = document.createElement("div");

        estrella.classList.add("estrella");

        posicionAleatoria(estrella);

        tamañoAleatorio(estrella);

        animacionAleatoria(estrella);

        fondo.appendChild(estrella);


    }

}


/*------------------------------------------------------
    posicion aleatoria
-------------------------------------------------------*/

function posicionAleatoria(estrella) {

    estrella.style.left = Math.random() * window.innerWidth + "px";
    estrella.style.top = Math.random() * window.innerHeight + "px";
}


/*------------------------------------------------------
    tamaño aleatorio
-------------------------------------------------------*/

function tamañoAleatorio(estrella) {

    const tamaño = Math.random() * 6 + 4;

    estrella.style.width = tamaño + "px";

    estrella.style.height = tamaño + "px";

}


/*------------------------------------------------------
    animaciones aleatorias
-------------------------------------------------------*/

function animacionAleatoria(estrella) {

    const duracionCaida = (Math.random() * 10 + 8) + "s";

    if (Math.random() < 0.1) {

        estrella.classList.add("brillante");

        const duracionBrillo = (Math.random() * 1 + 20) + "s";

        estrella.style.animationDuration =
            duracionCaida + ", " + duracionBrillo;

        estrella.style.animationDelay =
            -(Math.random() * 40) + "s, " +
            -(Math.random() * 50) + "s";

    } else {

        estrella.style.animationDuration = duracionCaida;

        estrella.style.animationDelay =
            -(Math.random() * 40) + "s";

    }

}


/*------------------------------------------------------
    animación de caída
-------------------------------------------------------*/

function velocidad(estrella, esInicio) {

    if (esInicio) {

        estrella.speed = Math.random() * 1 +  1;

    }
}

function caer() {

    const estrellas = document.querySelectorAll(".estrella");

    estrellas.forEach((estrella) => {

        if (!estrella.speed) {

            velocidad(estrella, true);

        }

        let y = parseFloat(estrella.style.top);

        y += estrella.speed;

        if (y > window.innerHeight) {

            y = -20;

            estrella.style.left =
                Math.random() * window.innerWidth + "px";

            velocidad(estrella, false);

        }

        estrella.style.top = y + "px";

    });

    requestAnimationFrame(caer);

}

caer();
