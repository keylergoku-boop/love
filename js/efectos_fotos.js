/*---------------------------------------------------------
    este nomas para las pocisiones aleatorias de las fotos
    me arrepenti al final y no lo hice asi, archivo basura es
-----------------------------------------------------------*/

const fotos = document.querySelectorAll(".content");

let posiciones = [];

fotos.forEach(foto => {

    let x = Math.random() * 70 + 5;
    let y = Math.random() * 60 + 5;

    foto.style.left = x + "%";
    foto.style.top = y + "%";

    let rotacion = Math.random() * 14 - 7;

    foto.style.transform = `rotate(${rotacion}deg)`;

});
