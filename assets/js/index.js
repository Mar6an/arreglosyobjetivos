

const ventaDiv = document.querySelector("#venta");
const ventaRow = ventaDiv.querySelector(".row");

propiedades_venta.forEach( (venta, index) => {
  if (index < 3) 
    {
      ventaRow.innerHTML += plantilla(venta)


}
});


const alquilerDiv = document.querySelector("#alquiler");
const alquilerRow = alquilerDiv.querySelector(".row");

propiedades_alquiler.forEach( (alquiler, index) => {
    if (index < 3) 
      {
        alquilerRow.innerHTML += plantilla(alquiler)
}
} )
