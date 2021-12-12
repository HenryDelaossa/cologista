// modoOscuroIndex
let buttonDark = document.getElementById("buttonDark")
buttonDark.addEventListener("click", () => {
    addDarkIndex()
    if (document.body.classList.contains("bodyDark")) {
        localStorage.setItem("modo", "dark")
        $(".pArr").css({color: "#d2d2d2"})
    } else {
        localStorage.setItem("modo", "sunn")
        $(".pArr").css({color: "#171717"})
    }
});
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
document.getElementById("pDistMod").style.color ="#171717"
document.getElementById("pValMod").style.color = "#171717"
const btnBorrarMod = document.getElementById("resetMod")
btnBorrarMod.addEventListener("click", () => {
    document.getElementById("contNumKmDis").style.display = "none"
    document.getElementById("contValServ").style.display = "none"
    document.getElementById("submitServmodCalcular").style.display = "inline-block"
    document.getElementById("submitServmodConfirmar").style.display = "none"
    document.getElementById("inputDirUno").disabled = false;
    document.getElementById("inputDirDos").disabled = false;
    arrDist = []
    contNumKmDis.removeChild(createbDis)
    contValServi.removeChild(createbValor);
}) 
// evento en boton confirmar dentro de modal pedir primer servicio
const btnConfirmServ = document.getElementById("submitServmodConfirmar")
btnConfirmServ.addEventListener("click", (e) => {
    e.preventDefault()  ;
    let divContMensConfirm = document.getElementById("divContMensConfirm")
    divContMensConfirm.style.display = "block"
    setTimeout(() => {
        document.querySelector("#contNumKmDis").style.display = "none"
        document.getElementById("contValServ").style.display = "none"
        document.getElementById("submitServmodCalcular").style.display = "inline-block"
        document.getElementById("submitServmodConfirmar").style.display = "none"
        document.querySelector("#inputDirUno").value = null;
        document.querySelector("#inputDirUno").disabled = false;
        document.getElementById("inputDirDos").value = null;
        document.getElementById("inputDirDos").disabled = false;
        contNumKmDis.removeChild(createbDis)
        contValServi.removeChild(createbValor)
        document.getElementById("divContMensConfirm").style.display = "none"
    }, 3000)
})

// codigo creacion de divs a partir de un array del objeto Services
const arrServs = new Array()
// obteniendo valores de nuevo objetos a pushear en array assServs
const servAfull = new Services(document.getElementById("titAfull").textContent, document.getElementById("imgAfull").getAttribute("src"), document.getElementById("textAfull").textContent)
const servMillas = new Services(document.getElementById("titMilla").textContent, document.getElementById("imgMillas").getAttribute("src"), document.getElementById("textMillas").textContent)
const servAlmac = new Services(document.getElementById("titAlmac").textContent, document.getElementById("imgAlmac").getAttribute("src"), document.getElementById("textAlmac").textContent)
const servEntreg = new Services(document.getElementById("titEntreg").textContent, document.getElementById("imgEntreg").getAttribute("src"), document.getElementById("textEntreg").textContent)
const servEmpac = new Services(document.getElementById("titEmpac").textContent, document.getElementById("imgEmpac").getAttribute("src"), document.getElementById("textEmpac").textContent)
const servAlmFrio = new Services(document.getElementById("titAlmFrio").textContent, document.getElementById("imgAlmFrio").getAttribute("src"), document.getElementById("textAlmFrio").textContent)
// push a arrServs
arrServs.push(servAfull, servMillas, servAlmac, servEntreg, servEmpac, servAlmFrio)
localStorage.setItem("ServicesArray", JSON.stringify(arrServs))
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



