

const ventaDiv = document.querySelector("#venta");
const ventaRow = ventaDiv.querySelector(".row");

propiedades_venta.forEach( (venta) => {
      ventaRow.innerHTML += plantilla(venta)



});