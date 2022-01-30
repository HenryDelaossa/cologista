let buttonDark = document.getElementById("buttonDark");
buttonDark.addEventListener("click", () => {
    addDark();
    if (document.body.classList.contains("bodyDark")) {
        localStorage.setItem("modo", "dark");
    } else {
        localStorage.setItem("modo", "sunn");
    };
});
// evaluar local storage para tema de pagina
$(document).ready(function() {
    if (localStorage.getItem("modo") === "dark") {
        addDark();
    } else {
        return false
    };
});
// efecto sobre barra de navegacion principal
let alturaInicial = window.scrollY;
window.addEventListener("scroll", () => {
    let altura = window.scrollY;scrollEffect(alturaInicial, altura);alturaInicial = altura;
});
// validacion formulario de registro 
const inputsFormReg = document.querySelectorAll("#formularioRegistro input")
inputsFormReg.forEach((inputreg)=>{
    inputreg.addEventListener("keyup", validFormRegist);
    inputreg.addEventListener("blur", validFormRegist);
});/*check de terminos y condiciones*/
const checkTermimnos = document.getElementById("checkboxReg");checkTermimnos.addEventListener("click", () => {
    if (checkTermimnos.checked) {
        $(".mensErrorTermCondReg").text("").show();
    } else {
        $(".mensErrorTermCondReg").text("Debes aceptar terminos para    continuar con tu registro.").show();
    };
});
// verificacion de formulario de registro
const arrayDatesUser = new Array();
// array copy para uso local por seguridad usuario
var copyArrayDatesUser = new Array();
const formReg = document.getElementById("formularioRegistro");
const btnEnviarReg = document.querySelector("#btnEnviarReg");
btnEnviarReg.addEventListener("click", (e) => {
    e.preventDefault();
    if (validInpt.nombre && validInpt.apellido && validInpt.correo && validInpt.usuario && validInpt.password && validInpt.telefono && checkTermimnos.checked) {
        let namee = document.querySelector("#inputNombreReg").value;
        let lastName = document.querySelector("#inputapellidoReg").value;
        let email = document.querySelector("#inputEmailReg").value;
        let user = document.querySelector("#ínputUsuarioReg").value;
        let password = document.querySelector("#inputcontraseñaReg1").value;
        let phone = document.querySelector("#inputTelefonoReg").value;
        let country = document.getElementById("selectCiudadRegis").value;
        // array arrayDatesUser a base del objeto FormRefistro ()
        arrayDatesUser.push(new FormRegistro(namee, lastName, email, user, password, phone, country));
        $(".divContMensErrRegUserAgain").hide()
        $(".divContMensErrReg").hide()
        // mensaje modal caso datos correctos
        mensajeExitoErr("#contenedorMensajeRegistro", `Hola ${arrayDatesUser[0].name} Bienvenido a Cologista, Tu registro ah sido exitoso: enviamos un enlace a tu direccion de email para confirmar tu cuenta.`, "divContMensExitoReg", 6000);
        // hago una copia en la variable copyarrayDatesUser para proteger la contraseña del usuario, la idea es almacenar en el local storage este array y futuramente obtener datos de ahi y no del original (arrayDatesuser con la info de password) por tanto en localstorage en el valor de password se mostrara "passwordHide" en vez de la contraseña original del usuario
        copyArrayDatesUser.push(new FormRegistro(namee, lastName, email, user, "passwordHide", phone, country));
        localStorage.setItem("users", JSON.stringify(copyArrayDatesUser));
        setTimeout(()=> {
            formReg.reset();
            window.location.href = "index.html";
        }, 7000);
    } else {
        $(".divContMensExitoReg").hide()
        $(".divContMensErrRegUserAgain").hide()
        mensajeExitoErr("#contenedorMensajeRegistro", `ups, algo no esta bien, por favor verifica que todas las casillas esten correctamente diligenciadas`, "divContMensErrReg", 3000);
    };
});
// creando modal de iniciar sesion sobre boton ingresar o iniciar sesion y boton "ya estoy registrado" 
// este modal antes estaba puesto con bootstrap, ahora lo implemento dinamicamente con js (eh ahorrado muchisimas lineas en html)
const btnIngresar = document.querySelectorAll("#btnOngresRegistr")
const btnFlotIniSes = document.querySelectorAll("#btnYaRegRegistr");
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
// deshabilito formulario de registro si hay datos en el local storage  
const fieldsetFormReg = document.getElementById("fieldsetFormReg")
var arrDatesLocalstorage = new Array()
arrDatesLocalstorage.push(JSON.parse(localStorage.getItem("users")))
if (localStorage.getItem("users")) {
    fieldsetFormReg.disabled = true;
    showDatesUserReg(".main-registro");
    $("#btnOngresRegistr, #btnYaRegRegistr").hide()
}
if (localStorage.getItem("usuarioActivo")){
    fieldsetFormReg.disabled = true;
    showDatesUserOld(".main-registro");
    $("#btnOngresRegistr, #btnYaRegRegistr").hide(400)
}
$("#logoutImg").click(()=>{
    fieldsetFormReg.disabled = false;
    localStorage.removeItem("users");
    localStorage.removeItem("usuarioActivo");
    $(".contDatesUserReg").hide();
    $("#btnOngresRegistr, #btnYaRegRegistr").fadeIn(400)
    mensErrExiIniSes("#d2d2d2", `Regresa pronto, te esperamos!`, "120");
    setTimeout(()=> {
        window.location.href = "index.html";
    },1000)   
}).mouseenter(()=>{$(".psalzona").text("salir")}).mouseout(()=>{$(".psalzona").text("")})
