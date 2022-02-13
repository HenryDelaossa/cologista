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
        return false    
    }
})
// efecto sobre barra de navegacion principal
let alturaInicial = window.scrollY
window.addEventListener("scroll", () => {
    let altura = window.scrollY
    scrollEffect(alturaInicial, altura)
    alturaInicial = altura
});
// modales  botones de iniciar sesion y ya estoy registrado(usando funcion ya creada y usada en index.js (modalIniSesion.js))
const btnIngresar = document.querySelectorAll("#btnYaRegNosot")
const btnFlotIniSes = document.querySelectorAll("#btnIngresNosotr");
btnFlotIniSes.forEach(function(click) {
    click.addEventListener("click", ()=> {
        modalIniSesion("#body", "1717178d")
    }) 
});
btnIngresar.forEach(function(click) {
    click.addEventListener("click", ()=> {
        modalIniSesion("#body", "#1717178d")
    }) 
});
// escucho evento de tecla esc para cerrar modal 
window.addEventListener('keyup',function(evt) {
    if (evt.key == "Escape") {
        $("#body").css({overflow:"visible"})
        // modal de iniciar sesion
        $(".divContFormModalIniSes").slideUp();
        $("#contModalIniSes").slideUp();
    }
});
var arrDatesLocalstorage = new Array()
arrDatesLocalstorage.push(JSON.parse(localStorage.getItem("users")))
if (localStorage.getItem("users")) {
    showDatesUserReg(".main-nosotros");
    $("#btnIngresNosotr, #buttonRegisRightDark, #btnYaRegNosot").hide()
}
// eventos sobre imagen de salir de zona usuario
if (localStorage.getItem("usuarioActivo")){
    showDatesUserOld(".main-nosotros");
    $("#btnIngresNosotr, #buttonRegisRightDark, #btnYaRegNosot").hide(400)
}
$("#logoutImg").click(()=>{
    localStorage.removeItem("users");
    localStorage.removeItem("usuarioActivo");
    $(".contDatesUserReg").hide();
    $("#btnIngresNosotr, #buttonRegisRightDark, #btnYaRegNosot").fadeIn(400)
    mensErrExiIniSes("#d2d2d2", `Regresa pronto, te esperamos!`, "120");
    setTimeout(()=> {
        window.location.href = "index.html";
    },1000)   
}).mouseenter(()=>{$(".psalzona").text("salir")}).mouseout(()=>{$(".psalzona").text("")})
indicatorLeft(".body")