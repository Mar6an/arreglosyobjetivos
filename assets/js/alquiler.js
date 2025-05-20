const alquilerDiv = document.querySelector("#alquiler");
const alquilerRow = alquilerDiv.querySelector(".row");

propiedades_alquiler.forEach( (alquiler, index) => {
        alquilerRow.innerHTML += plantilla(alquiler)
} )