/*------------------------------------------------------
    Contenedor de planetas
-------------------------------------------------------*/

const contenedor = document.querySelector(".contenedor-planetas");

crearPlanetas(9);

/*------------------------------------------------------
    Crear planetas
-------------------------------------------------------*/

function crearPlanetas(cantidad) {
  const nombres = [
    "sol",
    "mercurio",
    "venus",
    "tierra",
    "marte",
    "jupiter",
    "saturno",
    "urano",
    "neptuno",
  ];

  for (let i = 0; i < cantidad; i++) {
    const planeta = document.createElement("div");

    planeta.classList.add("planetas", nombres[i]);

    tamañoPlaneta(planeta, i);

    posicionPlaneta(planeta, i);

    velocidadRotacion(planeta);

    comportamientoBoton(planeta, () => {
      comportamientoModal(nombres[i]);
    });

    contenedor.appendChild(planeta);
  }
}

/*------------------------------------------------------
    Tamaño de cada planeta
-------------------------------------------------------*/

function tamañoPlaneta(planeta, indice) {
  const tamaños = [160, 50, 55, 70, 80, 90, 110, 50, 40];

  planeta.style.width = tamaños[indice] + "px";
  planeta.style.height = tamaños[indice] + "px";
}

/*------------------------------------------------------
    Posición fija
-------------------------------------------------------*/

function posicionPlaneta(planeta, indice) {
  const posiciones = [
    { x: 10, y: 300 },
    { x: 250, y: 350 },
    { x: 370, y: 350 },
    { x: 490, y: 350 },
    { x: 600, y: 350 },
    { x: 750, y: 350 },
    { x: 900, y: 350 },
    { x: 1100, y: 350 },
    { x: 1250, y: 350 },
  ];

  planeta.style.left = posiciones[indice].x + "px";
  planeta.style.top = posiciones[indice].y + "px";
}

/*------------------------------------------------------
    Velocidad de rotación
-------------------------------------------------------*/

function velocidadRotacion(planeta) {
  planeta.angulo = 0;

  planeta.velocidad = Math.random() * 0.2 + 0.05;
}

/*------------------------------------------------------
    Comportamiento del botón
-------------------------------------------------------*/

function comportamientoBoton(elemento, funcion) {
  elemento.style.cursor = "pointer";

  elemento.addEventListener("click", funcion);
}

/*------------------------------------------------------
    Comportamiento del modal
-------------------------------------------------------*/

function comportamientoModal(planeta) {
  const abrir = document.querySelector(`.${planeta}`);

  const modal = document.querySelector(`.modal[data-planeta="${planeta}"]`);

  const cerrar = modal.querySelector(".close");

  abrir.addEventListener("click", (e) => {
    e.preventDefault();

    modal.classList.add("modal--show");
  });

  cerrar.addEventListener("click", (e) => {
    e.preventDefault();

    modal.classList.remove("modal--show");
  });
}

/*------------------------------------------------------
    Girar planetas
-------------------------------------------------------*/

function girar() {
  const planetas = document.querySelectorAll(".planetas");

  planetas.forEach((planeta) => {
    planeta.angulo += planeta.velocidad;

    planeta.style.transform = `rotate(${planeta.angulo}deg)`;
  });

  requestAnimationFrame(girar);
}

girar();
