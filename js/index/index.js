// modoOscuroIndex
let buttonDark = document.getElementById("buttonDark")
buttonDark.addEventListener("click", () => {
    addDark()
    if (document.body.classList.contains("bodyDark")) {
        localStorage.setItem("modo", "dark")
        $(".pArr").css({color: "#d2d2d2"})
        $("#btnActiContSerJs").css({border: "1px solid #da0039"})
    } else {
        localStorage.setItem("modo", "sunn")
        $(".pArr").css({color: "#171717"})
        $("#btnActiContSerJs").css({border: "none"})
    }
});
// evaluar local storage para modo tema de pagina
$(document).ready(function() {
    if (localStorage.getItem("modo") === "dark") {
        addDark()
    } else {
        remdark()
    }
})
// efecto sobre barra de navegacion principal
let alturaInicial = window.scrollY
window.addEventListener("scroll", () => {
    let altura = window.scrollY
    if(alturaInicial >= altura){$("#navDark").css({top: "0px"}); $("#contButtonDark").css({top: "48px"})} else {$("#navDark").css({top: "-70px"}); $("#contButtonDark").css({top: "10px"})}
    alturaInicial = altura
})
// creando ventana modal index asignada a boton pedir primer servicio
const btnModal = document.getElementById("btnModal")
btnModal.addEventListener("click", (e) => {
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
createbValor.style.color = "#171717"
$("#pDistMod").css({color: "#171717"})
$("#pValMod").css({color: "#171717"})
const btnBorrarMod = document.getElementById("resetMod")
btnBorrarMod.addEventListener("click", () => {
    outDatesCalc(contNumKmDis,contValServi,createbDis,createbValor)
    arrDist = []
}) 
// evento en boton confirmar dentro de modal pedir primer servicio
const btnConfirmServ = document.getElementById("submitServmodConfirmar")
btnConfirmServ.addEventListener("click", (e) => {
    e.preventDefault()  ;
    let divContMensConfirm = document.getElementById("divContMensConfirm")
    divContMensConfirm.style.display = "block"
    setTimeout(() => {
        outDatesCalc(contNumKmDis,contValServi,createbDis,createbValor)
        document.querySelector("#inputDirUno").value = null;
        document.getElementById("inputDirDos").value = null;
        document.getElementById("divContMensConfirm").style.display = "none"
    }, 3000)
})
// obteniendo valores de nuevo objetos a pushear en array assServs
const arrServs = new Array()
const servAfull = new Services(document.getElementById("titAfull").textContent, document.getElementById("imgAfull").getAttribute("src"), document.getElementById("textAfull").textContent)
const servMillas = new Services(document.getElementById("titMilla").textContent, document.getElementById("imgMillas").getAttribute("src"), document.getElementById("textMillas").textContent)
const servAlmac = new Services(document.getElementById("titAlmac").textContent, document.getElementById("imgAlmac").getAttribute("src"), document.getElementById("textAlmac").textContent)
const servEntreg = new Services(document.getElementById("titEntreg").textContent, document.getElementById("imgEntreg").getAttribute("src"), document.getElementById("textEntreg").textContent)
const servEmpac = new Services(document.getElementById("titEmpac").textContent, document.getElementById("imgEmpac").getAttribute("src"), document.getElementById("textEmpac").textContent)
const servAlmFrio = new Services(document.getElementById("titAlmFrio").textContent, document.getElementById("imgAlmFrio").getAttribute("src"), document.getElementById("textAlmFrio").textContent)
// push a arrServs
arrServs.push(servAfull, servMillas, servAlmac, servEntreg, servEmpac, servAlmFrio)
localStorage.setItem("ServicesArray", JSON.stringify(arrServs))
// creacion de divs a partir de un array del objeto Services
let obtArrServ = localStorage.getItem("ServicesArray")
// JSON recup dates
const arrjaja = obtenDat()
function obtenDat () {
    let arrja = localStorage.getItem("ServicesArray")
    if (arrja) {
        return JSON.parse(arrja)
    }
}
if (arrjaja) {
    for (let i = 0; i < arrjaja.length; i++) {
        let contPrinc = document.getElementById("prudiv")
        $(contPrinc).css({display: "none"})
        let cont1 = document.createElement("div")
        let obj = arrjaja[i]
        let visServs = new Services(obj.tituloServ, obj.imgServ, obj.descrServ)
        createDivsServs(visServs, contPrinc, cont1)
    }
} else {
    for (let i = 0; i < arrServs.length; i++) {
        let contPrinc = document.getElementById("prudiv")
        $(contPrinc).css({display: "none"})
        let cont1 = document.createElement("div")
        let obj = arrServs[i]
        let visServs = new Services(obj.tituloServ, obj.imgServ, obj.descrServ)
        createDivsServs(visServs, contPrinc, cont1)
    }
}
// evento para mostrar divs de arrays creados a partir de evento click
$("#btnActiContSerJs").on("click", () => {
    $("#prudiv").css({display: "flex", "justify-content": "center", "flex-wrap": "wrap"})
    $("#btnActiContSerJs").text("desaparecere en 10 segundos").css({color: "#da0037", "background-color": "#171717"})
    setTimeout(() => {
        $("#prudiv").fadeOut(500)
        $("#btnActiContSerJs").text("click para ver nuevamente").css({color: "#d2d2d2", "background-color": "#da0039"})
    },9500)
})
// evento efecto boton sobre divs de servicios 
// obtuve un array apartir de la propiedad.children del divpadre con id #contDivsServs
const divPadreServs = document.getElementById("contDivsServs").children

// no salio de esta manera como queria, intentar toggleando desde sass


// for (const divsHijos of divPadreServs) {
//     $(divsHijos).append(`<a class="btnCotiz" id="btnCotiz" href="#">Cotizar</a>`)

//     $(".btnCotiz").css({display: "block", "background-color": "#da0039", color: "#d2d2d2","font-family": "'Stick No Bills', 'sans-serif'", border: "none","border-radius": "1px 8px 1px 8px", padding: "0.1rem","box-shadow":" 0px 1px 5px 0px $colorSecun", position: "absolute", top: "50%", left: "50%", margin:" -25px 0 0 -25px", transition: "300ms ease all", transform: "scale(2, 1.5)", opacity: "1"})

//     $(".servcont").mouseover(() => {
//         $("#btnCotiz").show("slow")
//     })
//     $(".servcont").mouseout(() => {
//         $("#btnCotiz").remove()
//     })
// }