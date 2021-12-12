function DivCardContact() {
    let contenedorMensajeContacto = document.getElementById("contenedorMensajeContacto");
    contenedorMensajeContacto.classList.toggle("contenedorMensajeContactoAfter");
    let createElement = document.createElement("div");
    createElement.innerHTML = `<p>Nombre: </br>${arrFin[arrFin.length - 1].fullName}</p><p>Telefono: </br>${arrFin[arrFin.length - 1].phone}</p></br>`;
    contenedorMensajeContacto.appendChild(createElement);
    setTimeout(() => {
        document.getElementById("contenedorMensajeContacto").classList.remove("contenedorMensajeContactoAfter")
    }, 2500)
    setTimeout(() => {
        contenedorMensajeContacto.removeChild(createElement)
    },2500)
}
