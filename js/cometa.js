const cnCometas = document.querySelector(".contenedor-cometa");
const cometas = [];

crearCometa(2);
moverCometas();

function crearCometa(cantidad) {

    for (let i = 0; i < cantidad; ++i) {

        const cometa = document.createElement("div");

        cometa.classList.add("cometa");

        randomTamano(cometa);
        posicionesR(cometa);

   
        cometa.velocidad = Math.random() * 4 + 2;


        cometas.push(cometa);

        cnCometas.appendChild(cometa);
    }
}

function randomTamano(cometa) {

    const ancho = Math.random() * 200 + 150;
    const alto = Math.random() * 10 + 8;

    cometa.style.width = ancho + "px";
    cometa.style.height = alto + "px";
}

function posicionesR(cometa) {

    cometa.x = Math.random() * 200 - 200;
    cometa.y = Math.random() * 200 - 200;

    cometa.style.left = cometa.x + "px";
    cometa.style.top = cometa.y + "px";

    cometa.style.transform = "rotate(45deg)";
}

function moverCometas() {

    cometas.forEach(cometa => {

  
        cometa.x += cometa.velocidad;
        cometa.y += cometa.velocidad;

        cometa.style.left = cometa.x + "px";
        cometa.style.top = cometa.y + "px";

        
        if (cometa.x > window.innerWidth || cometa.y > window.innerHeight) {

            cometa.x = Math.random() * 200 - 200;
            cometa.y = Math.random() * 200 - 200;
        }

    });

    requestAnimationFrame(moverCometas);
}