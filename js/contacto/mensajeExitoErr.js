function mensajeExitoErr (contenedor, textoDeMensaje, clase, tiempoFuera) {
    $(contenedor).append(`<div>
                                <div class="${clase}">
                                    <p>${textoDeMensaje}</p>
                                </div>
                        </div>`).slideDown()
    setTimeout(()=> {
        $(contenedor).fadeOut(600)
    },tiempoFuera)
}

