// modoOscuroIndex
let buttonDark = document.getElementById("buttonDark")
buttonDark.addEventListener("click", () => {
    addDark()
    if (document.body.classList.contains("bodyDark")) {
        localStorage.setItem("modo", "dark")
        $("#btnActiContSerJs").css({border: "1px solid #da0039"})
    } else {
        localStorage.setItem("modo", "sunn")
        $(".pArr").css({color: "#171717"})
        $("#btnActiContSerJs").css({border: "none"})
    }
});
// evaluar local storage para modo tema de pagina
window.addEventListener("load", ()=> {
if (localStorage.getItem("modo") === "dark") {
        addDark()
    } else {
        return false;
    }
})
// efecto sobre barra de navegacion principal
let alturaInicial = window.scrollY
window.addEventListener("scroll", () => {
    let altura = window.scrollY
    scrollEffect(alturaInicial, altura)
    alturaInicial = altura
})
// creando modal de iniciar sesion sobre boton ingresar o iniciar sesion y boton flotente "ya estoy registrado" ⇊ (aplicare este modal en las demas paginas con la misma funcion)
// este modal antes estaba puesto con bootstrap, ahora lo implemento dinamicamente con js (eh ahorrado muchisimas lineas en html)
const btnIngresar = document.querySelectorAll("#btnIngresar")
const btnFlotIniSes = document.querySelectorAll("#btnFlotInSes");
btnFlotIniSes.forEach(function(click) {
    click.addEventListener("click", ()=> {
        modalIniSesion("#body", "1717178d", ".main-index");
        
    }) 
});
btnIngresar.forEach(function(click) {
    click.addEventListener("click", ()=> {
        modalIniSesion("#body", "#1717178d", ".main-index");
    }) 
});
// validacion localstorage para vista de datos de usuario en su zona, y ocultar los elementos no necesarios (formulario de registro y de iniciar sesion) cuando haya ingresado a "su zona"
var arrDatesLocalstorage = new Array()
arrDatesLocalstorage.push(JSON.parse(localStorage.getItem("users")))
// evaludo el local storage para mostrar datos si hay o no un usuario activo dentro de su zona
if (localStorage.getItem("users")) {
    // activo funcion que muestra datos de usuario activo en la pagina
    showDatesUserReg(".main-index");
    // elimino elementos no necesarios para usuario ya activo, como botones de iniciar sesion
    $("#btnIngresar, #btnFlotInSes, #buttonRegisRightDark, .div__parrafo-a").hide()
    $("#btnModal").text("Pedir servicio");
    ModalServ()
}
if (localStorage.getItem("usuarioActivo")){
    // elimino elementos no necesarios para usuario ya activo, como botones de iniciar sesion
    $("#btnIngresar, #btnFlotInSes, #buttonRegisRightDark, .div__parrafo-a").hide();
    // activo funcion que muestra datos de usuario activo en la pagina
    showDatesUserOld(".main-index");
    $("#btnModal").text("Pedir servicio");
    ModalServ()
}
// evento sobre imagen de saldia o de cerrar sesion, vuelvo a mostrar los elementos ocultos y borro el local storage
$("#logoutImg").click(()=>{
    localStorage.removeItem("users");
    localStorage.removeItem("usuarioActivo");
    $(".contDatesUserReg").hide();
    $("#btnIngresar, #btnFlotInSes, #buttonRegisRightDark, .div__parrafo-a").fadeIn(400);
    mensErrExiIniSes("#d2d2d2", `Regresa pronto, te esperamos!`, "120");
    setTimeout(()=> {
        window.location.reload()
    },1000)   
}).mouseenter(()=>{$(".psalzona").text("salir")}).mouseout(()=>{$(".psalzona").text("")})
// escucho evento de tecla esc para cerrar modales 
window.addEventListener('keyup',function(evt) {
    if (evt.key == "Escape") {
        $("#body").css({overflow:"visible"})
        // modal de iniciar sesion
        $(".divContFormModalIniSes").slideUp();
        $("#contModalIniSes").slideUp();
        // modal de servicio
        $("#contModal").slideUp()
    }
});
// creo ventana modal de calcular servicio en index apartir de evento click en boton para pedir primer servicio
const btnModal = document.getElementById("btnModal")
btnModal.addEventListener("click", () => {
    ModalServ()
})
// programando eventos y funciones dentro de modal pedir primer servicio a boton calcular
const btnCalcMod = document.getElementById("submitServmodCalcular")
btnCalcMod.addEventListener("click", (e) => {
    e.preventDefault()
    showValoresAndDist()
})
// programando eventos de boton borrar en modal pedir primer servicio
let arrDist = new Array ()
let arrVal = new Array()
let contNumKmDis = document.getElementById("contNumKmDis")
let createbDis = document.createElement("b");
let contValServi = document.getElementById("contValServ")
let createbValor = document.createElement("b")
createbValor.setAttribute("id", "bValr");
createbValor.style.color = "#da0039";
// eventos boton borrar
$("#resetMod").click(() => {
    $("#contNumKmDis").hide()
    $("#contValServ").hide()
    $("#menDesct").hide()
    $("#submitServmodCalcular").css({display: "inline-block"})
    $("#submitServmodConfirmar").css({display: "none"})
    $("#inputDirUno").prop('disabled', false);
    $("#inputDirDos").prop('disabled', false);
    if (contNumKmDis || contValServi ) {
        $(createbDis).text("")
        $(createbValor).text("")
    }    
}) 
// evento en boton confirmar dentro de modal pedir primer servicio
const btnConfirmServ = document.getElementById("submitServmodConfirmar")
btnConfirmServ.addEventListener("click", (e) => {
    e.preventDefault();
    let infoinput1 = document.getElementById("inputDirUno").value
    let infoinput2 = document.getElementById("inputDirUno").value
    let vbValr = document.getElementById("bValr").textContent
    const arrInfoUltserv = [{dir1: infoinput1, dir2: infoinput2, valor: vbValr }]
    localStorage.setItem("UltimoServicioInfo", JSON.stringify(arrInfoUltserv));
    // muestro datos de mensajero asignado para realizar el servicio (aleatoriamente)
    tarjetaMensajeroAsignado("#divContMensConfirm", infoinput1 )
    setTimeout(() => {
        $("#inputDirUno, #inputDirDos").val(null);
        $("#inputDirUno, #inputDirDos").prop('disabled', false);
        $("#contNumKmDis, #contValServ").text("")
        $("#submitServmodCalcular").css({display: "inline-block"})
        $("#submitServmodConfirmar").css({display: "none"})
        arrDist = []
    }, 5000)
})
// cargo servicios dinamicamente a travez de llamado (automaticamente por ahora, a futuro a travez de evento en un nuevo boton)
const servsJson = "/json/servicios.json"
$.getJSON(servsJson, function (answer, status) {
    console.log(status)
    if(status === "success") {
        let servicios = answer
        let f = 0
        for(const datosServs of servicios) {
            f++
            $(".main-index__div-contenedor-servs").append(
        `   <div class="div-contenedor-servs__div-servicio" style="grid-area: div${f}; justify-self: center">
                <h3 class="div-contenedor-servs__h3-tit" id="titAfull">${datosServs.tit}</h3>
                <img class="div-contenedor-servs__img" src=${datosServs.img} alt="img-servicio_a-Full- cologista">
                <p >${datosServs.description}<span class="div-contenedor-servs__span" style="color: #da0039" >${datosServs.span}</span></b>
                <a class="btnCotiz" id="btnCotiz">Cotizar</a>
            </div>`);
        }
        // accion a boton cotizar
        const btncotiz = document.querySelectorAll(".btnCotiz")
        btncotiz.forEach((btncoti)=> {
            $(btncoti).click(()=> {
                $(btncoti).text("Proximamente").css({"background-color": "#d2d2d2", color: "#171717", transition: "600ms"});
            })
        })
    }
})
// cargo imagenes de empresas aliadas dinamicamente a travez de llamado (automaticamente por ahora, a futuro a travez de evento en un nuevo boton)
const EmpresAliadas = "/json/empresasAliadas.json"
$.getJSON(EmpresAliadas, function(answer, status) {
    if(status === "success") {
        let empresasAliadas = answer
        for(const LogoEmpresas of empresasAliadas) {
            $(".seccion-3-main-index__div-cont-divs-imgs").append(`<div class=${LogoEmpresas.classCont}>
                                                                <img src=${LogoEmpresas.img} class=${LogoEmpresas.classImg} alt=${LogoEmpresas.alt}>
                                                        </div>`);
        }        
    }
})