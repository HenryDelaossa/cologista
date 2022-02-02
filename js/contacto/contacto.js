// efecto sobre barra de navegacion principal
let alturaInicial = window.scrollY
window.addEventListener("scroll", () => {
    let altura = window.scrollY;scrollEffect(alturaInicial, altura);alturaInicial = altura
})
//evento sobre boton submit 'enviar'
//armo una constante que me contenga a modo de array los inputs dentro del formulario de contacto y el textarea
const inputs = document.querySelectorAll('#formContact input');
const textarea = document.querySelectorAll("#formContact textarea");
const formContact = document.getElementById("formContact");
// por cada elementoinput ejecutare la funcion formValid y tambien por el elemento textarea
inputs.forEach((input)=> {
    input.addEventListener("keyup", formValid)
    input.addEventListener("blur", formValid)
})
textarea.forEach((textare)=> {
    textare.addEventListener("keyup", formValTextarea)
    textare.addEventListener("blur", formValTextarea)
})
// event sobre boton sumbit
const lista = new Array()
let fullName = null
let email = null
let phone = null
let service = null
let mssge = null
const submitb = document.getElementById("submitContact")
submitb.addEventListener("click", (e)=> {
    e.preventDefault()
    fullName = document.querySelector("#fullNameInput").value;
    email = document.querySelector("#emialInput").value;
    phone = document.querySelector("#phoneInput").value;
    service = document.querySelector(".inptslctser").value;
    mssge = document.querySelector("#textAreaInput").value;
    if (campos.nombre  && campos.correo && campos.telefono && campos.mensaje && service) {
        lista.push(new FormContact(fullName, email, phone, service,mssge));
        $(".divContMensErr").hide()
        mensajeExitoErr("#contenedorMensajeContacto",`Hola ${lista[lista.length-1].fullName}!, tus datos han sido enviados correctamente.\nNos comunicaremos contigo a la mayor brevedad.`, "divContMensExito", 5000)
        setTimeout(function() {
            formContact.reset()
            window.location.reload()
        },5000)
    } else {
        $(".divContMensExito").hide()
        mensajeExitoErr("#contenedorMensajeContacto","Debes ingresar tu informacion completa al formulario, por favor valida nuevamente e ingresa los datos correctamente", "divContMensErr",3000)
    }
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
        return false;
    }
})
// modales  botones de iniciar sesion y ya estoy registrado(usando funcion ya creada y usada en index.js (modalIniSesion.js))
const btnIngresar = document.querySelectorAll("#btnIniSesContacto")
const btnFlotIniSes = document.querySelectorAll("#btnYaregContact");
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
// mostrar info de usuario activo
var arrDatesLocalstorage = new Array()
arrDatesLocalstorage.push(JSON.parse(localStorage.getItem("users")))
if (localStorage.getItem("users")) {
    showDatesUserReg(".main-contacto");
    $("#btnIniSesContacto, #btnYaregContact, .main__botFlot-Reg").hide()
}
if (localStorage.getItem("usuarioActivo")){
    showDatesUserOld(".main-contacto");
    $("#btnIniSesContacto, #btnYaregContact, .main__botFlot-Reg").hide()
}

$("#logoutImg").click(()=>{
    localStorage.removeItem("users");
    localStorage.removeItem("usuarioActivo");
    $(".contDatesUserReg").hide();
    $("#btnIniSesContacto, #btnYaregContact, .main__botFlot-Reg").fadeIn(400)
    mensErrExiIniSes("#d2d2d2", `Regresa pronto, te esperamos!`, "120");
    setTimeout(()=> {
        window.location.href = "index.html";
    },1000)   
}).mouseenter(()=>{$(".psalzona").text("salir")}).mouseout(()=>{$(".psalzona").text("")})
// evento inner a input, simulando inpiut select para dar mejores stilos a elementos
const noshowlis = document.getElementById("body");
const inptslctser = document.querySelector(".inptslctser");
const liSelectServs = document.querySelectorAll(".liSelectServs")

inptslctser.addEventListener("focus", ()=> {
        $(".ulSlctSer").slideDown();
        inptslctser.value = ""
        
    })
liSelectServs.forEach((click) => {
    click.addEventListener("click", (e) => {
        let textslct = e.target.innerText;
        inptslctser.value = textslct;
        
        $(".ulSlctSer").slideUp();
    })
})






    


