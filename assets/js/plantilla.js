function plantilla ( vivienda ) {
    return `
        <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${ vivienda.src }"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${ vivienda.nombre }
                </h5>
                <p class="card-text">
                  ${ vivienda.descripcion }
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${vivienda.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${vivienda.habitaciones} Habitaciones |
                  <i class="fas fa-bath"></i> 3 Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${vivienda.costo}</p>
                
                ${
                  vivienda.smoke
                  ?`
                   <p class="text-success"><i class="fas fa-smoking"></i> Se permite fumar`
                  :`<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar`
                }
                
                </p>
                ${
                  vivienda.pets
                  ?`<p class="text-success"><i class="fa-solid fa-paw"></i> Se permiten mascotas`

                  :`<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas`
                }
                </p>
              </div>
            </div>
          </div>

    `
}