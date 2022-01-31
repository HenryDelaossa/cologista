// function para la vista de los datos de usuario registrado tomando datos del localstorage
function showDatesUserReg(contenedor) {
    // Users_nel.forEach(function (elnombre) {
        for (const elnombre of arrDatesLocalstorage)
        $(contenedor).prepend(`<div class="contDatesUserReg">
                        <div style="margin-left: 10px">
                            <h5>Bienvenido a tu zona</h5>
                            <h6 style="font-size: 12px">Usuario: ${elnombre[0].user}</h6>
                            <h6 style="font-size: 12px">nombre: ${elnombre[0].name} ${elnombre[0].lastName} </h6>
                            <h6 style="font-size: 12px">correo: ${elnombre[0].email}</h6>
                            <p class="ctnrDatesHour"></p>
                        </div>
                        <div class="contlogoutImg" style="margin:15px 80px 0 0">
                            <img src="img/logout.png" alt="logout" style="cursor: pointer" id="logoutImg">
                            <p class="psalzona" style="width:100%; height:10px; text-align:center; font-size: 8px"></p>
                        </div>
                        </div>`);
    // });
    $(".ctnrDatesHour").css({"font-size": "10px"})
    $(".contDatesUserReg").css({ display: "flex", "justify-content": "space-between" });
    $("#logoutImg").css({filter: "invert(18%) sepia(89%) saturate(4147%) hue-rotate(335deg) brightness(80%) contrast(117%)"});
    ctnrDatesHour();
    actualHrs();
}
// function para la vista de los datos de usuario ya  previamente registrado o creado previamente tomando datos del localstorage (realizo de manera dierente a proposito (eprendi otra manera de llamar a los datos XD))
function showDatesUserOld(contenedor) {
        $(contenedor).prepend(`<div class="contDatesUserReg">
                        <div style="margin-left: 10px">
                            <h5>Bienvenido a tu zona</h5>
                            <h6 style="font-size: 12px">Usuario: ${JSON.parse(localStorage.getItem("usuarioActivo")).user}</h6>
                            <h6 style="font-size: 12px">nombre: ${JSON.parse(localStorage.getItem("usuarioActivo")).name} ${JSON.parse(localStorage.getItem("usuarioActivo")).lastName} </h6>
                            <h6 style="font-size: 12px">correo: ${JSON.parse(localStorage.getItem("usuarioActivo")).email}</h6>
                            <p class="ctnrDatesHour"></p>
                        </div>
                        <div class="contlogoutImg" style="margin:15px 80px 0 0">
                            <img src="img/logout.png" alt="logout" style="cursor: pointer" id="logoutImg">
                            <p class="psalzona" style="width:100%; height:10px; text-align:center; font-size: 8px"></p>
                        </div>
                        </div>`);
                        
        $(".ctnrDatesHour").css({"font-size": "10px"})
        $("#contModalIniSes").hide()
        $(".contDatesUserReg").css({ display: "flex", "justify-content": "space-between" });
        $("#logoutImg").css({filter: "invert(18%) sepia(89%) saturate(4147%) hue-rotate(335deg) brightness(80%) contrast(117%)"});
        $("#body").css({overflow: "visible"});
        ctnrDatesHour();
        actualHrs()
        
}
// funcion para mostrar la fecha y hora del cliente o usuraio activo en la tarjeta de zona del usuario activo
function ctnrDatesHour () {
    let fecha = new Date();
    let dia = fecha.getDate();
    let mes = fecha.getMonth();
    mes++
    if (mes <= 9) mes = "0"+mes
    let anno = fecha.getFullYear();
    let hora = fecha.getHours();
    if (hora <= 9) hora = "0"+hora;
    let minutos = fecha.getMinutes();
    if (minutos <= 9) minutos = "0"+minutos;
    let segundos = fecha.getSeconds();
    if (segundos <= 9) segundos = "0"+segundos;
    $(".ctnrDatesHour").text(`${dia}/${mes}/${anno} - ${hora}:${minutos}:${segundos}`);
}
const actualHrs =  () => {
    setInterval(() => {
        ctnrDatesHour()
    }, 1000);
}
