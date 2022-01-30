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
                        </div>
                        <div class="contlogoutImg" style="margin:15px 80px 0 0">
                            <img src="img/logout.png" alt="logout" style="cursor: pointer" id="logoutImg">
                            <p class="psalzona" style="width:100%; height:10px; text-align:center; font-size: 8px"></p>
                        </div>
                        </div>`);
    // });
    $(".contDatesUserReg").css({ display: "flex", "justify-content": "space-between" });
    $("#logoutImg").css({filter: "invert(18%) sepia(89%) saturate(4147%) hue-rotate(335deg) brightness(80%) contrast(117%)"})
}
// function para la vista de los datos de usuario ya  previamente registrado o creado previamente tomando datos del localstorage (realizo de manera dierente a proposito (eprendi otra manera de llamar a los datos XD))
function showDatesUserOld(contenedor) {
        $(contenedor).prepend(`<div class="contDatesUserReg">
                        <div style="margin-left: 10px">
                            <h5>Bienvenido a tu zona</h5>
                            <h6 style="font-size: 12px">Usuario: ${JSON.parse(localStorage.getItem("usuarioActivo")).user}</h6>
                            <h6 style="font-size: 12px">nombre: ${JSON.parse(localStorage.getItem("usuarioActivo")).name} ${JSON.parse(localStorage.getItem("usuarioActivo")).lastName} </h6>
                            <h6 style="font-size: 12px">correo: ${JSON.parse(localStorage.getItem("usuarioActivo")).email}</h6>
                        </div>
                        <div class="contlogoutImg" style="margin:15px 80px 0 0">
                            <img src="img/logout.png" alt="logout" style="cursor: pointer" id="logoutImg">
                            <p class="psalzona" style="width:100%; height:10px; text-align:center; font-size: 8px"></p>
                        </div>
                        </div>`);
        $("#contModalIniSes").hide()
        $(".contDatesUserReg").css({ display: "flex", "justify-content": "space-between" });
        $("#logoutImg").css({filter: "invert(18%) sepia(89%) saturate(4147%) hue-rotate(335deg) brightness(80%) contrast(117%)"})
        $("#body").css({overflow: "visible"})
}
