let arrFin = []
const lista = new Array()
let fullName = null
let email = null
let phone = null
let service = null
let mssge = null

let submitb = document.getElementById("submitContact")
submitb.addEventListener("click", (e)=> {
    e.preventDefault() 
    setDatedFormContact()
    console.log(arrFin)
    document.getElementById("formContact").reset()
    arrFin = []
    console.log(lista)
})
// tema pagina
let buttonDark = document.getElementById("buttonDark")
buttonDark.addEventListener("click", () => {
    addDark()
    if (document.body.classList.contains("bodyDark")) {
        localStorage.setItem("modo", "dark")
    } else {
        localStorage.setItem("modo", "sunn")
    }
});
// evaluar local storage para tema de pagina
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
