function tarjetaMensajeroAsignado(contenedor, direccion1) {
    // genero numero aleatorio entre 0 y 4 para asignar valor de indice de array de mensajero a mostrar
    let indiceAleat = Math.floor((Math.random() * (5 - 0)) + 0);
    spinner("#body");
    setTimeout(()=> {
        $(".contspinner").hide();
        $(contenedor).append(`<div class="conTarjetaMens">
                                <div>
                                    <p class="pinfoExt" style=" height: auto; background-color: #d2d2d2; margin-right: 10px;"> Tu solicitud ah sido exitosa, a continuacion los datos de el mejor logimensajero encargado de realizar tu servicio. </p>
                                    <p class="spanfoExt" style=" height: auto; background-color: #171717;color: #d2d2d2; margin: 10px 10px 0 0;  font-size: 10px">En menos de 30 minutos llegara a la direccion uno: ${direccion1.toUpperCase()}, recuerda comunicarte con tu mensajero asignado para mantener mejor comunicacion y coordinacion</p>
                                </div>
                                <div class="divNombreFoto" style=" margin-right: 10px;">
                                    <p class="pNombreMens">${mensajeros[indiceAleat].nombreMens.toUpperCase()} ${mensajeros[indiceAleat].apellidoMens.toUpperCase()}</p>
                                    <p class="imgMens"><img src="${mensajeros[indiceAleat].fotoMens}" alt="foto Mensajero Asignado Cologista"></p>
                                </div>
                                <div class="divInfoMens">
                                    <p class="pVehicu"> Vehiculo: <span class="spanInfMn"> ${mensajeros[indiceAleat].tipoVehiculoMens.toUpperCase()}</span></p>
                                    <p class="pPlacaVehic"> Placa: <span class="spanInfMn">${mensajeros[indiceAleat].placaVehicMens.toUpperCase()}</span></p>
                                    <p class="pTelMens"> Telefono: <span class="spanInfMn">${mensajeros[indiceAleat].telefonoMens}</span></p>
                                </div>
                            </div>`);
    // doy estilos dinamicamente a contenedor y contenedor de tarjeta con info de mensajero
    $(contenedor).css({"z-index": "1000",width: "100%", height: "100%", position: "fixed", top:"0", left:"0", "background-color": "#17171750"}).slideDown(500)
    $(".conTarjetaMens").css({width: "60%", position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)","background-color": "#da0039", display: "flex"/*, "flex-direction": "column"*/,"justify-content": "space-evenly", "align-items": "center"});
    $(".spanInfMn, .spanfoExt").css({display: "block"})
    // alaceno datos en localstorage
    localStorage.setItem("LastMensAsign", JSON.stringify(mensajeros[indiceAleat]));
    },1500);
    // programo evento para cerrar ventana de info de mensajero asignado
    const conten = document.querySelector(contenedor)
    window.addEventListener("click", (evt) => {
        if (evt.target === conten) {$(contenedor).slideUp();$(".pNombreMens, .imgMens, .pVehicu, .pPlacaVehic, .pTelMens, .pinfoExt").text("")
        }
    }); 
    
};