function mensajeExitoErr (contenedor, textoDeMensaje, clase, tiempoFuera) {
    $(contenedor).prepend(`<div>
                                <div class="${clase}">
                                    <p>${textoDeMensaje}</p>
                                </div>
                        </div>`).show(400);
    
    setTimeout(()=> {
        $(contenedor).hide()
    },tiempoFuera)
}

